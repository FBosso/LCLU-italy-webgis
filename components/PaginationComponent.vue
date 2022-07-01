<template>
  <v-app>
    <v-pagination v-model="page" :length="4" circle></v-pagination>
  </v-app>
</template>

<script>
export default {
  name: 'PaginationComponent',
  data() {
    return {
      page: 1,
    }
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