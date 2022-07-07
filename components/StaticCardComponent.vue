/* ############################## INIZIO DESCRIZIONE COMPONENT ############################## */

questa component implementa le immagini che sono riportate nella pagina all'url "/progetto"
(nonchè all'interno del file "progetto.vue" nella cartella "pages"). Vengono passate 2 props:

  - image: per eseguire il display dell'immagine
  
  - title: per consentire di riempire il campo "alt" dell'immagine

/* ############################## FINE DESCRIZIONE COMPONENT ############################### */
<template>
  <div class="center">
    <div class="image-s center marg">
      <img
        :src="`${image}`"
        class="card-image img-fluid"
        :alt="`${title}-img`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaticCardComponent',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: false, default: null },
  },
}
</script>

<style scoped>
.center {
  text-align: center;
}
.mail {
  color: black;
}
.bold {
  font-weight: 600;
}
.image-s {
  height: 380px;
  border-radius: 10px;
}
.card-image {
  height: 365.9px;
}
.marg {
  margin: 10px;
}
</style>