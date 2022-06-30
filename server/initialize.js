export default async (models) => {

    const listaRegioni = [
        {
            codReg: 1,
            nome:"PIEMONTE",
            img:"https://i.ibb.co/FBMJGqf/piemonte.webp"
        },
        {
            codReg: 2,
            nome:"VALLE D'AOSTA",
            img:"https://i.ibb.co/XxF6Tzr/valleaosta.webp"
        },
        {
            codReg: 3,
            nome:"LOMBARDIA",
            img:"https://i.ibb.co/XVyRXg2/lombardia.webp"
        },
        {
            codReg: 4,
            nome:"TRENTINO ALTO ADIGE",
            img:"https://i.ibb.co/zsX2v3g/trento.webp"
        },
        {
            codReg: 5,
            nome:"VENETO",
            img:"https://i.ibb.co/0svykCW/veneto.webp"
        },
        {
            codReg: 6,
            nome:"FRIULI VENEZIA GIULIA",
            img:"https://i.ibb.co/gDwrBQp/friuli.webp"
        },
        {
            codReg: 7,
            nome:"LIGURIA",
            img:"https://i.ibb.co/r36BNtr/liguria.webp"
        },
        {
            codReg: 8,
            nome:"EMILIA ROMAGNA",
            img:"https://i.ibb.co/Nsw22J0/emiliaromagna.webp"
        },
        {
            codReg: 9,
            nome:"TOSCANA",
            img:"https://i.ibb.co/yBMQrDL/toscana.webp"
        },
        {
            codReg: 10,
            nome:"UMBRIA",
            img:"https://i.ibb.co/c8XCcdP/umbria.webp"
        },
        {
            codReg: 11,
            nome:"MARCHE",
            img:"https://i.ibb.co/5FZNHYM/marche.webp"
        },
        {
            codReg: 12,
            nome:"LAZIO",
            img:"https://i.ibb.co/ZTpvD4b/lazio.webp"
        },
        {
            codReg: 13,
            nome:"ABRUZZO",
            img:"https://i.ibb.co/ZTF2Xp2/abruzzo.webp"
        },
        {
            codReg: 14,
            nome:"MOLISE",
            img:"https://i.ibb.co/QPBQhJG/molise.webp"
        },
        {
            codReg: 15,
            nome:"CAMPANIA",
            img:"https://i.ibb.co/3W0Ynww/campania.webp"
        },
        {
            codReg: 16,
            nome:"PUGLIA",
            img:"https://i.ibb.co/yWnfFsY/puglia.webp"
        },
        {
            codReg: 17,
            nome:"BASILICATA",
            img:"https://i.ibb.co/7p6y0YN/basilicata.webp"
        },
        {
            codReg: 18,
            nome:"CALABRIA",
            img:"https://i.ibb.co/k1Dbtw3/calabria.webp"
        },
        {
            codReg: 19,
            nome:"SICILIA",
            img:"https://i.ibb.co/dch38zP/sicilia.webp"
        },
        {
            codReg: 20,
            nome:"SARDEGNA",
            img:"https://i.ibb.co/5RLMcw5/sardegna.webp"
        },
    ]
    await models.Region.bulkCreate(listaRegioni)

    const listaRisorse = [
        {
            nome: "Aree forestali - aggiornamento 2014",
            regione: "EMILIA ROMAGNA",
            regId: 8,
            licenza: "CC BY 2.5",
            descrizione: 'Shapefile estratti dallo strato cartografico "Aree forestali aggiornamento 2014" (consultabile tramite il GIS WEB della Cartografia interattiva del Sistema Informativo Forestale regionale e distribuito anche come servizio WMS all’indirizzo http://servizigis.regione.emilia-romagna.it/wms/aree_forestali ). Lo strato cartografico "Aree forestali aggiornamento 2014" è la revisione regionale delle precedenti carte forestali realizzate dalle singole Amministrazioni Provinciali; si basa sulla fotointerpretazione del volo AGEA 2011 ma recepisce, ove disponibili, anche fonti informative più recenti. L\'indagine regionale rappresenta il quadro conoscitivo aggiornato, ma non sostituisce le carte provinciali qualora esse siano recepite dagli strumenti pianificatori vigenti. Di seguito sono scaricabili gli shapefile relativi alle coperture delle 9 province dell\'Emilia-Romagna.',
            wfs: "prova",
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
            regId: 7,
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
        {
            nome: "pluto",
            regione: "LIGURIA",
            regId: 7,
            licenza: "CC BY 2.5",
            descrizione: "Regione Liguria - Politiche della natura e delle aree interne, protette e marine, parchi e biodiversità - Vice direzione generale agricoltura, risorse naturali, aree protette e interne",
            wfs: "",
            wms: "",
            wmsLayers: "M1400:L3614",
            arcgis: "",
            directDownload: "https://srvcarto.regione.liguria.it/geoservices/apps/download/repository/246555/Aree_protette.zip",
            metadataSite: "",
            metadataXml: "https://srvcarto.regione.liguria.it/geoservices/REST/metadata/scheda_xml/1400",
            elastic: "pluto",
            xc: "991070",
            yc: "5512748",
            formato: "Vettoriale",
            inspireTheme: "LAND COVER"
        },
        {
            nome: "pluto",
            regione: "CAMPANIA",
            regId: 15,
            licenza: "CC BY 2.5",
            descrizione: "CAMPANIA - Politiche della natura e delle aree interne, protette e marine, parchi e biodiversità - Vice direzione generale agricoltura, risorse naturali, aree protette e interne",
            wfs: "",
            wms: "lopo",
            wmsLayers: "M1400:L3614",
            arcgis: "",
            directDownload: "https://srvcarto.regione.liguria.it/geoservices/apps/download/repository/246555/Aree_protette.zip",
            metadataSite: "",
            metadataXml: "https://srvcarto.regione.liguria.it/geoservices/REST/metadata/scheda_xml/1400",
            elastic: "pluto",
            xc: "991070",
            yc: "5512748",
            formato: "Raster",
            inspireTheme: "LAND COVER"
        },
    ]
    await models.Risorsa.bulkCreate(listaRisorse)
}
