<template>
  <div class="resource">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'ResourceCardComponent',
  props: {
    name: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
.resource {
  border: solid 2px black;
  background: rgb(207, 207, 207);
  height: 350px;
  border-radius: 10px;
}
</style>