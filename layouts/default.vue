<template>
  <div>
    <!-- questi due link vengono appositamente specificati nelle singole pagine per risolvere il conflitto dei breakpoints tra bootstrap e vuetify -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;900&display=swap"
    />
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
</style>