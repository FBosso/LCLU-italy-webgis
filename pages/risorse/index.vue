<template>
  <div class="container mt-5">
    <div class="row">
      <TopPageGeneric
        :name="topData.name"
        :description="topData.description"
        :tags="topData.tags"
      />
    </div>
    <div class="row mt-4">
      <div class="col-xl-3 mb-5">
        <SideFilters />
      </div>
      <div class="col">
        <!-- <ResourceCard
          v-for="res in risorse"
          :key="res.id"
          :name="res.nome"
          class="mb-3"
        /> -->
        <ResourceCardMod
          v-for="res in risorse"
          :key="res.id"
          :nome="res.nome"
          :wms="res.wms"
          :wfs="res.wfs"
          :arcgis="res.arcgis"
          :directDownload="res.directDownload"
          :metadataSite="res.metadataSite"
          :metadataXml="res.metadataXml"
          :descrizione="res.descrizione"
          :id="res.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RisorsePage',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/risorse')
    return {
      risorse: data,
    }
  },
  data() {
    return {
      topData: {
        name: 'Risorse',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, soluta deserunt dolor asperiores amet aut doloremque illum similique, rem voluptates temporibus animi excepturi. Fugit alias quae inventore asperiores? Voluptas, laudantium.',
        tags: ['DatiGeospaziali', 'Regioni', 'LandCover', 'LandUse'],
      },
      resources: {
        res1: {
          id: 0,
          name: 'Risorsa 1',
        },
        res2: {
          id: 1,
          name: 'Risorsa 2',
        },
        res3: {
          id: 2,
          name: 'Risorsa 3',
        },
      },
    }
  },
}
</script>

<style scoped>
</style>