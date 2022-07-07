export const state = () => ({
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
    page: 1,
    counter: 0
})
export const mutations = {

    /* funzione che modifica i parametri di ricerca delle risorse salvati dello score 
    a seconda della ricerca voluta dall'utente */
    setSearchParams: (state, selectedClient) => {
        
        state.selected.valuesRegione = selectedClient.valuesRegione
        state.selected.valuesFormatoRisorsa = selectedClient.valuesFormatoRisorsa
        state.selected.valuesLicenza = selectedClient.valuesLicenza

        state.selected.wfs = selectedClient.wfs
        state.selected.wms = selectedClient.wms
        state.selected.arcgis = selectedClient.arcgis
        state.selected.directDownload = selectedClient.directDownload
        
        state.selected.metadataSite = selectedClient.metadataSite
        state.selected.metadataXml = selectedClient.metadataXml     
    },
    /* funzione che modifica il valore della pagina corrente per implementare la 
    pagination delle risorse presenti nel dataset */
    changePage: (state, {n}) => {
        state.page = n
    },
}

