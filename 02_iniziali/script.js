/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

// Dichiara la funzione qui.
function lettereIniziali(nomi) {
  let iniziali = [];
  for (let i = 0; i < nomi.length; i++) {
    iniziali.push(nomi[i][0]); // aggiunge la prima lettera di ogni nome all'array iniziali
  }
  return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(lettereIniziali(names)); // Risultato atteso: ["A", "L", "M", "A", "G", "A"]
