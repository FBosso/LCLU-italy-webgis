<template>
  <div class="single-resource">
    <div class="row">
      <h2>{{ nome }}</h2>
      <hr />
    </div>
    <div class="row">
      <div class="col-lg">
        <div class="hover01 column">
          <div>
            <figure class="center-just">
              <img
                class="round-images"
                height="170px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Coat_of_arms_of_Liguria.svg/1200px-Coat_of_arms_of_Liguria.svg.png"
              />
            </figure>
          </div>
        </div>
      </div>

      <div class="col-lg-9">
        {{ descrizione }}
      </div>
    </div>
    <div class="row m-3">
      <div class="col tools">Strumenti correlati:</div>
      <div v-if="wfs != ''" class="col-lg-2 item center">WFS</div>
      <div v-if="wms != ''" class="col-lg-2 item center">WMS</div>
      <div v-if="arcgis != ''" class="col-lg-2 item center">ArcGIS SERVER</div>
      <div v-if="directDownload != ''" class="col-lg-2 item center">
        Download
      </div>
      <div v-if="metadataSite != ''" class="col-lg-2 item center">
        Metadati Sito
      </div>
      <div v-if="metadataXml != ''" class="col-lg-2 item center">
        Metadati XML
      </div>
    </div>
    <br />
    <NuxtLink :to="`/risorse/${id}`">
      <button class="btn btn-outline-secondary button-snippet-create">
        Accedi alla risorsa
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ResourceCardMod',
  props: {
    id: {
      type: Number,
      required: true,
    },
    wfs: {
      type: String,
      required: true,
    },
    wms: {
      type: String,
      required: true,
    },
    arcgis: {
      type: String,
      required: true,
    },
    directDownload: {
      type: String,
      required: true,
    },
    metadataSite: {
      type: String,
      required: true,
    },
    metadataXml: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    descrizione: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.single-resource {
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
}
@media (min-width: 768px) {
  .single-post-home {
    margin-left: 30px;
    /* 30 px così è uguale a tutti gli altri offset, questo crea uniformità visiva */
  }
}
.round-images {
  border-radius: 10px;
  align-items: center;
  text-align: center;
  align-content: center;
}
.button-snippet-create {
  width: 100%;
  border-radius: 10px;
  border: solid 2px white;
  background: rgb(60, 128, 125);
  color: white;
  transition: 0.25s linear;
}
.button-snippet-create:hover {
  border: solid 2px black;
  background: transparent;
  color: black;
}

.title-snippet {
  font-weight: bolder;
}

/* Zoom In #1 */

.hover01 figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.hover01 figure:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

.column {
  margin: 0px 0px 0;
  padding: 0;
}

.column:last-child {
  padding-bottom: 60px;
}

.column::after {
  content: '';
  clear: both;
  display: block;
}

.column div {
  position: relative;
  float: left;
  width: 100%;
  height: 200px;
  margin: 0 0 0 25px;
  padding: 0;
}

.column div:first-child {
  margin-left: 0;
}

.column div span {
  position: absolute;
  bottom: -20px;
  left: 0;
  z-index: -1;
  display: block;
  width: 300px;
  margin: 0;
  padding: 0;
  color: #444;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  opacity: 0;
}

figure {
  width: 100%;
  height: 235px;
  margin: 0;
  padding: 0;
  background: #fff;
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
  /* border: solid 2px black; */
}

figure:hover + span {
  bottom: -36px;
  opacity: 1;
}
.tools {
  font-size: 25px;
  font-weight: 600;
}
.item {
  border: solid 2px white;
  border-radius: 10px;
  background: rgb(128, 60, 65);
  color: white;
  margin: 5px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.center-just {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
}
/* end */
</style>