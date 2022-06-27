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
      <div class="col-lg-4">
        <SideFilters />
        <div class="note">
          NOTE: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt repudiandae pariatur eveniet non autem iure quod eaque nisi nihil eos, consectetur, culpa, alias velit commodi sit quam vel facere.
        </div>
      </div>
      <div class="col-lg-8" v-if="defaul != true">
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
        />
      </div>
      <div class="col-lg-8" v-if="defaul == true">
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
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RisorsePage',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/risorse')
    console.log(data)
    let listaRisorse = []
    for (let index = 0; index < data.length; index++) {
      listaRisorse.push(data[index].nome)
    }
    return {
      risorse: data,
      listaRisorse: listaRisorse
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
            this.listaRisorse.toString()
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
          'In questa sezione i dati geospaziali raccolti nei geoportali regionali possono essere consultati e filtrati a seconda delle esigenze dell\'utente. Una preview delle risorse con relativa descrizione e strumenti correlati viene mostrata',
        tags: ['DatiGeospaziali', 'Regioni', 'LandCover', 'LandUse'],
      },
      defaul: true,
    }
  },
  created() {
    this.$nuxt.$on('change-resources', ($event) => this.updateResources($event))
  },
  methods: {
    updateResources: async function (selected) {
      console.log('ciao')
      console.log(selected)
      let metadataSite = selected.metadataXml
      console.log(metadataSite)
      const data  = await this.$axios.$get(
        `/api/datiFiltrati/${selected.valuesRegione}/${selected.valuesFormatoRisorsa}/${selected.valuesLicenza}/${selected.wfs}/${selected.wms}/${selected.arcgis}/${selected.directDownload}/${metadataSite}/${selected.metadataXml}`
      )
      console.log(data)
      this.defaul = true
      this.defaul = false
      this.refresh = data
    },
  },
}
</script>

<style scoped>
.note{
  border: solid 2px black;
  border-radius: 10px;
  padding: 10px;
  text-align: justify;
}
</style>