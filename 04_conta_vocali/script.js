/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */




// Dichiara la funzione qui.
function contaVocali(stringa) {
    let conteggio = 0;
    const vocali = 'aeiou';
    for (let i = 0; i < stringa.length; i++) {
        if (vocali.includes(stringa[i].toLowerCase())) {
            conteggio++;
        }
    }
    return conteggio; 
}


// Invoca la funzione qui e stampa il risultato in console
const word = 'javascript';
const risultato = contaVocali(word);
console.log(risultato);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)