/* ############################## INIZIO DESCRIZIONE COMPONENT ############################## */

questa component implementa gli switcher delle pagine in fondo alla pagina all'url "risorse/risultati" la "slippy map"
(nonchè all'interno del file "_page.vue" nella cartella "risultati"). Nessuna props viene passata ma è stata implementata 
un'interazione con lo store per:

  - aggiornare il valore della pagina in cui l'utente vuole accedere
  
  - ottenere i parametri necessari per chiamare l'API che esegua la query al database per ottenere il display delle 
  risorse nella singola pagina
    
/* ############################## FINE DESCRIZIONE COMPONENT ############################### */
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
      /* la variabile page estrae il valore della 
      pagina direttamente dallo store (dove è 
      inizializzata da 1) */
      page: this.$store.state.page,
      len: 5,
    }
  },
  /* questo metodo viene eseguito al cambiamento del 
  valore della variabile page definita in data() */
  watch: {
    page(newVal, oldVal) {
      this.updatePageStore(newVal)
    },
  },
  /* con questo metodo viene eseguita una chiamata API 
  (con api definito all'interno di server/api.js) che prende 
  tutti i parametri di ricerca impostati dall'utente dallo 
  store ed esegue una query con LIMIT e OFFSET in modo da 
  selezionare solo gli elementi da mostrare in quella specifica 
  pagina */
  mounted: async function () {
    let metadataSite = this.$store.state.selected.metadataXml

    const data = await this.$axios.$get(
      `/api/generatePages/${this.$store.state.selected.valuesRegione}/${this.$store.state.selected.valuesFormatoRisorsa}/${this.$store.state.selected.valuesLicenza}/${this.$store.state.selected.wfs}/${this.$store.state.selected.wms}/${this.$store.state.selected.arcgis}/${this.$store.state.selected.directDownload}/${metadataSite}/${this.$store.state.selected.metadataXml}`
    )
    this.len = Math.round((data.length / 10) + 0.4)
  },
  methods: {
    /* quando la pagina viene cambiata dall'utente, questo metodo 
    aggiorna il valore della variabile "pagin" nello store e porta 
    l'utente alla route definita dal nuovo numero di pagina */
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


    