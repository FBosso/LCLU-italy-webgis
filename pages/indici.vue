<template>
  <div class="container mt-5">
    <TopPageGeneric
      :name="topData.name"
      :description="topData.description"
      :tags="topData.tags"
    />
    <div class="subtitle">Risorse</div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Materiale</th>
          <th scope="col">link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">PDF di presentazione del lavoro</th>
          <td scope="row"> <a class="link" href="https://shorturl.at/orJOQ">https://shorturl.at/orJOQ</a> </td>
        </tr>
        <tr>
          <th scope="row">Github repo Jupyter Notebook</th>
          <td scope="row"> <a class="link" href="https://github.com/FBosso/LandCover_LandUse_Italy">https://github.com/FBosso/LandCover_LandUse_Italy</a> </td>
        </tr>
        
      </tbody>
    </table>

    <div class="subtitle mb-3">Jupyter notebook</div>
    <iframe
      src="https://fbosso.github.io/CNITA"
      width="100%"
      height="2000px"
      class="notebook"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'IndiciPage',
  data() {
    return {
      topData: {
        name: 'Indici',
        description:
          'In questa sezione vengono mostrate una serie di statistiche atte a fotografare lo stato di fatto su base regionale (in termini individuali, non comparativi) di accessibilità e reperibilità dei dati di Copertura ed Uso del suolo. Le risorse per le quali accessibilità e reperibilità sono state determinate fanno capo ad un inventario di dati costantemente aggiornato da ISPRA (Istituto Superiore per la Protezione e la Ricerca Ambientale) allo scopo di perseguire il progetto EAGLE',
        tags: ['Accessibilità', 'Reperibilità', 'Clusters'],
      },
    }
  },
}
</script>

<style scoped>
.notebook {
  border: solid 2px rgb(169, 169, 169);
  border-radius: 10px;
}
.link{
    color: rgb(70, 70, 222);
}
</style>