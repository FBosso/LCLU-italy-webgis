export default async (models) => {
    const listaRisorse = [
        {
            nome: "Aree forestali - aggiornamento 2014",
            regione: "EMILIA ROMAGNA",
            licenza: "CC BY 2.5",
            descrizione: 'Shapefile estratti dallo strato cartografico "Aree forestali aggiornamento 2014" (consultabile tramite il GIS WEB della Cartografia interattiva del Sistema Informativo Forestale regionale e distribuito anche come servizio WMS all’indirizzo http://servizigis.regione.emilia-romagna.it/wms/aree_forestali ). Lo strato cartografico "Aree forestali aggiornamento 2014" è la revisione regionale delle precedenti carte forestali realizzate dalle singole Amministrazioni Provinciali; si basa sulla fotointerpretazione del volo AGEA 2011 ma recepisce, ove disponibili, anche fonti informative più recenti. L\'indagine regionale rappresenta il quadro conoscitivo aggiornato, ma non sostituisce le carte provinciali qualora esse siano recepite dagli strumenti pianificatori vigenti. Di seguito sono scaricabili gli shapefile relativi alle coperture delle 9 province dell\'Emilia-Romagna.',
            wfs: "",
            wms: "https://servizigis.regione.emilia-romagna.it/wms/aree_forestali?&service=wms&version=1.3.0&request=GetCapabilities",
            wmsLayers: "",
            arcgis: "",
            directDownload: "https://ambiente.regione.emilia-romagna.it/it/parchi-natura2000/foreste/quadro-conoscitivo/sistema-informativo-regionale/aree_forestali_aggiornamento_2014",
            metadataSite: "https://datacatalog.regione.emilia-romagna.it/catalogCTA/dataset/aree-forestali-2014",
            metadataXml: "",
            elastic: "aree_forestali",
            xc: "1203352",
            yc: "5546462",
            formato: "Vettoriale",
            inspireTheme: "LAND COVER"
        },
        {
            nome: "Aree protette",
            regione: "LIGURIA",
            licenza: "CC BY 3.0",
            descrizione: "Regione Liguria - Politiche della natura e delle aree interne, protette e marine, parchi e biodiversità - Vice direzione generale agricoltura, risorse naturali, aree protette e interne",
            wfs: "",
            wms: "https://geoservizi.regione.liguria.it/geoserver/wms?version=1.3.0&request=getcapabilities",
            wmsLayers: "M1400:L3614",
            arcgis: "",
            directDownload: "https://srvcarto.regione.liguria.it/geoservices/apps/download/repository/246555/Aree_protette.zip",
            metadataSite: "",
            metadataXml: "https://srvcarto.regione.liguria.it/geoservices/REST/metadata/scheda_xml/1400",
            elastic: "",
            xc: "991070",
            yc: "5512748",
            formato: "Vettoriale",
            inspireTheme: "LAND COVER"
        },
    ]
    await models.Risorse.bulkCreate(listaRisorse)
}
