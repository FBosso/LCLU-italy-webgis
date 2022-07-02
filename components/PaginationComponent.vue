<template>
  <v-app>
    <v-pagination v-model="page" :length="len" circle></v-pagination>
  </v-app>
</template>

<script>
export default {
  name: 'PaginationComponent',
  data() {
    return {
      page: this.$store.state.page,
      len: 5,
    }
  },
  watch: {
    page(newVal, oldVal) {
      this.updatePageStore(newVal)
    },
  },
  mounted: async function () {
    let metadataSite = this.$store.state.selected.metadataXml

    const data = await this.$axios.$get(
      `/api/generatePages/${this.$store.state.selected.valuesRegione}/${this.$store.state.selected.valuesFormatoRisorsa}/${this.$store.state.selected.valuesLicenza}/${this.$store.state.selected.wfs}/${this.$store.state.selected.wms}/${this.$store.state.selected.arcgis}/${this.$store.state.selected.directDownload}/${metadataSite}/${this.$store.state.selected.metadataXml}`
    )
    this.len = Math.round((data.length / 10) + 0.4)
  },
  methods: {
    updatePageStore: function (n) {
      this.$store.commit('changePage', { n })
      this.$router.push(`/risorse/risultati/${n}`)
    },
  },
}
</script>

<style scoped>
.vertical-narrow {
  height: 100px;
}

.v-application--wrap {
  min-height: 0vh !important;
}
</style>


    