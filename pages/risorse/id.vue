<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <MapComponent :url="url" :url2="url2" />
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
          'Carta degli habitat della Regione Toscana, codificati secondo il sistema di classificazione europeo CORINE Biotopes (C.E.C. 1991), con adattamenti ed integrazioni- Dati di valutazione ecologico-ambientale: Indici di valore ecologico, sensibilità ecologica, pressione antropica e fragilità ambientale attribuiti a ciascun biotopo cartografato, con relativa restituzione cartografica per classi di valore. Pubblicazioni di riferimento concettuale e metodologico: - “ISPRA 2009, Il progetto Carta della Natura alla scala 1:50.000. ISPRA ed., Serie Manuali e Linee Guida n.48/2009. Roma”;- ISPRA 2009, Gli habitat in Carta della Natura. Schede descrittive degli habitat per la cartografia alla scala 1:50.000.- ISPRA ed., Serie Manuali e Linee Guida n.49/2009. Roma http://www.isprambiente.gov.it/files/carta-della-natura/catalogo-habitat.pdf;- Nuova legenda per Carta della Natura: http://www.isprambiente.gov.it/it/servizi-per-lambiente/sistema-carta-della-natura/nuova-legenda-nazionale-per-la-cartografia-degli-habitat',
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
      /* url: "https://elastic:UuraDFRJ6iedIEhgqNcaEdbb@geoinformatics-project-07e882.es.us-central1.gcp.cloud.es.io/sampling_points/_mvt/geometry/{z}/{x}/{y}", */
      url: "http://elastic:gVI9PgkBucwq*Yrats4I@localhost:9200/sampling_points/_mvt/geometry/{z}/{x}/{y}",
      url2: "https://geoservizi.regione.liguria.it/geoserver/wms"
    }
  },
}
</script>

<style scoped>
</style>