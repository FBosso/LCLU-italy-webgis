<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <MapComponent
          :wms="wms"
          :wmsLayers="wmsLayers"
          :elastic="elastic"
          :xc="xc"
          :yc="yc"
        />
      </div>
      <div class="col">
        <div class="row">
          <TitleDescription :name="nome" :description="descrizione" />
        </div>
        <div class="row">
          <TableComponent :regione="regione" :licenza="licenza" />
        </div>
        <div class="row">
          <ToolComponent
            v-for="tool in strumenti_disponibili"
            :key="tool.id"
            :name="tool.name"
            :link="tool.link"
            class="col-md-6"
          />
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <p class="subtitle">Descrizione risorsa</p>
      <div class="justified">
        {{ descrizione }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleResourcePage',
  data() {
    return {
      /* strumenti_disponibili: {
        direct_download: {
          id: 1,
          name: 'Download',
          link: this.directDownload
        },
        wms: {
          id: 2,
          name: 'WMS',          
        },
        wfs: {
          id: 3,
          name: 'WFS',    
        },
        ArcGis_SERVER: {
          id: 4,
          name: 'ArcGis SERVER',       
        },
        metadati1: {
          id: 5,
          name: 'Metadati Sito',         
        },
        metadati2: {
          id: 6,
          name: 'Metadati XML',          
        },
      }, */
      /* url: "https://elastic:UuraDFRJ6iedIEhgqNcaEdbb@geoinformatics-project-07e882.es.us-central1.gcp.cloud.es.io/sampling_points/_mvt/geometry/{z}/{x}/{y}", */
      /* url: "http://elastic:gVI9PgkBucwq*Yrats4I@localhost:9200/sampling_points/_mvt/geometry/{z}/{x}/{y}", */
      /* url2: "https://geoservizi.regione.liguria.it/geoserver/wms?version=1.3.0&request=getcapabilities" */
    }
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/risorsa/' + id)
    return {
      nome: data.nome,
      descrizione: data.descrizione,
      regione: data.regione,
      licenza: data.licenza,
      wfs: data.wfs,
      wms: data.wms,
      wmsLayers: data.wmsLayers,
      arcgis: data.arcgis,
      directDownload: data.directDownload,
      metadataSite: data.metadataSite,
      metadataXml: data.metadataXml,
      elastic: data.elastic,
      xc: data.xc,
      yc: data.yc,

      strumenti_disponibili: {
        direct_download: {
          id: 1,
          name: 'Download',
          link: data.directDownload,
        },
        wms: {
          id: 2,
          name: 'WMS',
          link: data.wms,
        },
        wfs: {
          id: 3,
          name: 'WFS',
          link: data.wfs,
        },
        ArcGis_SERVER: {
          id: 4,
          name: 'ArcGis SERVER',
          link: data.arcgis,
        },
        metadati1: {
          id: 5,
          name: 'Metadati Sito',
          link: data.metadataSite,
        },
        metadati2: {
          id: 6,
          name: 'Metadati XML',
          link: data.metadataXml,
        },
      },
    }
  },
}
</script>

<style scoped>
.justified {
  text-align: justify;
}
</style>