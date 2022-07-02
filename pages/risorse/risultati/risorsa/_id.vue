<template>
  <div class="container mt-5">
    <div class="row">
      
      <div class="col-3 tool-back"><NuxtLink to="/risorse">Torna alla sezione filtro</NuxtLink></div>
    
    
      <div class="col-3 tool-back"><NuxtLink :to='`/risorse/risultati/${this.$store.state.page}`'>Torna ai risultati</NuxtLink></div>
    
    </div>
    <div class="row">
      <div class="col-xl order-xl-1 order-2">
        <MapComponent
          :wms="wms"
          :wmsLayers="wmsLayers"
          :elastic="elastic"
          :xc="xc"
          :yc="yc"
        />
      </div>
      <div class="col-xl order-xl-2 order-1">
        <div class="row">
          <TitleDescription :name="nome" :description="descrizione" />
        </div>
        <div class="row">
          <TableComponent
            :regione="regione"
            :licenza="licenza"
            :formato="formato"
            :inspireTheme="inspireTheme"
          />
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
  head() {
    return {
      title: `${this.nome} | Risorse`,
      meta: [
        {
          hid: 'descriptionSingolaRisorsa',
          name: 'description',
          content: `specifica risorsa (${this.nome}) ed informazioni ad essa correlate. Mappa per la visualizzazione online del dato e possibiltà di accesso diretto agli strumenti correlati quali download, metadati, wfs, wms, ecc.`,
        },
        {
          hid: 'keywordsSingolaRisorsa',
          name: 'keywords',
          content: [
            'Risorsa',
            'Land Cover',
            'Land Use',
            'Copertura del suolo',
            'Uso del suolo',
            'wfs',
            'wms',
            'arcgis',
            'download',
            'shapefile',
            'raster',
            'metdadati',
            this.nome,
            this.regione,
            this.inspireTheme,
          ],
        },
      ],
    }
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get(`/api/risorsa/${id}`)
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
      formato: data.formato,
      inspireTheme: data.inspireTheme,

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
.tool-back {
  background: linear-gradient(
    90deg,
    
    rgb(128, 60, 65) 20%,
    rgb(60, 128, 125) 50%,
    rgb(60, 99, 128) 100%
  );
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: solid 2px white;
  transition: 0.2s linear;
  color: white;
  text-decoration: none;
}
a{
  text-decoration: none;
  color: white;
}
.tool-back:hover {
  border: solid 2px black;
  background: transparent;
  color: black;
}
.tool-back:hover a {
  color: black;
}





</style>