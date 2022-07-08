/* ############################## INIZIO DESCRIZIONE COMPONENT ############################## */

questa component genera la "slippy map" presente all'interno della pagina all'URL "/risorse/risultati/risorsa/_id" 
(nonchè all'interno del file "_id.vue" nella cartella "risorsa"). Vengono passate 4 props:

  - wms: il link della wms request in caso non sia possibile eseguire il display della risorsa con elasticsearch 
    (per via del fatto che lo shapefile non può essere reperito e quindi caricato su elasticsearch)

  - wmsLayers: quali layers estrarre dalla wms request specificata nella proprs precedente
  
  - elastic: nome dell'elasticsearch index della risorsa di cui si vuole eseguire il display usando 
    l'Elasticsearch vector tile search API

  - xc: coordinata x di inizializzazione della mappa

  - yc: coordinata y di inizializzazione della mappa
    
/* ############################## FINE DESCRIZIONE COMPONENT ############################### */
<template>
  <div class="container">
    <div class="map">
      <vl-map
        v-if="!reloading"
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
      >
        <vl-view
          :zoom.sync="zoom"
          :center.sync="center"
          :rotation.sync="rotation"
          style="border-radius: 10px"
        ></vl-view>

        <!-- BASEMAP -->
        <vl-layer-tile :opacity="opacity">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>

        <!--  WMS RESOURCES -->
        <vl-layer-tile v-if="elastic === ''">
          <vl-source-wms :url="wms" :layers="wmsLayers"></vl-source-wms>
        </vl-layer-tile>

        <!-- ======================== START SWITCH DEV - PROD ================================== -->

        <!-- DEVELOPMENT ++++++++++++++++++++++++++++++++++++++++++++++ -->
        <!-- VECTOR RESOURCES -->

        <!-- con questo url viene usato un API definito in "server/api.js" che si collega 
        ad Elasticsearch e consente l'impiego dell'Elasticsearch vector tile search API -->
        <!-- <vl-layer-vector-tile v-if="elastic != ''">
          <vl-source-vector-tile
            :url="`http://localhost:3000/api/tiles/${elastic}/{z}/{x}/{y}`">
          </vl-source-vector-tile>
        </vl-layer-vector-tile> -->

        <!-- PRODUCTION +++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <!-- VECTOR RESOURCES -->
        <vl-layer-vector-tile>
          <vl-source-vector-tile
            :url="`https://lcluitalia.herokuapp.com/api/tiles/${elastic}/{z}/{x}/{y}`"
          ></vl-source-vector-tile>
        </vl-layer-vector-tile>

        <!-- ======================== END SWITCH DEV - PROD =================================== -->

      </vl-map>
    </div>

    <div class="square" style="padding: 20px">
      Zoom: {{ Math.round(zoom) }}<br />
      Center: {{ Math.round(center[0]) }}, {{ Math.round(center[1]) }} <br />
      Rotation: {{ Math.round(rotation) }}<br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  data() {
    return {
      useUrlFunction: true,
      zoom: 6,
      center: [parseFloat(this.xc), parseFloat(this.yc)],
      rotation: 0,
      reloading: false,
      opacity: 0.7,
      selectedFeatures: [],
    }
  },
  props: {
    wms: {
      type: String,
      required: false,
    },
    wmsLayers: {
      type: String,
      required: false,
    },
    elastic: {
      type: String,
      required: false,
    },
    xc: {
      type: String,
      required: false,
    },
    yc: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
.square {
  background: rgb(60, 128, 125);
  border-radius: 10px;
  margin-top: 10px;
  color: white;
}
.map {
  height: 455px;
  margin-top: 10px;
}
.ol-unselectable {
  border-radius: 10px;
}
</style>