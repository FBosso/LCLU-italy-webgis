<template>
  <div class="container mt-5">
    <div class="row mb-3">
      <TopPageGeneric
        :name="topData.name"
        :description="topData.description"
        :tags="topData.tags"
      />
    </div>
    <div class="row mt-4">
      <div class="col-lg-6 mt-2">
        <v-app>
          <v-card class="snippet-filters">
            <v-container fluid>
              <v-row align="center">
                <v-col cols="12" class="mt-4">
                  <v-autocomplete
                    v-model="selected.valuesRegione"
                    :items="items.itemsRegione"
                    chips
                    deletable-chips
                    label="Regione"
                    multiple
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" class="mt-4 mb-4">
                  <v-autocomplete
                    v-model="selected.valuesFormatoRisorsa"
                    :items="items.itemsFormatoRisorsa"
                    chips
                    deletable-chips
                    label="Modello dati"
                    multiple
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" class="mt-4 mb-4">
                  <v-autocomplete
                    v-model="selected.valuesLicenza"
                    :items="items.itemsLicenza"
                    chips
                    deletable-chips
                    label="Licenza"
                    multiple
                  ></v-autocomplete>
                </v-col>
                <v-container>
                  <v-container>
                    <v-container class="switch">
                      <v-row>
                        <v-col cols="6-md">
                          <v-switch
                            v-model="selected.wfs"
                            :label="`WFS`"
                          ></v-switch>
                        </v-col>
                        <v-col cols="6-md">
                          <v-switch
                            v-model="selected.wms"
                            :label="`WMS`"
                          ></v-switch>
                        </v-col>
                        <v-col cols="6-md">
                          <v-switch
                            v-model="selected.arcgis"
                            :label="`ArcGIS SERVER`"
                          ></v-switch>
                        </v-col>
                        <v-col cols="6-md">
                          <v-switch
                            v-model="selected.directDownload"
                            :label="`Download`"
                          ></v-switch>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-container>
                </v-container>
                <v-container class="mt-4 mb-3">
                  <v-container>
                    <v-container class="switch">
                      <v-row>
                        <v-col cols="6">
                          <v-switch
                            v-model="selected.metadataXml"
                            :label="`Metadati`"
                          ></v-switch>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-container>
                </v-container>
              </v-row>
              <v-row>
                <button>
                  <div
                    @click="
                      modifyStoreParams()
                      updateResources()
                    "
                    class="tool mt-3 mb-4"
                  >
                    Cerca
                  </div>
                </button>
              </v-row>
            </v-container>
          </v-card>
        </v-app>
      </div>
      <div class="col-lg-6">
        <client-only>
          <ItalyComponent
            ref="italy"
            class="mb-3"
            :regioni="regioni"
            :display="display"
            :info="shapes"
          />
        </client-only>
        <div class="note">
          NOTE: <b>(i)</b> Il <u>"Modello dati"</u> può essere specificato nel
          filtro. Ciò nonostante la specifica di tale parametro non garantisce
          la possibilità di scaricamento delle risorse trovate [Talvolta il
          Modello dati è specificato nel geoportale di riferimento ma la
          possbilità di download non viene fornita]. <b>(ii)</b> Usando lo
          <u>"switch" Metadati</u>
          presente nella sezione filtri è possibile veicolare la ricerca nei
          confronti di risorse delle quali sono forniti i metadati. In caso di
          assenza di metadati in formato XML viene fornito un collegamento alla
          pagina web del geoportale di riferimento dove i metadati vengono
          mostrati a livello di pagina web.
        </div>
        <div class="row button">
          <NuxtLink
            v-if="searched && display.length > 0"
            class="mt-4 tool-visualizza"
            to="/risorse/risultati/1"
          >
            Visualizza risultati
          </NuxtLink>
          <div
            v-if="searched && display.length == 0"
            class="mt-4 tool-nessun-risultato"
          >
            Nessun Risultato trovato
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RisorsePage',
  async asyncData({ $axios }) {
    /* ottenimento regioni GEOJSON */
    let geojson = await $axios.get(`/api/ita`)
    geojson = geojson.data
    /* ottenimento risorse */
    const { data } = await $axios.get('/api/risorse')
    console.log(data)

    /* ++++++++++++++++++++++++++++++++++++++++++ */

    //const clusters = data.length/10

    /* ++++++++++++++++++++++++++++++++++++++++++ */

    let listaRisorse = []
    for (let index = 0; index < data.length; index++) {
      listaRisorse.push(data[index].nome)
    }
    return {
      risorse: data,

      /* per metadati pagina */
      listaRisorse: listaRisorse,

      regioni: geojson,
    }
  },
  head() {
    return {
      title: 'Tutte le risorse | Risorse',
      meta: [
        {
          hid: 'descriptionTutteRisorse',
          name: 'description',
          content: `Tutte le risorse e le informazioni ad esse correlate. Possibilità di porre filtri di ricerca per le risorse interesate e possibiltà di accesso alle ringole risorse`,
        },
        {
          hid: 'keywordsTutteRisorse',
          name: 'keywords',
          content: [
            'Risorse',
            'Land Cover',
            'Land Use',
            'Copertura del suolo',
            'Uso del suolo',
            'wfs',
            'wms',
            'arcgis',
            'download',
            'shapefile',
            'raster',
            'metdadati',
            this.listaRisorse.toString(),
          ],
        },
      ],
    }
  },
  data() {
    return {
      topData: {
        name: 'Risorse',
        description:
          "In questa sezione i dati geospaziali raccolti nei geoportali regionali possono essere filtrati a seconda delle esigenze dell'utente",
        tags: ['DatiGeospaziali', 'Regioni', 'LandCover', 'LandUse'],
      },
      defaul: true,
      shapes: [],
      display: [],
      searched: false,

      contatore: 0,

      /* --------------------- */

      items: {
        itemsRegione: [
          'PIEMONTE',
          "VALLE D'AOSTA",
          'LOMBARDIA',
          'TRENTINO ALTO ADIGE',
          'VENETO',
          'FRIULI VENEZIA GIULIA',
          'LIGURIA',
          'EMILIA ROMAGNA',
          'TOSCANA',
          'UMBRIA',
          'MARCHE',
          'LAZIO',
          'ABRUZZO',
          'MOLISE',
          'CAMPANIA',
          'PUGLIA',
          'BASILICATA',
          'CALABRIA',
          'SICILIA',
          'SARDEGNA',
        ],
        itemsFormatoRisorsa: ['Vettoriale', 'Raster'],
        itemsLicenza: [
          'CC BY 3.0',
          'CC BY 2.5',
          'CC BY-NC-ND 3.0',
          'CC BY',
          'http://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/INSPIRE_Directive_Article13_1e',
          'IODL 2.0',
          'uso concesso con obbligo di cita',
          'CC BY-NC-SA 3.0 Italia',
          'CC BY 4.0 Italia',
          'CC BY 4.0',
          'CC BY 4.0 ',
          'CC BY-SA 4.0',
          'uso con citazione',
          'CC BY 2.5 Italia',
          'https://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/noLimitations',
          'CC BY 3.0 Italia',
          'legge n. 633 del 22 aprile 1941',
          'CC0 1.0',
          "L'accesso e la fruibilità al dato sono pubblici",
          'http://www.umbriageo.regione.umbria.it/pagine/informazioni-001',
          'no limitations',
          'CC BY 3.0 IT',
        ],
      },

      /* items scelti */
      selectedInit: {
        valuesRegione: [' '],
        valuesFormatoRisorsa: [' '],
        valuesLicenza: [' '],

        wfs: false,
        wms: false,
        arcgis: false,
        directDownload: false,

        metadataSite: false,
        metadataXml: false,
      },

      selected: {
        valuesRegione: [' '],
        valuesFormatoRisorsa: [' '],
        valuesLicenza: [' '],

        wfs: false,
        wms: false,
        arcgis: false,
        directDownload: false,

        metadataSite: false,
        metadataXml: false,
      },

      /* --------------------- */
    }
  },

  methods: {
    modifyStoreParams: function () {
      console.log('prima di funzione store')
      /* let selInit = this.selectedInit
      this.$store.commit('setSearchParams', selInit) */
      let sel = this.selected
      this.$store.commit('setSearchParams', sel)
      console.log('dopo funzione store')
    },
    updateResources: async function () {
      let metadataSite = this.selected.metadataXml
      console.log(this.selected.valuesRegione)
      /* const data = await this.$axios.$get(
        `/api/datiFiltrati/${selected.valuesRegione}/${selected.valuesFormatoRisorsa}/${selected.valuesLicenza}/${selected.wfs}/${selected.wms}/${selected.arcgis}/${selected.directDownload}/${metadataSite}/${selected.metadataXml}`
      ) */
      this.shapes = await this.$axios.$get(
        `/api/shapes/${this.selected.valuesRegione}/${this.selected.valuesFormatoRisorsa}/${this.selected.valuesLicenza}/${this.selected.wfs}/${this.selected.wms}/${this.selected.arcgis}/${this.selected.directDownload}/${this.metadataSite}/${this.selected.metadataXml}`
      )

      /* const caso = await this.$axios.$get(
        `/api/caso/${selected.wfs}`
      ) */

      this.obtainShapes()

      this.defaul = true
      this.defaul = false
      //this.refresh = data
      this.searched = true

      //this.$refs.italy.assignProperties(this.shapes, this.regioni);

      /* this.addProperties() */
    },
    obtainShapes: async function () {
      let codici = []
      for (let i = 0; i < this.shapes.length; i++) {
        const element = this.shapes[i]
        const id = element.regId
        codici.push(id)
      }
      this.display = codici
    },
    /* addProperties: function (regioni){
      regioni = 'ciao'
      for (let i = 0; i < this.shapes.length; i++) {
        const info = this.shapes[i];
        for (let j = 0; j < regioni[0].length; j++) {
          const reg = regioni[0][j];
          if (j == (info.regId - 1)) {
            reg.properties = info.CountedValue
            console.log(reg)
          }
        }
      }
    } */
  },
}
</script>

<style scoped>
.note {
  border: solid 2px black;
  border-radius: 10px;
  padding: 10px;
  text-align: justify;
}
.tool {
  background: rgb(251, 237, 167);
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: solid 2px rgb(193, 193, 193);
  transition: 0.25s linear;
  color: black;
}

.side {
  border: solid 2px black;
  background: rgb(207, 207, 207);
  height: 500px;
  border-radius: 10px;
}
.tool {
  background: rgb(128, 60, 65);
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: solid 2px white;
  transition: 0.25s linear;
  color: white;
}
.tool:hover {
  border: solid 2px black;
  background: transparent;
  color: black;
}
.align {
  text-align: center;
  align-content: center;
  align-items: center;
}
.snippet-filters {
  background-color: #fff;
  border: 2px solid #959595;
  border-radius: 10px;
  padding: 10px;
}
.switch {
  border: 1.5px solid #959595;
  border-radius: 10px;
}
.tool-visualizza {
  background: rgb(251, 237, 167);
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: solid 2px rgb(193, 193, 193);
  transition: 0.25s linear;
  color: black;
}
.tool-visualizza:hover {
  border: solid 2px black;
  background: transparent;
  color: black;
}
.tool-nessun-risultato {
  background: rgb(203, 203, 203);
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: solid 2px rgb(143, 143, 143);
  transition: 0.25s linear;
  color: rgb(1, 1, 1);
}
</style>