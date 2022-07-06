# [Land Cover - Land Use | Italia](https://lcluitalia.herokuapp.com)
<img align="right" src="static/favicon.ico" alt="logo" width="220">

*Implementazione di una applicazione web che fornisca una visione centralizzata dei dati di Uso e Copertura del suolo a livello Italiano - Progetto di Geoinformatica, Politecnico di Milano.*

## Autore

[Francesco Bosso](https://github.com/FBosso) - cod: 10555965 (francesco.bosso@mail.polimi.it) - Geoinformatics Engineering<br>


## Descrizione Progetto
Il progetto consiste nella creazione di un geoportale che funga da "hot spot" per i dati italiani di uso e copertura del suolo. Il fine di ciò è quello di fornire non solo una visione più strutturata dello stato di fatto della suddetta tipologia di dato, ma anche quello di consentire l'accesso a tutti quegli strumendi fondamentali che sono correlati al dato (wfs, wms, Metadati XML, download, ecc.) ma che spesso non sono così falilmente reperibili a partire da un'unica piattaforma.
Il progetto è suddiviso in 3 parti fondamentali:

## Design
L'output finale del processo di design, articolasto nei seguenti punti fondamentali:
1. Wireframes commentati
2. Scenario di interazione tipo</br>


## Backend Technologies
+ [NPM](https://docs.npmjs.com/) è il Node Package Manager usato in questa applicazione per scaricare e gestire tutti i moduli necessari.
+ [NodeJS](https://nodejs.org/it/docs/) usato durante la fase di implementazione per creare un Web Server funzionante grazie all'ausilio di Express.
+ [Express](https://expressjs.com/it/) è un framework per applicazioni Node.js che fornisce una serie di funzioni avanzate per le applicazioni web e per dispositivi mobili.
+ [PostgreSQL](https://www.postgresql.org/docs/) è un open source DB system usato per fornire persistenza ai dati dell'applicazione web e per popolare la pagina HTML di informazioni
+ [Sequelize](https://sequelize.org/) è un Node.js Object–relational mapping (ORM) tool usato per eseguire query nei confronti del database.
+ [Elasticsearch](https://elastic.co/) è un search e analytics engine costituente il cuore dell'intero Elastic Stack.

## Frontend Technologies
+ [Axios](https://axios-http.com/docs/intro) è un promise-based HTTP Client per node.js ed è usato per gestire le richieste alle API.
+ [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=it)/[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=it) usati per strutturare e dare stile alle diverse pagine della applicazione web

## Framework e Idee Chiave
[NuxtJS](https://nuxtjs.org/) è il framework che si è deciso di usare. Esso consente di creare una applicazione web usando il "Single file component system" di Vue.js. Ciò consente, tra molte cose, un miglioramento della Search Engine Optimization (SEO).
Nuxt fornisce delle cartelle speciali per gestire diverse funzionalità, in questo progetto sono state usate:
+ La cartella **pages**: che contiene le pagine della applicazione web e, allo stesso tempo, organizza la parte di routing.
+ La cartella **components**: che contiene componenti riusabili in altre pagine / progetti. Una serie di elementi unitari fondamentali che danno vita all'applicazione.
+ La cartella **layouts**: che definisce il default layout contenete header (navbar) e footer e lo ripropone in tutte le pagine della applicazione.
+ La cartella **plugins**: che contiene una serie di file javascript che rendono accessibili alcune funzionalità aggiuntive all'applicazione (in questo caso la funzionalità aggiuntiva è l'impiego di vuelayers, plugin che consente la creazione di mappe interattive all'interno dell'applicazione)
+ La cartella **store**: che contiene, nel caso della presente applicazione, uno state (ossia una serie di variabili centralizzate e accessibili facilmente a partire da ogni component/page) e una serie di funzioni (anch'esse chiamabili da qualsiasi component/page dell'applicazione)
+ La cartella **server** per conetenere l'implementazione della parte di backend.
+ Si è fatto inoltre uso di alcune caratteristiche messe a disposizione dal sitema di routing di Nuxt.js: nella cartella pages si può infatti vedere come si sia fatto uso del "key name" index.vue (per identificare quelle specifiche pagine come "principali" nella specifica directory considerata) e come si sia fatto anche uso di nomi preceduti da underscore "_" (per re-impiegare per più contenuti lo stesso template in modo da snellire il progetto e fornire degli url più complensibili agli utenti).</br>
 

## Deploy
Il deployment del sito è stato eseguito su heroku (con il piano di hosting gratuito che ha il contro di un lento avvio iniziale della applicazione). La parte di backend è stata implementata gazie all'impiego di un "add-on" chiamato "heroku-postgreSQL", un’implementazione di “database-as-a-service” bastata su PostgreSQL.

  
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start


```
Per ulteriori dettagli e spiegazioni sul funzionamento di Nuxt.js, si rimanda alla [documentazione](https://nuxtjs.org).
