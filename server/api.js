import { DATE } from 'sequelize'

const express = require('express')
const app = express()
const { Sequelize, DataTypes, Op } = require('sequelize')
const initialize = require('./initialize').default
app.use(express.json())

const { Client } = require('@elastic/elasticsearch');


/* DEV */
/* const database = new Sequelize('postgres://postgres:postgres@localhost:5432/geo-nuxt', {
    logging: false //Set to true to log DB actions
})

const client = new Client({
    node: 'https://geoinformatics-project-07e882.es.us-central1.gcp.cloud.es.io',
    auth: {
        username: 'elastic',
        password: 'UuraDFRJ6iedIEhgqNcaEdbb'
    }
}); */

/* PROD */
const pg = require('pg')
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
});


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
    const Risorse = database.define("risorse", {
        nome: DataTypes.STRING,
        regione: DataTypes.STRING,
        licenza: DataTypes.STRING,
        descrizione: DataTypes.STRING(1234),
        wfs: DataTypes.STRING,
        wms: DataTypes.STRING,
        wmsLayers: DataTypes.STRING,
        arcgis: DataTypes.STRING,
        directDownload: DataTypes.STRING,
        metadataSite: DataTypes.STRING,
        metadataXml: DataTypes.STRING,
        elastic: DataTypes.STRING,
        nomeRisorsa: DataTypes.STRING,
        xc: DataTypes.STRING,
        yc: DataTypes.STRING,
        formato: DataTypes.STRING,
        inspireTheme: DataTypes.STRING
    })
    await database.sync({ force: true })
    return {
        Risorse
    }

}





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
            //extent: 10000,
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


    app.get("/risorse", async (req, res) => {
        const result = await models.Risorse.findAll({
            attributes: ['id', 'nome', 'regione', 'licenza', 'wms', 'wfs', 'arcgis', 'directDownload', 'metadataSite', 'metadataXml', 'descrizione']
        })
        return res.json(result)
    })

    app.get("/risorsa/:id", async (req, res) => {
        const id = +req.params.id
        const result = await models.Risorse.findOne({
            where: { id },
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })
        return res.json(result)
    })


    app.get('/datiFiltrati/:valuesRegione/:valuesFormatoRisorsa/:valuesLicenza/:wfs/:wms/:arcgis/:directDownload/:metadataSite/:metadataXml', async (req, res) => {

        
        let regioni = ["PIEMONTE", "VALLE D'AOSTA", "LOMBARDIA", "TRENTO", "VENETO", "FRIULI VENEZIA GIULIA", "LIGURIA",
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
        const wfs = req.params.wfs
        const wms = req.params.wms
        const arcgis = req.params.arcgis
        const directDownload = req.params.directDownload
        const metadataSite = req.params.metadataSite
        const metadataXml = req.params.metadataXml

         
        if (valuesRegione.length > 0) {
            regioni = valuesRegione
        };
        if (valuesFormatoRisorsa.length > 0) {
            formati_risorse = valuesFormatoRisorsa
        };
        if (valuesLicenza.length > 0) {
            licenze = valuesLicenza
        };

        /* if (req.params.wfs) {
            wfs_bool = ""
        } else {
            wfs_bool
        };
        if (req.params.wms) {
            attribute_list.push('wms')
        };
        if (req.params.arcgis) {
            attribute_list.push('arcgis')
        };
        if (req.params.directDownload) {
            attribute_list.push('directDownload')
        };
        if (req.params.metadataSite) {
            attribute_list.push('metadataSite')
        };
        if (req.params.metadataXml) {
            attribute_list.push('metadataXml')
        }; */

        const dati = await models.Risorse.findAll({
            where: {
                regione: regioni,
                formato: formati_risorse,
                licenza: licenze
            }
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