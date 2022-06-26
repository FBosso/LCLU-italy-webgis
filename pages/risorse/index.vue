<template>
  <div class="container mt-5">
    <div class="row">
      <TopPageGeneric
        :name="topData.name"
        :description="topData.description"
        :tags="topData.tags"
      />
    </div>
    <div class="row mt-4">
      <div class="col-lg-4">
        <SideFilters />
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
    return {
      risorse: data,
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
      const data  = await this.$axios.$get(
        `/api/datiFiltrati/${selected.valuesRegione}/${selected.valuesFormatoRisorsa}/${selected.valuesLicenza}/${selected.wfs}/${selected.wms}/${selected.arcgis}/${selected.directDownload}/${selected.metadataSite}/${selected.metadataXml}`
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
</style>