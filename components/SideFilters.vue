<template>
  <v-app>
    <v-card style="border: solid 2px black; border-radius: 10px; padding: 10px">
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="selected.valuesRegione"
              :items="items.itemsRegione"
              chips
              clearable
              deletable-chips
              label="Regione"
              multiple
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="selected.valuesFormatoRisorsa"
              :items="items.itemsFormatoRisorsa"
              chips
              clearable
              deletable-chips
              label="Formato risorsa"
              multiple
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="selected.valuesLicenza"
              :items="items.itemsLicenza"
              chips
              clearable
              deletable-chips
              label="Licenza"
              multiple
            ></v-autocomplete>
          </v-col>

          <v-container>
            <v-container>
              <v-container style="border: solid 2px black; border-radius: 10px">
                <v-row>
                  <v-col cols="6">
                    <v-switch v-model="selected.wfs" :label="`WFS`"></v-switch>
                  </v-col>
                  <v-col cols="6">
                    <v-switch v-model="selected.wms" :label="`WMS`"></v-switch>
                  </v-col>
                  <v-col cols="6">
                    <v-switch
                      v-model="selected.arcgis"
                      :label="`ArcGIS SERVER`"
                    ></v-switch>
                  </v-col>
                  <v-col cols="6">
                    <v-switch
                      v-model="selected.directDownload"
                      :label="`Download`"
                    ></v-switch>
                  </v-col>
                </v-row>
              </v-container>
            </v-container>
          </v-container>
          <v-container>
            <v-container>
              <v-container style="border: solid 2px black; border-radius: 10px">
                <v-row>
                  <v-col cols="6">
                    <v-switch
                      v-model="selected.metadataSite"
                      :label="`Metadati sito`"
                    ></v-switch>
                  </v-col>
                  <v-col cols="6">
                    <v-switch
                      v-model="selected.metadataXml"
                      :label="`Metadati XML`"
                    ></v-switch>
                  </v-col>
                </v-row>
              </v-container>
            </v-container>
          </v-container>
        </v-row>
        <!-- <div @click="searchData" class="tool mt-4">Cerca</div> -->
        <div
          @click="$nuxt.$emit('change-resources', selected)"
          class="tool mt-4"
        >
          Cerca
        </div>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'SideFiltersComponent',
  data() {
    return {
      /* items tra cui scegliere */

      items: {
        itemsRegione: [
          'PIEMONTE',
          "VALLE D'AOSTA",
          'LOMBARDIA',
          'TRENTO',
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
      selected: {
        valuesRegione: [" "],
        valuesFormatoRisorsa: [" "],
        valuesLicenza: [" "],

        wfs: false,
        wms: false,
        arcgis: false,
        directDownload: false,
        
        metadataSite: false,
        metadataXml: false,
      },

      /* aggrego parametri in una lista */
      /* selected: [
        this.valuesRegione,
        this.valuesFormatoRisorsa,
        this.valuesLicenza,
        this.wfs,
        this.wms,
        this.arcgis,
        this.directDownload,
        this.metadataSite,
        this.metadataXml,
      ], */
    }
  },
  /* methods: {
    searchData: function () {
      this.$emit('change-resources', this.valuesRegione)
        this.$emit('change-resources',[
        this.valuesRegione,
        this.valuesFormatoRisorsa,
        this.valuesLicenza,
        this.wfs,
        this.wms,
        this.arcgis,
        this.directDownload,
        this.metadataSite,
        this.metadataXml,
      ]);
      console.log('fatto')
    },
  }, */
}
</script>

<style scoped>
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
</style>