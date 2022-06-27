<template>
  <div class="container mt-5">
    <div class="row mb-3">
    <TopPageGeneric
      :name="topData.name"
      :description="topData.description"
      :tags="topData.tags"
    />
    </div>
    <div class="mite">
      <div class="subtitle">Ministero della Transizione Ecologica</div>
      <div class="row">
        <div class="col-md-4">
          <StaticCardComponent
            :image="'https://i.ibb.co/THLXKjj/mite.webp'"
            :title="'Logo MiTE'"
          />
        </div>
        <div class="col-md-8 center-just">
          <p class="snippet">
            Il seguente progetto rappresenta la sintesi di una attività di
            tirocinio presso la segreteria tecnica del Ministero della
            Transizione Ecologica. Nello specifico, l’obiettivo del tirocinio
            era quello di aggiungere un piccolo tassello al grande puzzle che
            prende il nome di Integrated Geospatial Information Framework
            (IGIF). A tale scopo si è resa necessaria l’interazione con
            l’Istituto Superiore per la Protezione e la Ricerca Ambientale
            (ISPRA) al fine di ottenere l’inventario di dati in termini di
            Copertura ed Uso del suolo facente capo al progetto EAGLE della
            European Environmental Agency (EEA). Partendo da tale inventario è
            stato possibile valutare accessibilità e reperibilità delle singole
            risorse e, quindi, sintetizzare una panoramica dello stato di fatto
            più strutturata ed organizzata grazie allo sviluppo della presente
            applicazione web.
          </p>
        </div>
      </div>
    </div>
    <div class="igif">
      <div class="subtitle">IGIF - UNGGIM</div>
      <div class="row">
        <div class="col-md-4">
          <StaticCardComponent
            :image="'https://i.ibb.co/9gdSfPs/unggim.webp'"
            :title="'Logo UN-GGIM'"
          />
        </div>
        <div class="col-md-8 center-just">
          <p class="snippet">
            La tematica dell’Integrated Geospatial Information Framework (IGIF)
            è di primario interesse per il United Nation Committee of Experts on
            Global Geospatial Information Management (UN-GGIM). Sul piano
            teorico l’IGIF ha come scopo ultimo quello di fungere da base per lo
            sviluppo, l'integrazione, il rafforzamento e la massimizzazione
            della gestione delle informazioni geospaziali e delle relative
            risorse in ciascun paese. Tale scopo è perseguito colmando il
            divario digitale in ambito geospaziale e garantendo la prosperità
            socioeconomica derivante da un rafforzamento della struttura di
            gesitione di questo tipo di dati. Maggiori informazioni sulla
            tematica possono essere reperite direttamente sul sito del UN-GGIM
            nella sezione IGIF :
            <a href="https://ggim.un.org/IGIF/"
              >https://ggim.un.org/IGIF/
              <img
                height="20px"
                src="https://i.ibb.co/423RsxD/redirect.png"
                alt="redirect"
            /></a>
          </p>
        </div>
      </div>
    </div>
    <div class="LCLU">
      <div class="subtitle">Land Cover & Land Use</div>
      <div class="row">
        <div class="col-md-4">
          <StaticCardComponent
            :image="'https://i.ibb.co/tDzhZrx/risorse.webp'"
            :title="'Immagine Land Cover'"
          />
        </div>
        <div class="col-md-8 center-just">
          <p class="snippet">
            Per copertura del suolo si intende la copertura biofisica della
            superficie terrestre. Secondo la direttiva 2007/2/CE, rappresenta la
            copertura fisica e biologica della superficie terrestre, comprese le
            superfici artificiali, le zone agricole, i boschi e le foreste, le
            aree seminaturali, le zone umide, i corpi idrici. I dati sulla
            copertura, sull’uso del suolo e sulla transizione tra le diverse
            categorie sono alcune delle informazioni più frequentemente
            richieste per la formulazione delle strategie di gestione e di
            pianificazione sostenibile del territorio, per fornire gli elementi
            informativi a supporto dei processi decisionali a livello
            comunitario, nazionale e locale e per verificare l’efficacia delle
            politiche ambientali.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgettoPage',
  head() {
    return {
      title: 'LC LU Italia | Progetto',
      meta: [
        {
          hid: 'descriptionProgetto',
          name: 'description',
          content: `Spiegazione del progetto che ha dato origine allo sviluppo della presente applicazione web. Partendo dal tirocinio al Ministero della Transizione Ecologica, passando per UN-GGIM fino ad arrivare al concetto stesso di dati di land cover e land use`,
        },
        {
          hid: 'keywordsProgetto',
          name: 'keywords',
          content: [
            'UN-GGIM',
            'UNGGIM',
            'MiTE',
            'MITE',
            'Ministero della Transizione Ecologica',
            'Land Cover',
            'Land Use',
            'Copertura del suolo',
            'Uso del suolo'
          ],
        },
      ],
    }
  },
  data() {
    return {
      topData: {
        name: 'Progetto',
        description:
          'In questa sezione vengono spiegati i punti nevralgici dai quali il presente progetto si è sviluppato introducendo il contesto di lavoro, le tematiche sviluppate e il tipo di dati oggetto di analisi e ricerca durante il corso di tutto il tirocinio',
        tags: ['UN-GGIM', 'MiTE', 'LandCover', 'LandUse'],
      },
    }
  },
}
</script>

<style scoped>
.center-just {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
}
a{
  color: rgb(42, 42, 198);
  text-decoration: none;
}
</style>