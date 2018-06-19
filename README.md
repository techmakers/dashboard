# Analisi Dashboard

Scopo: creare un sistema standard di costruzione delle dashboard.

## Introduzione

Le dashboard sono dei pannelli che permettono di organizzare dati classificati in modo visuale.

Ogni dashboard presenta elementi base, che uniformano sia lo sviluppo che le interfaccie utente.

Le dashboard sono accessibili tramite una pagina "indice" che è la dashboard delle dashboard.

Per ogni dashboard "registrata" nel sistema, è presente un icona che presenta come minimo i seguenti elementi:

1. Nome della dashboard
2. Link per accedere alla dashboard
3. Eventuale icona con numerino bianco in fondo rosso tipo "notifica"
4. Testo che spiega cosa mostrerà la dashboard una volta aperta

Lo standard CSS è quello di bootstrap 4, ogni dashboard dovrebbe essere rappresentata da una card: [https://getbootstrap.com/docs/4.0/components/card/](https://getbootstrap.com/docs/4.0/components/card/)

L'icona con numerino bianco è realizzabile mediante il componente "badge" di boostrap 4: [https://getbootstrap.com/docs/4.0/components/badge/](https://getbootstrap.com/docs/4.0/components/badge/)


L'ordinamento delle dashboard nella pagina indice è impostato secondo il valore di una proprietà "index" che viene assegnata ad ogni dashboard. Le dashboard con index "0" sono messe per ultime.

## Struttura

Il tutto deve essere organizzato in package autoconsistenti.

Il package principale, che andremo a nominare "techmakers:dashboard" conterrà il template di elenco delle dashboard e un API sia lato client che lato server accessibili alle dashboard che si "registreranno" per poter essere mostrate nella pagina indice e quindi accessibili agli utenti.

Il package principale espone un oggetto con nome: ```tmdashboard```.

Per ogni dashboard verrà creato un package specifico che esegue le operazioni standard e particolari.

### Operazioni standard

Ogni package di dashboard deve esporre una funzione ```run``` che prepara i dati da visualizzare.

La funzione ```run``` potrà essere richiamata manualmente o da procedura schedulata (vedremo poi come schedulare il lancio).


### Operazioni particolari

Sono quelle operazioni che saranno disponibili come link, pulsanti o altro, all'interno della dashboard.


## Funzionamento (API)

### Inizializzazione

Il motore della dashboard deve essere inizializzato all'avviamento dell'applicativo con il metodo ```init```, indicando le opzioni che si desiderano, ad esempio: la collection ove memorizzare le dashboard.

```
tmdashboard.init({
	collection: myCollectionObjForDashboardIndex
});
```
La collection di default, se non indicata, verrà appositamente creata con il nome "tmdashboard.dashboards" e disponibile come proprietà pubblica del componente  ```tmdashboard.registeredDashboardsCollection```


### Registrazione della dashboard nella pagina indice

Ogni dashboard si registra sulla pagina indice invocando un apposito metodo esposto dall'API del package "techmakers:dashboard".

Tale metodo è denominato ```register``` e accetta in input i seguenti parametri: name, templatename, description, roles, index.

Esempio:

```
tmdashboard.register(
	"ticket",
	"dashboardticket",
	"Mostra i tempi di attraversamento dei ticket",
	['admin','user'],
	99999
);
```

Quando la dashboard "ticket" vuole mostrare il numerino di "notifica" nella dashboard principale dovrà chiamare l'apposito metodo ```notify``` come da esempio:


```
tmdashboard.notify(
	"ticket",
	"4"
);
```
dove "ticket" è il nome della dasboard e "4" è il numero da mostrare nel pallino rosso.

### Template pagina indice

Il package espone la pagina indice con un template denominato "tmdashboard", includibile in altri template mediante ```{{ >tmdashboard }}```
