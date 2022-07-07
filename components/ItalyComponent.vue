/* ############################## INIZIO DESCRIZIONE COMPONENT ############################## */

questa component genera la "slippy map" presente all'interno della pagina all'URL "/risorse" 
(nonchè all'interno del file "index.vue" nella cartella "risorse"). Vengono passate 3 props:

  - regioni: Per ottenere i layers delle regioni in formato geoJSON (che verranno accesi qualora, 
    in seguito ad una ricerca, dovessero essere trovati dei riscontri)

  - display: Per capire per quali regioni, in seguito alla ricerca, sono stati trovati dei riscontri

  - info: Per capire quanti riscontri sono stati trovati per ciascuna regione ed eseguire il display 
    di questa informazione al click della regione sulla mappa
    
/* ############################## FINE DESCRIZIONE COMPONENT ############################### */
<template>
  <div class="">
    <div class="map">
      <vl-map
        v-if="!reloading"
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
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

        <!-- VECTORS -->
        <!-- la definizione di tutti questi layers si rende necessaria per via 
        delle problematiche di vuelayers nell'aggiornare dinamicamente il contenuto 
        della mappa. Si è quindi optato per definire tutti i layer in anticipo e 
        "spegnerli"/"accenderli" all'occorrenza -->
        <vl-layer-vector
          v-if="display.includes(1)"
          id="piemonte"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[0]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(2)"
          id="valleAosta"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[1]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(3)"
          id="lombardia"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[2]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(4)"
          id="trentino"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[3]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(5)"
          id="veneto"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[4]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(6)"
          id="friuli"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[5]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(7)"
          id="liguria"
          render-mode="image"
        >
          <vl-source-vector :features="regioni[6]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(8)"
          id="emilia"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[7]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(9)"
          id="toscana"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[8]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(10)"
          id="umbria"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[9]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(11)"
          id="marche"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[10]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(12)"
          id="lazio"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[11]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(13)"
          id="abruzzo"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[12]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(14)"
          id="molise"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[13]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(15)"
          id="campania"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[14]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(16)"
          id="puglia"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[15]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(17)"
          id="basilicata"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[16]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(18)"
          id="calabria"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[17]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(19)"
          id="sicilia"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[18]"></vl-source-vector>
        </vl-layer-vector>

        <vl-layer-vector
          v-if="display.includes(20)"
          id="sardegna"
          render-mode="image"
          ref="featuresLayer"
        >
          <vl-source-vector :features="regioni[19]"></vl-source-vector>
        </vl-layer-vector>

        <vl-interaction-select
          :features.sync="selectedFeatures"
        ></vl-interaction-select>
      </vl-map>
    </div>
    <div class="square" style="padding: 20px">
      <div v-if="!selectedFeatures.length">
        <b>Seleziona una regione sulla mappa</b>
      </div>
      <div v-if="selectedFeatures.length">
        <!-- al click della regione viene chiamata la funzione obtainProps() e 
        viene passato come parametro la feature selezionata -->
        <b>{{ selectedFeatures.map((f) => obtainProps(f)) }} </b> <br />
      </div>
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
      zoom: 5.3,
      center: [parseFloat(1445412), parseFloat(42)],
      rotation: 0,
      reloading: false,
      opacity: 0.7,
      selectedFeatures: [],
      region: this.regioni,
    }
  },
  props: {
    regioni: {
      type: Array,
      required: false,
    },
    display: {
      type: Array,
      required: false,
    },
    info: {
      type: Array,
      required: false,
    },
  },
  methods: {
    /* questo metodo estrae l'informazione di quati riscontri 
    sono stati trovati per la regione selezionata e ne consente 
    il display nell'apposito riquadro posto sotto la mappa */
    obtainProps(feature) {
      for (let i = 0; i < this.info.length; i++) {
        const element = this.info[i]
        if (feature.id == element.regId) {
          return `${feature.properties.name} - risorse trovate: ${parseInt(
            element.CountedValue
          )} `
        }
      }
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
  height: 400px;
  margin-top: 10px;
  width: 100%;
}
.ol-unselectable {
  border-radius: 10px;
}
</style>