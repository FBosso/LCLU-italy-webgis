<template>
  <div class="container">
    <no-ssr>
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


        <vl-layer-vector-tile >
            <vl-source-vector-tile :url="url"></vl-source-vector-tile>
          </vl-layer-vector-tile>

          <vl-layer-tile :opacity="opacity">
            <vl-source-osm></vl-source-osm>
          </vl-layer-tile>

          <!-- <vl-layer-vector>
            <vl-source-vector :url="url2"></vl-source-vector>
          </vl-layer-vector> -->

          <!-- <vl-layer-tile >
              <vl-source-wms :url="url2" layers="M1400:L3614"></vl-source-wms>
          </vl-layer-tile> -->

          <vl-layer-vector-tile >
            <vl-source-vector-tile :url="url"></vl-source-vector-tile>
          </vl-layer-vector-tile>

        </vl-map>
      </div>

      <div class="square" style="padding: 20px">
        Zoom: {{ zoom }}<br />
        Center: {{ center }}<br />
        Rotation: {{ rotation }}<br />
      </div>
    </no-ssr>
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
      zoom: 8,
      center: [983593.1674368433, 5499409.952833894],
      rotation: 0,
      geolocPosition: undefined,
      reloading: false,
      opacity: 0.7
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
    createMvtFormat () {
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
