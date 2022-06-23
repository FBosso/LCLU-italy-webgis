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
        <vl-layer-tile>
          <vl-source-wms :url="url2" layers="M1400:L3614"></vl-source-wms>
        </vl-layer-tile>


        <!-- DEVELOPMENT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <!-- VECTOR RESOURCES -->
        <vl-layer-vector-tile style:  >
          <vl-source-vector-tile
            url="http://localhost:3000/api/tiles/f436_p_pup/{z}/{x}/{y}"
          >
          </vl-source-vector-tile>
        </vl-layer-vector-tile>

        <!-- PRIDUCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <!-- VECTOR RESOURCES -->
        <!-- <vl-layer-vector-tile>
          <vl-source-vector-tile
            url="https://lcluitalia.herokuapp.com/api/tiles/ita/{z}/{x}/{y}"
          ></vl-source-vector-tile>
        </vl-layer-vector-tile> -->


      </vl-map>
    </div>

    <div class="square" style="padding: 20px">
      Zoom: {{ zoom }}<br />
      Center: {{ center }}<br />
      Rotation: {{ rotation }}<br />
    </div>
    <!--  </client-only> -->
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  head() {
    return {
      title: 'Vuelayers with nuxt',
    }
  },

  data() {
    return {
      useUrlFunction: true,
      zoom: 5,
      center: [1270912, 5282692],
      rotation: 0,
      geolocPosition: undefined,
      reloading: false,
      opacity: 0.7,
    }
  },

  props: {
    url: {
      type: String,
      required: false,
    },
    url2: {
      type: String,
      required: false,
    },
  },
  methods: {
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
  background: rgb(163, 163, 163);
  border-radius: 10px;
  margin-top: 10px;
}
.map {
  height: 400px;
  margin-top: 10px;
}
/* .ol-attribution{
    color: red;
} */
</style>