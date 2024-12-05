Photo Blog
===
**CONSEGNA**

**Milestone 1**

Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

**Milestone 2**

Utilizzando Postman o Thunder Client, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

**Milestone 3**

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

**Bonus**

rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
Buon Lavoro

**Giorno 2**

CONSEGNA

Milestone 1

Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

Milestone 2

Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

Milestone 3

Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:

Bonus

Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

## Svolgimento
- Ho iniziato dal mio file html. Ho creato velocemente l'header con il suo background e poi mi sono occupato di creare la card da importare in un secondo momento nel file js.
- Ho sistemato gli aspetti grafici della card con css e bootstrap.
- Una volta creata la mia card di default, ho proseguito su js.
- Innanzitutto ho usato thunder client per capire la struttura del mio oggetto, dove ho constatato che le proprietà che mi sarebbero servite sarebbero state solo 3.
- Quindi, una volta importato l'axios nel file html, ho richiamato il mio endpoint con una const per semplificare la lettura dello script.
- Ho utilizzato axios.get per lavorare sulla chiamata ajax.
- Qui ho resettato l'innerHTML del mio container html per prima cosa, in modo che se ci fosse stato qualcosa al suo interno lo avrei sovrascritto.
- Mi sono poi occupato della function per stampare in pagina le mie card degli album.
- Qui ho destrutturato l'oggetto album richiamando solo le tre proprietà di cui necessitavo.
- In seguito ho concatenato nel mio container.innerHTML tutte le card degli album con i template literal posizionati dove necessari.
- Sono tornato nel then dell'axios, dove con il metodo forEach ho iterato il mio array richiamando la mia funzione per stampare le card.