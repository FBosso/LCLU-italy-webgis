<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md margin-top">
        <h1 class="header-index mb-4">Land Cover & Land Use</h1>
        <p class="snippet mb-4">
          In questa applicazione Web è possibile trovare una sintesi dello stato
          di fatto delle risorse in termini di Land Cover e Land Use in Italia.
          L'obiettivo della applicazione è di fungere da "Hot Spot" di
          aggregazione per le risorse di Uso e Copertura del suolo
        </p>
        <div class="center mb-4">
          <NuxtLink to="progetto">
            <div class="button btn">Leggi di più sul progetto</div>
          </NuxtLink>
        </div>
      </div>
      <div class="col-md center-div">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_izy5ndvp.json"
          background="transparent"
          speed="1"
          style="width: 600px; height: 650px"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
    <div class="row mt-4 g-0">
      <div :class="`image col-sm-7 p-2 active position-relative menu`">
        <NuxtLink :to="`${sections.s1.path}`">
          <img
            :src="`${sections.s1.image}`"
            class="card-image img-fluid"
            :alt="`${sections.s1.name}-image`"
          />
          <div class="middle">
            <h1>{{ sections.s1.name }}</h1>
          </div>
        </NuxtLink>
      </div>

      <div
        :class="`image col-sm-${sections.s2.col} p-2 active position-relative menu`"
      >
        <NuxtLink :to="`${sections.s2.path}`">
          <img
            :src="`${sections.s2.image}`"
            class="card-image img-fluid"
            :alt="`${sections.s2.name}-image`"
          />
          <div class="middle">
            <h1>{{ sections.s2.name }}</h1>
          </div>
        </NuxtLink>
      </div>

      <div
        :class="`image col-sm-${sections.s3.col} p-2 active position-relative menu`"
      >
        <NuxtLink :to="`${sections.s3.path}`">
          <img
            :src="`${sections.s3.image}`"
            class="card-image img-fluid"
            :alt="`${sections.s3.name}-image`"
          />
          <div class="middle">
            <h1>{{ sections.s3.name }}</h1>
          </div>
        </NuxtLink>
      </div>

      <div
        :class="`image col-sm-${sections.s4.col} p-2 active position-relative menu`"
      >
        <NuxtLink :to="`${sections.s4.path}`">
          <img
            :src="`${sections.s4.image}`"
            class="card-image img-fluid"
            :alt="`${sections.s4.name}-image`"
          />
          <div class="middle">
            <h1>{{ sections.s4.name }}</h1>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  /* grazie a questo metodo vengono specificati i metadati della pagina */
  head() {
    return {
      title: `LC & LU | Homepage`,
      meta: [
        {
          hid: 'descriptionHomepage',
          name: 'description',
          content: `Homepage che mostra tutte le possibili vie d'acesso alle varie sezioni del sito`,
        },
        {
          hid: 'keywordsHomepage',
          name: 'keywords',
          content: [
            'Homepage',
            'Statistiche',
            'Risorse',
            'Contatti',
            'Progetto',
            'Land Cover',
            'Land Use',
            'Uso del suolo',
            'Copertura del suolo',
          ],
        },
      ],
    }
  },
  /* questi dati sono statici, dunque vengono inseriti all'interno del codice e non nel DB */
  data() {
    return {
      sections: {
        s1: {
          id: 0,
          name: 'Risorse',
          image: 'https://i.ibb.co/tDzhZrx/risorse.webp',
          col: 7,
          path: 'risorse',
        },
        s2: {
          id: 1,
          name: 'Statistiche',
          image: 'https://i.ibb.co/sqzXHVt/stats.webp',
          col: 5,
          path: 'statistiche',
        },
        s3: {
          id: 2,
          name: 'Contatti',
          image: 'https://i.ibb.co/r4BrpvB/contatti.webp',
          col: 5,
          path: 'contatti',
        },
        s4: {
          id: 3,
          name: 'Progetto',
          image: 'https://i.ibb.co/KGQb7YC/project.webp',
          col: 7,
          path: 'progetto',
        },
      },
    }
  },
}
</script>

<style scoped>
.header-index {
  font-weight: 900;
  font-size: 5.3vw;
}
.center-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}
.margin-top {
  margin-top: 80px;
}
@media screen and (max-width: 1100px) {
  .header-index {
    font-size: 3em;
  }
}
@media screen and (max-width: 375px) {
  .header-index {
    font-size: 12vw;
  }
}
@media screen and (max-width: 991px) {
  .margin-top {
    margin-top: 0;
  }
}
.menu {
  padding-bottom: 6px;
  padding-top: 6px;
}
.row .menu:hover .img-fluid {
  opacity: 0.3;
}
.row .menu:hover .middle {
  opacity: 0.9;
}
.middle {
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(0, 0, 0, 0.866);
}
.img-fluid {
  width: 100%;
  height: 100%;
  opacity: 1;
  display: block;
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  transition: 0.5s ease;
}
@media screen and (max-width: 992px) {
  .middle {
    color: rgba(0, 0, 0, 0.866);
    opacity: 0.9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .img-fluid {
    opacity: 0.3;
  }
  .center {
    text-align: center;
  }
}
.button {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(128, 60, 65);
  color: white;
  width: 21rem;
  font-weight: 600;
  transition: 0.5s;
}
.button:hover {
  width: 24rem;
}
.card-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
</style>
