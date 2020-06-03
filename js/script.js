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

// VARIABILI
var listaBombe;
var numeroUtente;
var listaNumeriUtente = [];
var message;

var bomba = false;

// genero 16 numeri casuali tra 1 e 100
listaBombe = nRandom16(listaBombe);
console.log(listaBombe);


// chiedo all'utente di inserire un numero compreso tra 1 e 100
while (bomba === false && listaNumeriUtente.length < 84) {
  numeroUtente = parseInt(prompt('Inserisci un numero'));

  // verifico se l'elemento inserito dall'utente è già presnte nella lista
  for (var j = 0; j < listaNumeriUtente.length; j++) {
    if (numeroUtente === listaNumeriUtente[j]) {
      alert('Numero già inserito');
      bomba = true;
      message = 'HAI PERSO';
      console.log(message);
    }
  }
  
  // inserisco i numeri dichiarati dall'utente in una lista
  listaNumeriUtente.push(numeroUtente);
  console.log('lista dei numeri inseriti dall\'utente ', listaNumeriUtente);


  // verifico che l'elemento non sia nella lista
  for (var i = 0; i < listaBombe.length; i++) {
    if (numeroUtente === listaBombe[i]) {
      alert('BOOM!')
      bomba = true;
      message = 'HAI PERSO!';
      console.log(message);
    }
  }

  // se non viene trovata nessuna bomba l'utente ha vinto
  if (listaNumeriUtente.length == 84) {
    message = 'HAI VINTO!';
    console.log(message);
  }
}
