<template>
    <div class="container">
        <no-ssr>
          <div class="map">
            <vl-map v-if="!reloading" :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
                <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" style="border-radius:10px;"></vl-view>

                <vl-layer-tile>
                    <vl-source-osm></vl-source-osm>
                </vl-layer-tile>

            </vl-map>
            </div>
            
            <div class="square" style="padding: 20px">
                Zoom: {{ zoom }}<br>
                Center: {{ center }}<br>
                Rotation: {{ rotation }}<br>
            </div>
        </no-ssr>
    </div>
</template>

<script>
    export default {
        name: "MapComponent",
        head() {
            return {
                title: 'Vuelayers with nuxt',
            }
        },
        data() {
            return {
                useUrlFunction: true,
                zoom: 3,
                center: [1, 0],
                rotation: 0,
                geolocPosition: undefined,
                reloading: false
            }
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
                return 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
                    'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
                    'outputFormat=application/json&srsname=' + projection + '&maxFeatures=50' + '&' +
                    'bbox=' + extent.join(',') + ',' + projection
            },
            loadingStrategyFactory() {
                return this.$loadingBBox()
            }
        }
    }
</script>

<style scoped>
.square{
    background: rgb(163, 163, 163);
    border-radius: 10px;
    margin-top: 10px;
}
.map{
    height: 500px;
    margin-top: 10px;
}
</style>
