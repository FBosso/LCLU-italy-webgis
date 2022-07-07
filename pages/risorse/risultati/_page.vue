<template>
  <div class="container mt-5">
    <div class="row mb-3">
      <TopPageGeneric
        :name="topData.name"
        :description="topData.description"
        :tags="topData.tags"
      />
    </div>
    <div class="col-md-3 p-0">
      <NuxtLink to="/risorse"
        ><div class="tool-back">Torna alla sezione filtro</div></NuxtLink
      >
    </div>
    <div class="row">
      <div class="col">
        <ResourceCard
          v-for="res in risorse"
          :key="res.id"
          :nome="res.nome"
          :wms="res.wms"
          :wfs="res.wfs"
          :arcgis="res.arcgis"
          :directDownload="res.directDownload"
          :metadataSite="res.metadataSite"
          :metadataXml="res.metadataXml"
          :descrizione="res.descrizione"
          :id="res.id"
          :regione="res.regione"
          :img="res.region.img"
        />
      </div>
    </div>
    <div class="row">
      <NuxtLink to="/risorse">
        <div class="col-3 mb-4 tool-back">Torna alla sezione filtro</div>
      </NuxtLink>
      <div class="col">
        <PaginationComponent />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListPage',
  /* sfruttando i parametri dell URL e lo store viene generata una chiamata API 
  che consente di ottenre il gruppo di risorse interessato per la formazione della pagina */
  async asyncData({ route, $axios, store }) {
    const { page } = route.params
    const { data } = await $axios.get(
      `/api/datiFiltrati/${store.state.selected.valuesRegione}/${store.state.selected.valuesFormatoRisorsa}/${store.state.selected.valuesLicenza}/${store.state.selected.wfs}/${store.state.selected.wms}/${store.state.selected.arcgis}/${store.state.selected.directDownload}/${store.state.selected.metadataXml}/${store.state.selected.metadataXml}/${store.state.page}`
    )
    /* con questo ciclo for si crea un array contenente tutte le risorse presenti 
    nella pagina considerata in modo da porre tutti i nomi all'interno dei metadati della pagina */
    let listaRisorse = []
    for (let index = 0; index < data.length; index++) {
      listaRisorse.push(data[index].nome)
    }
    return {
      risorse: data,
      listaRisorse: listaRisorse,
    }
  },
  /* grazie a questo metodo vengono dinamicamente specificati i metadati della pagina */
  head() {
    return {
      title: `Pagina ${this.$store.state.page} | Risorse`,
      meta: [
        {
          hid: 'descriptionPaginaRisorse',
          name: 'description',
          content: `Nella presente pagina sono disponibili le seguenti risorse: ${this.listaRisorse.toString()}. Si può accedere a ciascuna risorsa per poter usufruire degli strumenti correlati`,
        },
        {
          hid: 'keywordsPaginaRisorse',
          name: 'keywords',
          content: [
            'Risorse',
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
            this.listaRisorse.toString(),
          ],
        },
      ],
    }
  },
  /* questi dati sono statici, dunque vengono inseriti all'interno del codice e non nel DB */
  data() {
    return {
      topData: {
        name: 'Risultati',
        description:
          'In questa sezione i dati risultanti dalla ricerca effettuata sono suddivisi in pagine e possono essere consultati. Una preview delle risorse con relativa descrizione e strumenti correlati viene mostrata',
        tags: ['DatiGeospaziali', 'Regioni', 'LandCover', 'LandUse'],
      },
      defaul: true,
      shapes: [],
      display: [],
    }
  },
  /* created() {
    this.$nuxt.$on('change-resources', ($event) => this.updateResources($event))
  }, */
}
</script>

<style scoped>
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
}
.tool-back:hover {
  border: solid 2px black;
  background: transparent;
  color: black;
}
</style>