/* ############################## INIZIO DESCRIZIONE COMPONENT ############################## */

questa component implementa i pulsanti animati che consentono di accedete ai tools correlati alla 
singola risorsa  all'url "/risorse/risultati/risorsa/_id" (nonchè all'interno del file "_id.vue" 
nella cartella "risorsa"). Vengono passate 2 props:

  - name: per eseguire il display del tool correlato alla risorsa
  
  - link: per consentire al tasto di reindirizzare ai tools disponibili

/* ############################## FINE DESCRIZIONE COMPONENT ############################### */
<template>
  <a v-if="link != ''" :href="link">
    <div class="tool">
      {{ name }}
    </div>
  </a>
  <div v-else disabled:true >
    <div class="disabledLink">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.tool {
  background: rgb(128, 60, 65);
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: solid 2px white;
  transition: 0.25s linear;
}
.tool:hover {
  border: solid 2px black;
  background: transparent;
  color: black;
}
a {
  color: white;
}
.disabledLink{
  background: rgba(184, 184, 184, 0.276);
  color: rgb(81, 81, 81);
  
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: solid 2px rgb(152, 152, 152);
}
</style>