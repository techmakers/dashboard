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

L'ordinamento delle dashboard nella pagina indice è impostato secondo il valore di una proprietà "index" che viene assegnata ad ogni dashboard. Le dashboard con index "0" sono messe per ultime.

## Struttura 

Il tutto deve essere organizzato in package autoconsistenti.

Il package principale, che andremo a nominare "techmakers:dashboard" conterrà il template di elenco delle dashboard e un api sia lato client che lato server accessibili alle dashboard che si "registreranno" per poter essere mostrate nella pagina indice e quindi accessibili agli utenti.

Per ogni dashboard verrà creato un 
