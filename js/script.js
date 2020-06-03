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

// FUNZIONE NUMERI RANDOM
function nRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// FUNZIONE 16 NUMERI RANDOM
function nRandom16(bomb) {
  var bomb = [];
  for (var i = 0; i < 16; i++) {
    bomb.push(nRandom(1, 100))
  }

  return bomb;
}

// genero 16 numeri casuali tra 1 e 100
var bomb = nRandom16(bomb);
console.log(bomb);

// chiedo all'utente di inserire un numero compreso tra 1 e 100
var numeroUtente = parseInt(prompt('Inserisci un numero'));

console.log(numeroUtente);
