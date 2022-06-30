
<template>
  <div class="">
    <!-- <client-only> -->
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
          <!-- <vl-style-box>
            <vl-style-fill color="#59c7df"></vl-style-fill>
          </vl-style-box>
          <vl-style-box>
            <vl-style-stroke color="black"></vl-style-stroke>
          </vl-style-box> -->
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
        <b>{{ selectedFeatures.map((f) => obtainProps(f)) }} </b> <br />
      </div>
      Zoom: {{ zoom }}<br />
      Center: {{ center }} <br />
      Rotation: {{ rotation }}<br />
    </div>
    <!-- </client-only> -->
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
      //geolocPosition: undefined,
      reloading: false,
      opacity: 0.7,
      selectedFeatures: [],
      region: this.regioni,
      lig: 7,
      prova: [
        {
          type: 'Feature',
          id: 7,
          properties: {
            address: 'a caso',
            boh: 'non so',
          },
          geometry: {
            type: 'Point',
            coordinates: [0, 0],
          },
        },
      ],
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
    toggleCond({ map, pixel }) {
      return map.forEachFeatureAtPixel(pixel, (feature) => !!feature)
    },
    changeMap() {
      this.useUrlFunction = !this.useUrlFunction
      this.reloading = true
      this.$nextTick(() => {
        this.reloading = false
      })
    },
    urlFunction(extent, resolution, projection) {
      return (
        'https://ahocevar.com/geoserver/wfs?service=WFS&' +
        'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
        'outputFormat=application/json&srsname=' +
        projection +
        '&maxFeatures=50' +
        '&' +
        'bbox=' +
        extent.join(',') +
        ',' +
        projection
      )
    },
    loadingStrategyFactory() {
      return this.$loadingBBox()
    },
    createMvtFormat() {
      return new MVT({
        featureClass: Feature,
      })
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