Consegna: Creare un carosello.
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione.

1. Milestone 1:
Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.

- [X] Aggangiare il carosello con la classe
- [X] Creare un ciclo:
        - [X] scorrere le immagini
        - [X] cambiare titolo
        - [X] descrizione
    - [X] Agganciare tutto nel DOM

- [X] Mi aggancio alla classe delle immagini
- [X] Aggiungo la classe 'active'

*Funzione next*
- [X] Creo l'evento al click sul bottone next
        - [X] Rimuovo la classe active
    - se è minore della lunghezza dell'array di object:
        - [X] incremento l'indice;
    - altrimenti:
        - [X]  indice = 0;
- [X] aggiungo la classe 'active' man mano che l'img si sposta di indice.

*Funzione back*
- [X] Creo l'evento al click sul bottone back
        - [X] Rimuovo la classe active
    - se è > 0:
        - [X] decremento l'indice;
    - altrimenti:
        - [X]  indice = alla lunghezza dell'array - 1;
- [X] aggiungo la classe 'active' man mano che l'img si sposta di indice.

2. Milestone:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.


