import sequelize from 'sequelize'


const express = require('express')
const app = express()
const { Sequelize, DataTypes, Op } = require('sequelize')
const initialize = require('./initialize').default
app.use(express.json())

const { Client } = require('@elastic/elasticsearch');


/* DEV */
const database = new Sequelize('postgres://postgres:postgres@localhost:5432/geo-nuxt', {
    logging: false //Set to true to log DB actions
})

// POLI
const client = new Client({
    node: 'https://geoinformatics-project-07e882.es.us-central1.gcp.cloud.es.io',
    auth: {
        username: 'elastic',
        password: 'UuraDFRJ6iedIEhgqNcaEdbb'
    }
});


/* PROD */
/* const pg = require('pg')
pg.defaults.ssl = true
const database = new Sequelize(process.env.DATABASE_URL, {
   ssl: true,
   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
 })


const client = new Client({
    node: 'https://geoinformatics-project-07e882.es.us-central1.gcp.cloud.es.io',
    auth: {
        username: process.env.ELASTIC_USER,
        password: process.env.ELASTIC_PASSWORD
    }
}); */


/* CORS NON è PIù NECESSARIO IN QUANTO SIA APPLICATION 
SERVER CHE APPLICAZIONE è COME SE FOSSERO ESEGUITE SULLA 
STESSA PORTA, QUINDI NON CI SONO PIù RICHIESTE CHE VENGONO 
FATTE DA DIVERSE ORIGINI, TUTTO VIENE GESTITO SULLA STESSA 
POERTA (LOCALHOST:3000) */

/* const cors = require ("cors")
app.use(cors({
    origin: ["http://localhost:3000"]
})) */



// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const Risorsa = database.define("risorsa", {
        nome: DataTypes.STRING(1234),
        regione: DataTypes.STRING,
        regId: DataTypes.INTEGER,
        licenza: DataTypes.STRING,
        descrizione: DataTypes.STRING(1500),
        wfs: DataTypes.STRING(1500),
        wms: DataTypes.STRING(1500),
        wmsLayers: DataTypes.STRING,
        arcgis: DataTypes.STRING(1500),
        directDownload: DataTypes.STRING(1500),
        metadataSite: DataTypes.STRING(1500),
        metadataXml: DataTypes.STRING(1500),
        elastic: DataTypes.STRING,
        xc: DataTypes.STRING,
        yc: DataTypes.STRING,
        formato: DataTypes.STRING,
        inspireTheme: DataTypes.STRING
    })
    const Region = database.define("region", {
        codReg: { type: DataTypes.INTEGER, primaryKey: true},
        nome: DataTypes.STRING,
        img: DataTypes.STRING
    })
    Region.hasMany(Risorsa, {foreignKey: 'codReg'})
    Risorsa.belongsTo(Region, {foreignKey: 'regId'})
    await database.sync({ force: true })
    return {
        Risorsa,
        Region
    }

}




/* funzione contenente tutte le API definite e che esegue la connsessione al DB */
async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)
    app.get('/tiles/:resource/:z/:x/:y', function (req, res) {

        client.searchMvt({
            zoom: +req.params.z,
            y: +req.params.y,
            x: +req.params.x,
            index: req.params.resource,
            field: 'geometry',
            //exact_bounds: true,
            //extent: 100,
            //grid_agg: "geotile",
            //grid_agg: "geohex",
            /* query:{
                match:{
                    "cod_reg":5
                }
            }, */

        }).then(function (resp) {
            console.log(req)
            console.log("Successful query! Here is the response:", resp);
            res.send(resp);
        }, function (err) {
            console.trace(err.message);
            res.send(err.message);
        });
    });


    /* app.get('/fake', async (req, res) => {
        let codici = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        let regioni = []
        for (let i = 0; i < codici.length; i++) {
            const element = codici[i];
            const regione = {
                term: {
                    "cod_reg": {
                        "value": element
                    }
                }
            }
            regioni.push(regione)
            
        }
        const result = await client.search({
            index: 'italiah',
            size: 20,
            query: {
                bool: {
                    should: regioni
                }
            }
        })
        let lista = []
        for (let i = 0; i < result.hits.hits.length; i++) {
            const element = result.hits.hits[i]._source.geometry;
            //element.properties = { regId: result.hits.hits[i]._source.cod_reg}
            //element.properties = { name: result.hits.hits[i]._source.cod_reg}
            const single = [element]
            lista.push(single)
        }
        return res.json(lista)
    }); */


    app.get('/ita', async (req, res) => {
        let codici = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        let regioni = []
        for (let i = 0; i < codici.length; i++) {
            const element = codici[i];
            const regione = {
                term: {
                    "cod_reg": {
                        "value": element
                    }
                }
            }
            regioni.push(regione)
            
        }
        const result = await client.search({
            index: 'italiaoh',
            size: 20,
            query: {
                bool: {
                    should: regioni
                }
            }
        })
        let lista = []
        for (let i = 0; i < result.hits.hits.length; i++) {
            const element = result.hits.hits[i]._source;
            const code = element.cod_reg
            const name = element.den_reg
            element.properties = {code, name}
            let extracted_element = {}
            extracted_element.type = 'Feature'
            extracted_element.id = code
            extracted_element.properties = {code, name}
            extracted_element.geometry = element.geometry
            const single = [extracted_element]
            lista.push(single)
        }
        return res.json(lista)
    });

    /* app.get('/italia/:codici', async (req, res) => {
        let codici = req.params.codici.split(',')
        //let codici = [1,3,5]
        let regioni = []
        for (let i = 0; i < codici.length; i++) {
            const element = codici[i];
            const regione = {
                term: {
                    "cod_reg": {
                        "value": element
                    }
                }
            }
            regioni.push(regione)
            
        }
        const result = await client.search({
            index: 'italias',
            query: {
                bool: {
                    should: regioni
                }
            }
        })
        let lista = []
        for (let i = 0; i < result.hits.hits.length; i++) {
            const element = result.hits.hits[i]._source.geometry;
            lista.push(element)
        }

        return res.json(lista)
    }); */



    app.get("/risorse", async (req, res) => {
        const result = await models.Risorsa.findAll({
            attributes: {exclude:['createdAt','updatedAt']},
            include: [{
                model: models.Region,
                attributes: ['nome', 'img']
            }]
        })
        return res.json(result)
    })

    app.get("/risorsa/:id", async (req, res) => {
        const id = +req.params.id
        const result = await models.Risorsa.findOne({
            where: { id },
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })
        return res.json(result)
    })


    app.get('/datiFiltrati/:valuesRegione/:valuesFormatoRisorsa/:valuesLicenza/:wfs/:wms/:arcgis/:directDownload/:metadataSite/:metadataXml/:page', async (req, res) => {


        let regioni = ["PIEMONTE", "VALLE D'AOSTA", "LOMBARDIA", "TRENTINO ALTO ADIGE", "VENETO", "FRIULI VENEZIA GIULIA", "LIGURIA",
            "EMILIA ROMAGNA", "TOSCANA", "UMBRIA", "MARCHE", "LAZIO", "ABRUZZO", "MOLISE", "CAMPANIA", "PUGLIA",
            "BASILICATA", "CALABRIA", "SICILIA", "SARDEGNA"]

        let formati_risorse = ["Vettoriale", "Raster"]

        let licenze = ['CC BY 3.0', 'CC BY 2.5', 'CC BY-NC-ND 3.0', 'CC BY', 'http://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/INSPIRE_Directive_Article13_1e',
            'IODL 2.0', 'uso concesso con obbligo di cita', 'CC BY-NC-SA 3.0 Italia', 'CC BY 4.0 Italia', 'CC BY 4.0', 'CC BY 4.0 ', 'CC BY-SA 4.0', 'uso con citazione',
            'CC BY 2.5 Italia', 'https://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/noLimitations', 'CC BY 3.0 Italia', 'legge n. 633 del 22 aprile 1941',
            'CC0 1.0', "L'accesso e la fruibilità al dato sono pubblici", 'http://www.umbriageo.regione.umbria.it/pagine/informazioni-001', 'no limitations', 'CC BY 3.0 IT']

        let wfs_bool = true
        let wms_bool = true
        let arcgis_bool = true
        let directDownload_bool = true
        let metadataSite_bool = true
        let metadataXml_bool = true

        const valuesRegione = req.params.valuesRegione.split(',')
        valuesRegione.shift()
        const valuesFormatoRisorsa = req.params.valuesFormatoRisorsa.split(',')
        valuesFormatoRisorsa.shift()
        const valuesLicenza = req.params.valuesLicenza.split(',')
        valuesLicenza.shift()
        const wfs = (req.params.wfs == 'true')
        const wms = (req.params.wms == 'true')
        const arcgis = (req.params.arcgis == 'true')
        const directDownload = (req.params.directDownload == 'true')
        const metadataSite = (req.params.metadataSite == 'true')
        const metadataXml = (req.params.metadataXml == 'true')


        if (valuesRegione.length > 0) {
            regioni = valuesRegione
        };
        if (valuesFormatoRisorsa.length > 0) {
            formati_risorse = valuesFormatoRisorsa
        };
        if (valuesLicenza.length > 0) {
            licenze = valuesLicenza
        };

        let wfs_object
        let wms_object
        let arcgis_object
        let directDownload_object
        let metadataSite_object
        let metadataXml_object


        if (wfs_bool == wfs) {
            wfs_object = {
                [Op.ne]: ''
            }
        } else {
            wfs_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };
        if (wms_bool == wms) {
            wms_object = {
                [Op.ne]: ''
            }
        } else {
            wms_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };
        if (arcgis_bool == arcgis) {
            arcgis_object = {
                [Op.ne]: ''
            }
        } else {
            arcgis_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };

        if (directDownload_bool == directDownload) {
            directDownload_object = {
                [Op.ne]: ''
            }
        } else {
            directDownload_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };

        if (metadataSite_bool == metadataSite) {
            metadataSite_object = {
                [Op.ne]: ''
            }
        } else {
            metadataSite_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };
        if (metadataXml_bool == metadataXml) {
            metadataXml_object = {
                [Op.ne]: ''
            }
        } else {
            metadataXml_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };

        let page = req.params.page

        const dati = await models.Risorsa.findAll({
            limit: 10,
            offset: 10 * (page - 1),
            where: {
                regione: regioni,
                formato: formati_risorse,
                licenza: licenze,
                wfs: wfs_object,
                wms: wms_object,
                arcgis: arcgis_object,
                directDownload: directDownload_object,
                [Op.or]: [
                    { metadataSite: metadataSite_object },
                    { metadataXml: metadataXml_object }
                ],
            },
            attributes: {exclude:['createdAt','updatedAt']},
            include: [{
                model: models.Region,
                attributes: ['nome', 'img']
            }]
        })
        return res.json(dati)
    })


    app.get('/generatePages/:valuesRegione/:valuesFormatoRisorsa/:valuesLicenza/:wfs/:wms/:arcgis/:directDownload/:metadataSite/:metadataXml', async (req, res) => {


        let regioni = ["PIEMONTE", "VALLE D'AOSTA", "LOMBARDIA", "TRENTINO ALTO ADIGE", "VENETO", "FRIULI VENEZIA GIULIA", "LIGURIA",
            "EMILIA ROMAGNA", "TOSCANA", "UMBRIA", "MARCHE", "LAZIO", "ABRUZZO", "MOLISE", "CAMPANIA", "PUGLIA",
            "BASILICATA", "CALABRIA", "SICILIA", "SARDEGNA"]

        let formati_risorse = ["Vettoriale", "Raster"]

        let licenze = ['CC BY 3.0', 'CC BY 2.5', 'CC BY-NC-ND 3.0', 'CC BY', 'http://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/INSPIRE_Directive_Article13_1e',
            'IODL 2.0', 'uso concesso con obbligo di cita', 'CC BY-NC-SA 3.0 Italia', 'CC BY 4.0 Italia', 'CC BY 4.0', 'CC BY 4.0 ', 'CC BY-SA 4.0', 'uso con citazione',
            'CC BY 2.5 Italia', 'https://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/noLimitations', 'CC BY 3.0 Italia', 'legge n. 633 del 22 aprile 1941',
            'CC0 1.0', "L'accesso e la fruibilità al dato sono pubblici", 'http://www.umbriageo.regione.umbria.it/pagine/informazioni-001', 'no limitations', 'CC BY 3.0 IT']

        let wfs_bool = true
        let wms_bool = true
        let arcgis_bool = true
        let directDownload_bool = true
        let metadataSite_bool = true
        let metadataXml_bool = true

        const valuesRegione = req.params.valuesRegione.split(',')
        valuesRegione.shift()
        const valuesFormatoRisorsa = req.params.valuesFormatoRisorsa.split(',')
        valuesFormatoRisorsa.shift()
        const valuesLicenza = req.params.valuesLicenza.split(',')
        valuesLicenza.shift()
        const wfs = (req.params.wfs == 'true')
        const wms = (req.params.wms == 'true')
        const arcgis = (req.params.arcgis == 'true')
        const directDownload = (req.params.directDownload == 'true')
        const metadataSite = (req.params.metadataSite == 'true')
        const metadataXml = (req.params.metadataXml == 'true')


        if (valuesRegione.length > 0) {
            regioni = valuesRegione
        };
        if (valuesFormatoRisorsa.length > 0) {
            formati_risorse = valuesFormatoRisorsa
        };
        if (valuesLicenza.length > 0) {
            licenze = valuesLicenza
        };

        let wfs_object
        let wms_object
        let arcgis_object
        let directDownload_object
        let metadataSite_object
        let metadataXml_object


        if (wfs_bool == wfs) {
            wfs_object = {
                [Op.ne]: ''
            }
        } else {
            wfs_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };
        if (wms_bool == wms) {
            wms_object = {
                [Op.ne]: ''
            }
        } else {
            wms_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };
        if (arcgis_bool == arcgis) {
            arcgis_object = {
                [Op.ne]: ''
            }
        } else {
            arcgis_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };

        if (directDownload_bool == directDownload) {
            directDownload_object = {
                [Op.ne]: ''
            }
        } else {
            directDownload_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };

        if (metadataSite_bool == metadataSite) {
            metadataSite_object = {
                [Op.ne]: ''
            }
        } else {
            metadataSite_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };
        if (metadataXml_bool == metadataXml) {
            metadataXml_object = {
                [Op.ne]: ''
            }
        } else {
            metadataXml_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };


        const dati = await models.Risorsa.findAll({
            where: {
                regione: regioni,
                formato: formati_risorse,
                licenza: licenze,
                wfs: wfs_object,
                wms: wms_object,
                arcgis: arcgis_object,
                directDownload: directDownload_object,
                [Op.or]: [
                    { metadataSite: metadataSite_object },
                    { metadataXml: metadataXml_object }
                ],
            },
            attributes: {exclude:['createdAt','updatedAt']},
            include: [{
                model: models.Region,
                attributes: ['nome', 'img']
            }]
        })
        return res.json(dati)
    })


    app.get('/shapes/:valuesRegione/:valuesFormatoRisorsa/:valuesLicenza/:wfs/:wms/:arcgis/:directDownload/:metadataSite/:metadataXml', async (req, res) => {


        let regioni = ["PIEMONTE", "VALLE D'AOSTA", "LOMBARDIA", "TRENTINO ALTO ADIGE", "VENETO", "FRIULI VENEZIA GIULIA", "LIGURIA",
            "EMILIA ROMAGNA", "TOSCANA", "UMBRIA", "MARCHE", "LAZIO", "ABRUZZO", "MOLISE", "CAMPANIA", "PUGLIA",
            "BASILICATA", "CALABRIA", "SICILIA", "SARDEGNA"]

        let formati_risorse = ["Vettoriale", "Raster"]

        let licenze = ['CC BY 3.0', 'CC BY 2.5', 'CC BY-NC-ND 3.0', 'CC BY', 'http://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/INSPIRE_Directive_Article13_1e',
            'IODL 2.0', 'uso concesso con obbligo di cita', 'CC BY-NC-SA 3.0 Italia', 'CC BY 4.0 Italia', 'CC BY 4.0', 'CC BY 4.0 ', 'CC BY-SA 4.0', 'uso con citazione',
            'CC BY 2.5 Italia', 'https://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/noLimitations', 'CC BY 3.0 Italia', 'legge n. 633 del 22 aprile 1941',
            'CC0 1.0', "L'accesso e la fruibilità al dato sono pubblici", 'http://www.umbriageo.regione.umbria.it/pagine/informazioni-001', 'no limitations', 'CC BY 3.0 IT']

        let wfs_bool = true
        let wms_bool = true
        let arcgis_bool = true
        let directDownload_bool = true
        let metadataSite_bool = true
        let metadataXml_bool = true

        const valuesRegione = req.params.valuesRegione.split(',')
        valuesRegione.shift()
        const valuesFormatoRisorsa = req.params.valuesFormatoRisorsa.split(',')
        valuesFormatoRisorsa.shift()
        const valuesLicenza = req.params.valuesLicenza.split(',')
        valuesLicenza.shift()
        const wfs = (req.params.wfs == 'true')
        const wms = (req.params.wms == 'true')
        const arcgis = (req.params.arcgis == 'true')
        const directDownload = (req.params.directDownload == 'true')
        const metadataSite = (req.params.metadataSite == 'true')
        const metadataXml = (req.params.metadataXml == 'true')


        if (valuesRegione.length > 0) {
            regioni = valuesRegione
        };
        if (valuesFormatoRisorsa.length > 0) {
            formati_risorse = valuesFormatoRisorsa
        };
        if (valuesLicenza.length > 0) {
            licenze = valuesLicenza
        };

        let wfs_object
        let wms_object
        let arcgis_object
        let directDownload_object
        let metadataSite_object
        let metadataXml_object


        if (wfs_bool == wfs) {
            wfs_object = {
                [Op.ne]: ''
            }
        } else {
            wfs_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };
        if (wms_bool == wms) {
            wms_object = {
                [Op.ne]: ''
            }
        } else {
            wms_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };
        if (arcgis_bool == arcgis) {
            arcgis_object = {
                [Op.ne]: ''
            }
        } else {
            arcgis_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };

        if (directDownload_bool == directDownload) {
            directDownload_object = {
                [Op.ne]: ''
            }
        } else {
            directDownload_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };

        if (metadataSite_bool == metadataSite) {
            metadataSite_object = {
                [Op.ne]: ''
            }
        } else {
            metadataSite_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };
        if (metadataXml_bool == metadataXml) {
            metadataXml_object = {
                [Op.ne]: ''
            }
        } else {
            metadataXml_object = {
                [Op.notIn]: ['array', 'casuale']
            }
        };


        const dati = await models.Risorsa.findAll({
            where: {
                regione: regioni,
                formato: formati_risorse,
                licenza: licenze,
                wfs: wfs_object,
                wms: wms_object,
                arcgis: arcgis_object,
                directDownload: directDownload_object,
                [Op.or]: [
                    { metadataSite: metadataSite_object },
                    { metadataXml: metadataXml_object }
                ],
            },
            attributes: ['regId', [sequelize.fn("COUNT", "1"), "CountedValue"]],
            group: ["regId"],
            order: [[sequelize.col("CountedValue"), "DESC"]]   
        })
        return res.json(dati)
    })

}

/* app.listen(3001, () =>{
    console.log("server running on port 3001")
}) */

/* GRAZIE A QUESTA LINEA ESEGUIAMO L'APPLICATION 
SERVER SULLA STESSA PORTA DELL'APPLICAZIONE. IN 
QUESTO MODO POSSIAMO COMMENTARE LA PORZIONE DI 
CODICE CHE FACEVA RUNNARE IL SERVER SULLA PORTA 3001 */

runMainApi()

export default app