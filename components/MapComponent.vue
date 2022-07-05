<template>
  <div class="container">
    <!-- <client-only> -->
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

        <!-- DEVELOPMENT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <!-- VECTOR RESOURCES -->

        <!-- <vl-layer-vector-tile v-if="elastic != ''">
          <vl-source-vector-tile
            :url="`http://localhost:3000/api/tiles/${elastic}/{z}/{x}/{y}`"
          >
          </vl-source-vector-tile>
        </vl-layer-vector-tile> -->

        <!-- PRODUCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <!-- VECTOR RESOURCES -->
        <vl-layer-vector-tile>
          <vl-source-vector-tile
            :url="`https://lcluitalia.herokuapp.com/api/tiles/${elastic}/{z}/{x}/{y}`"
          ></vl-source-vector-tile>
        </vl-layer-vector-tile>
      </vl-map>
    </div>

    <div class="square" style="padding: 20px">
      Zoom: {{ Math.round(zoom) }}<br />
      Center: {{ Math.round(center[0]) }}, {{ Math.round(center[1]) }} <br />
      Rotation: {{ Math.round(rotation) }}<br />
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
      zoom: 7,
      center: [parseFloat(this.xc), parseFloat(this.yc)],
      rotation: 0,
      //geolocPosition: undefined,
      reloading: false,
      opacity: 0.7,
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [10, 10],
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-10, -10],
          },
        },
      ],
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
  methods: {
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
  height: 455px;
  margin-top: 10px;
}
.ol-unselectable {
  border-radius: 10px;
}
</style>