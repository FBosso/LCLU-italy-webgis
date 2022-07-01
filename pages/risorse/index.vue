<template>
  <div class="container mt-5">
    <div class="row mb-3">
      <TopPageGeneric
        :name="topData.name"
        :description="topData.description"
        :tags="topData.tags"
      />
    </div>
    <div class="row mt-4">
      <div class="col-lg-6 mt-2">
        <SideFilters />
      </div>
      <div class="col-lg-6">
        <ItalyComponent
          ref="italy"
          class="mb-3"
          :regioni="regioni"
          :display="display"
          :info="shapes"
        />
        <div class="note">
          NOTE: <b>(i)</b> Il <u>"Modello dati"</u> può essere specificato nel
          filtro. Ciò nonostante la specifica di tale parametro non garantisce
          la possibilità di scaricamento delle risorse trovate [Talvolta il
          Modello dati è specificato nel geoportale di riferimento ma la
          possbilità di download non viene fornita]. <b>(ii)</b> Usando lo
          <u>"switch" Metadati</u>
          presente nella sezione filtri è possibile veicolare la ricerca nei
          confronti di risorse delle quali sono forniti i metadati. In caso di
          assenza di metadati in formato XML viene fornito un collegamento alla
          pagina web del geoportale di riferimento dove i metadati vengono
          mostrati a livello di pagina web.
        </div>
      </div>
    </div>
    <div class="row"></div>
    <div class="row">
      <div class="col" v-if="defaul != true">
        <ResourceCard
          v-for="res in refresh"
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
      <div class="col" v-if="defaul == true">
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
      <div class="col">
        <PaginationComponent />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RisorsePage',
  async asyncData({ $axios }) {
    /* ottenimento regioni GEOJSON */
    let geojson = await $axios.get(`/api/ita`)
    geojson = geojson.data
    /* ottenimento risorse */
    const { data } = await $axios.get('/api/risorse')
    console.log(data)

    /* ++++++++++++++++++++++++++++++++++++++++++ */

    //const clusters = data.length/10
    

    /* ++++++++++++++++++++++++++++++++++++++++++ */

    let listaRisorse = []
    for (let index = 0; index < data.length; index++) {
      listaRisorse.push(data[index].nome)
    }
    return {
      risorse: data,
     

      /* per metadati pagina */
      listaRisorse: listaRisorse,

      regioni: geojson,
    }
  },

  head() {
    return {
      title: 'Tutte le risorse | Risorse',
      meta: [
        {
          hid: 'descriptionTutteRisorse',
          name: 'description',
          content: `Tutte le risorse e le informazioni ad esse correlate. Possibilità di porre filtri di ricerca per le risorse interesate e possibiltà di accesso alle ringole risorse`,
        },
        {
          hid: 'keywordsTutteRisorse',
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
  data() {
    return {
      topData: {
        name: 'Risorse',
        description:
          "In questa sezione i dati geospaziali raccolti nei geoportali regionali possono essere consultati e filtrati a seconda delle esigenze dell'utente. Una preview delle risorse con relativa descrizione e strumenti correlati viene mostrata",
        tags: ['DatiGeospaziali', 'Regioni', 'LandCover', 'LandUse'],
      },
      defaul: true,
      shapes: [],
      display: [],
    }
  },
  created() {
    this.$nuxt.$on('change-resources', ($event) => this.updateResources($event))
  },
  methods: {
    updateResources: async function (selected) {
      let metadataSite = selected.metadataXml
      console.log(selected.valuesRegione)
      const data = await this.$axios.$get(
        `/api/datiFiltrati/${selected.valuesRegione}/${selected.valuesFormatoRisorsa}/${selected.valuesLicenza}/${selected.wfs}/${selected.wms}/${selected.arcgis}/${selected.directDownload}/${metadataSite}/${selected.metadataXml}`
      )
      this.shapes = await this.$axios.$get(
        `/api/shapes/${selected.valuesRegione}/${selected.valuesFormatoRisorsa}/${selected.valuesLicenza}/${selected.wfs}/${selected.wms}/${selected.arcgis}/${selected.directDownload}/${metadataSite}/${selected.metadataXml}`
      )

      /* const caso = await this.$axios.$get(
        `/api/caso/${selected.wfs}`
      ) */

      this.obtainShapes()

      this.defaul = true
      this.defaul = false
      this.refresh = data

      //this.$refs.italy.assignProperties(this.shapes, this.regioni);

      /* this.addProperties() */
    },
    obtainShapes: async function () {
      let codici = []
      for (let i = 0; i < this.shapes.length; i++) {
        const element = this.shapes[i]
        const id = element.regId
        codici.push(id)
      }
      this.display = codici
    },
    /* addProperties: function (regioni){
      regioni = 'ciao'
      for (let i = 0; i < this.shapes.length; i++) {
        const info = this.shapes[i];
        for (let j = 0; j < regioni[0].length; j++) {
          const reg = regioni[0][j];
          if (j == (info.regId - 1)) {
            reg.properties = info.CountedValue
            console.log(reg)
          }
        }
      }
    } */
  },
}
</script>

<style scoped>
.note {
  border: solid 2px black;
  border-radius: 10px;
  padding: 10px;
  text-align: justify;
}
</style>