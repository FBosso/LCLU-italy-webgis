<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <MapComponent />
      </div>
      <div class="col">
        <TitleDescription
          :name="risorsa.name"
          :description="risorsa.description"
        />
      </div>
    </div>
    <div class="row container mt-5">
      <ToolComponent
        v-for="tool in strumenti_disponibili"
        :key="tool.id"
        :name="tool.name"
        :link="tool.link"
        class="col-md"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleResourcePage',
  data() {
    return {
      risorsa: {
        name: 'Nome Risorsa',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus explicabo doloribus? Necessitatibus totam quia ad eveniet distinctio sunt est nostrum quasi, blanditiis voluptates nesciunt illo ab fugiat non molestiae?',
      },
      strumenti_disponibili: {
        direct_download: {
          id: 1,
          name: 'Download',
          link: '',
        },
        wms: {
          id: 2,
          name: 'WMS',
          link: '',
        },
        wfs: {
          id: 3,
          name: 'WFS',
          link: '',
        },
        ArcGis_SERVER: {
          id: 4,
          name: 'ArcGis SERVER',
          link: '',
        },
        metadati: {
          id: 5,
          name: 'Metadati',
          link: '',
        },
      },
    }
  },
}
</script>

<style scoped>
</style>