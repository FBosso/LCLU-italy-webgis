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
          <td class="attribute">Formato:</td>
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

<style lang="scss" scoped>
.title {
  font-size: 1.5em;
}
.attribute {
  font-weight: 600;
  font-size: 1.2em;
}
</style>