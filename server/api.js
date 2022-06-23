const {Client} = require('@elastic/elasticsearch');
const { apply } = require('core-js/fn/reflect');

const client = new Client({
    node: 'https://geoinformatics-project-07e882.es.us-central1.gcp.cloud.es.io',
    auth: {
        username: 'elastic',
        password: 'UuraDFRJ6iedIEhgqNcaEdbb'
      }
});


async function run(){


    app.get('/risorse/_id', async (req, res) => {

        const mvt = await client.searchMvt({
            zoom:this.zoom,
            x: this.center[0],
            y: this.center[1],
            index: 'ita',
            field: 'geometry'
            
        })
        return mvt
    })

    const response = await client.info()
    console.log(response)

    const result = await client.search({
        index: 'ita'
    })
    console.log(result.hits.hits)

    const mvt = await client.searchMvt({
        zoom:this.zoom,
        x: this.center[0],
        y: this.center[1],
        index: 'ita',
        field: 'geometry'
        
    })
    console.log(mvt.hits)
}

run().catch(err => {
    console.log(err)
    process.exit(1)
})
