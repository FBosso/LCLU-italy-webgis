<template>
  <div class="container mt-5">
    <div class="row mb-3">
      <TopPageGeneric
        :name="topData.name"
        :description="topData.description"
        :tags="topData.tags"
      />
    </div>
    <div class="subtitle">Risorse</div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Materiale</th>
            <th scope="col">link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">PDF di presentazione del lavoro</th>
            <td scope="row">
              <a class="link" href="https://shorturl.at/orJOQ"
                >https://shorturl.at/orJOQ</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">Github repo Jupyter Notebook</th>
            <td scope="row">
              <a
                class="link"
                href="https://github.com/FBosso/LandCover_LandUse_Italy"
                >https://github.com/FBosso/LandCover_LandUse_Italy</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="subtitle mb-3">Overview analisi</div>
    <div class="snippet">
      Dopo il censimento di tutti i dati citati all'interno dell'inventario di
      ISPRA, tenendo in considerazione molteplici aspetti (presenza/assenza di:
      possibilità di download dei dati, metadati, richieste WFS, richieste WMS,
      possibilità di connessioni ad ArcGIS REST SERVER, ecc ), è stata
      sviluppata una analisi quantitativa preliminare per valutare lo stato di
      fatto dei dati di Uso e Copertura del suolo sotto due aspetti
      fondamentali:
      <b>Reperibilità delle informazioni</b> e <b>Accessibilità del dato</b>. I
      risultati sono sintetizzati all'intenro del seguente grafico che presenta
      sull'asse delle "x" l'indice di <u>reperibilità delle informazioni</u> e
      sull'asse delle "y" l'indice di <u>accessibilità del dato</u> che possono
      assumere valori compresi tra 0 (minimo) ed 1 (massimo):
    </div>
    <client-only>
      <div class="link-chart">
        <a href="https://fbosso.github.io/Bubbles_Regions">
          <div class="link-chart">Mostra il grafico</div>
        </a>
      </div>
    </client-only>
    <div class="center cont">
      <figure>
        <client-only>
          <iframe
            src="https://fbosso.github.io/Bubbles_Regions"
            class="mt-5"
            width="1100px"
            height="800px"
            title="Grafico accessibilità VS reperibilità regioni"
          >
            <p>prova</p>
          </iframe>
        </client-only>
        <figcaption class="caption">
          <b>Figura 1</b> - Ogni cerchio nel grafico rappresenta una regione e
          il diametro di ciascun cerchio è proporzionale al numero di risorse
          considerate per il calcolo della statistica riferita a quella regione
        </figcaption>
      </figure>
    </div>
    <div class="snippet mt-5">
      Come informazione qualitativa aggiuntiva si è voluto applicare un semplice
      algoritmo di clustering per identificare dei gruppi di regioni aventi
      necessità simili sotto il punto di vista di miglioramento dei parametri
      considerati. Questo approccio, adottato nuovamente quando il campione dei
      dati analizzati aumenterà anche per quelle regioni che, ad ora, sono state
      analizzate con un numero limitato di dati, consentirà di pianificare delle
      strategie rafforzative aderenti alle esigenze di ciascun cluster.
    </div>
    <client-only>
      <div class="link-chart">
        <a href="https://fbosso.github.io/Bubbles_Regions_clusters">
          <div class="link-chart">Mostra il grafico</div>
        </a>
      </div>
    </client-only>
    <div class="center cont">
      <figure>
        <client-only>
          <iframe
            src="https://fbosso.github.io/Bubbles_Regions_clusters"
            class="mt-5"
            width="1100px"
            height="800px"
            title="Grafico accessibilità VS reperibilità regioni suddivise per clusters"
          >
            <p>prova</p>
          </iframe>
        </client-only>
        <figcaption class="caption">
          <b>Figura 2</b> - Ogni cerchio nel grafico rappresenta una regione e
          il diametro di ciascun cerchio è proporzionale al numero di risorse
          considerate per il calcolo della statistica riferita a quella regione.
          I colori dei cerchi rappresentano i clusters identificati
          dall'agoritmo di clustering
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndiciPage',
  /* grazie a questo metodo vengono specificati i metadati della pagina */
  head() {
    return {
      title: 'LC LU Italia | Statistiche',
      meta: [
        {
          hid: 'descriptionStatistiche',
          name: 'description',
          content: `Breve riassunto dell'analisi dei dati raccolti. L'analisi si concentra sulla determinazione di accessibilità e reperibilità delle risorse contenute nell'inventario di ISPRA facente capo al progetto EAGLE`,
        },
        {
          hid: 'keywordsStatistiche',
          name: 'keywords',
          content: [
            'accessibilità dato',
            'reperibilità informazioni',
            'cluster regionali',
            'metadata XML',
            'metadata Site',
            'Direct Download',
            'wfs',
            'wms',
            'arcgis',
            'analisi dati',
          ],
        },
      ],
    }
  },
  /* questi dati sono statici, dunque vengono inseriti all'interno del codice e non nel DB */
  data() {
    return {
      topData: {
        name: 'Statistiche',
        description:
          'In questa sezione vengono mostrate una serie di statistiche atte a fotografare lo stato di fatto su base regionale (in termini individuali, non comparativi) di accessibilità e reperibilità dei dati di Copertura ed Uso del suolo. Le risorse per le quali accessibilità e reperibilità sono state determinate fanno capo ad un inventario di dati costantemente aggiornato da ISPRA (Istituto Superiore per la Protezione e la Ricerca Ambientale) allo scopo di perseguire il progetto EAGLE',
        tags: ['Accessibilità', 'Reperibilità', 'Clusters'],
      },
    }
  },
}
</script>

<style scoped>
.notebook {
  border: solid 2px rgb(169, 169, 169);
  border-radius: 10px;
}
.link {
  color: rgb(70, 70, 222);
}
.center {
  text-align: center;
}
iframe {
  align-items: center;
  text-align: center;
}
.caption {
  color: grey;
  text-align: center;
}
.link-chart {
  display: none;
}

@media screen and (max-width: 1263px) {
  .cont {
    display: none;
  }
  .link-chart {
    display: block;
    text-align: center;
    margin-top: 30px;
    color: rgb(70, 70, 222);
  }
}
</style>