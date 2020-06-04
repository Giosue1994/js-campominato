// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre
// compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il
// numero di volte che l’utente ha inserito un numero consentito.

// BONUS: all’inizio il software richiede anche una difficoltà all’utente che
// cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con
// difficoltà 2=> tra 1 e 50

// VARIABILI
var rangeNumeri = 100;
var bombe = 16;

// creo un array vuoto dove vengono inseriti i 16 numeri casuali
var listaBombe = [];

// genero 16 numeri casuali tra 1 e 100
while (listaBombe.length < bombe) {
  var nRandom = Math.floor(Math.random() * rangeNumeri) + 1;

// Controllare che il numero creato non sia dentro a listaBombe
  // specifico che inizialmente in numero non viene trovato
  var trovato = false;

  // creo un ciclo per controllare se il numero già inserito è stato trovato
  for (var i = 0; i < listaBombe.length; i++) {
    if (nRandom === listaBombe[i]) {
      trovato = true;
    }
  }

  // se il numero non è uguale viene inserito nella lista
  if (trovato === false) {
    listaBombe.push(nRandom);
  }
}
console.log(listaBombe);
