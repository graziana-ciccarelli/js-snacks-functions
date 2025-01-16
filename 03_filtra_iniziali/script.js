/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */




// Dichiara la funzione qui.
function filtraPerLettera(namesArray, letter) {
    let risultato = [];
    for (let i = 0; i < namesArray.length; i++) {
      if (namesArray[i][0] === letter) {
        risultato.push(namesArray[i]);
      }
    }
    return risultato;
  }


// Invoca la funzione qui e stampa il risultato in console

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(filtraPerLettera(names, 'A'));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]