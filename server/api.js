const { Client } = require('@elastic/elasticsearch');
const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const initialize = require('./initialize').default
const app = express()

app.use(express.json())


/* DEV */
const database = new Sequelize('postgres://postgres:postgres@localhost:5432/geo-nuxt')

/* PROD */
/* const pg = require('pg')
pg.defaults.ssl = true
const database = new Sequelize(process.env.DATABASE_URL, {
   ssl: true,
   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
 }) */





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
}

const client = new Client({
    node: 'https://geoinformatics-project-07e882.es.us-central1.gcp.cloud.es.io',
    auth: {
        username: 'elastic',
        password: 'UuraDFRJ6iedIEhgqNcaEdbb'
    }
});



async function runMainApi() {
    const models = await initializeDatabaseConnection()

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