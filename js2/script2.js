/* Crea un array vuoto. */
var numeriDispari = [];
/* Chiedi per 6 volte all’utente di inserire un numero,
se è dispari (verifichiamolo con una funzione) inseriscilo nell’array. */
for (i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Inserisci un numero qualsiasi")); 

    if (isOdd(numero) == true) {
        numeriDispari.push(numero);
        
    }
}
console.log(numeriDispari);

function isOdd (numero) {
    return numero % 2== 1;
}

/* Stampa l'array nella console. */