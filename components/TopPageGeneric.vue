/* ############################## INIZIO DESCRIZIONE COMPONENT ############################## */

questa component implementa la sezione superiore di tutte le pagine principali della web application 
(risorse, statistiche, progetto, contatti e anche risultati) eseguendo il display di Titolo, 
Descrizione della pagina e Tags dinamici. Vengono passate 3 props:

  - name: per eseguire il display del titolo della pagina
  - description: per eseguire il display della descrizione della pagina
  - tags: per eseguire il display dei tag dinamici

/* ############################## FINE DESCRIZIONE COMPONENT ############################### */
<template>
    <div class="row">
      <div class="col-md">
        <!-- here the title is passed in order to be displayed in the first column -->
        <h1 class="header">{{ name }}</h1>
      </div>
      <div class="col-md">
        <!-- here the description is passed in order to be displayed in the second column -->
        <p class="snippet">{{ description }}</p>
        <!-- here the array is passed in order to be dynamically displayed in the second column -->
        <p class="tags"># {{dynTags[0]}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TopPageGeneric',
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags:{type: Array,required:true}
  },
  data() {
    return {
      dynTags: this.tags
    }
  },
  /* questa funzione scandisce il display degli hashtag dinamici nella pagina */
  mounted(){
    window.setInterval(()=>{
      this.pollTag();
    }, 1000);

  },
  methods: {
    /* questa funzione prende il primo elemento Tag e lo sposta all'ultimo posto, 
    la pagina, all'atto pratico, mostra solo il tag alla prima posizione dell'array */
    pollTag(){
      const first = this.dynTags.shift();
      this.dynTags = this.dynTags.concat(first);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.tags {
  font-size: 1.8rem;
  font-weight: 800;
}
</style>