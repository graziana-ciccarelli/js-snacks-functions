// Dichiara la funzione qui.
function filtraPerLettera(namesArray, letter) {
  // filter per filtrare le parole che iniziano con la lettera specificata, ignorando maiuscole/minuscole
  return namesArray.filter(name => name[0].toLowerCase() === letter.toLowerCase());
}

// Invoca la funzione qui e stampa il risultato in console
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(filtraPerLettera(names, 'A')); // ["Anna", "Adele", "Alessandra"]
