/* ############################## INIZIO DESCRIZIONE COMPONENT ############################## */

questa component implementa la tabella all'interno della pagina che esegue il display della singola 
risorsa all'url "/risorse/risultati/risorsa/_id" (nonchè all'interno del file "_page.vue" nella 
cartella "risultati"). Vengono passate 4 props che corrispondono alle informazioni mostrate nella tabella:

  - regione
  - licenza
  - formato
  - inspireTheme

/* ############################## FINE DESCRIZIONE COMPONENT ############################### */
<template>
  <div>
    <table class="table">
      <caption></caption>
      <thead>
        <tr>
          <th class="title" scope="col" colspan="3">Sommario risorsa</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="attribute">Regione:</td>
          <td>{{ regione }}</td>

          <td class="attribute">Licenza:</td>
          <td>{{ licenza }}</td>
        </tr>
        <tr>
          <td class="attribute">Modello dati:</td>
          <td>{{ formato }}</td>

          <td class="attribute">Tema INSPIRE:</td>
          <td>{{ inspireTheme }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    regione: {
      type: String,
      required: true,
    },
    licenza: {
      type: String,
      required: true,
    },
    formato: {
      type: String,
      required: true,
    },
    inspireTheme: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 1.5em;
}
.attribute {
  font-weight: 600;
  font-size: 1.2em;
}
</style>