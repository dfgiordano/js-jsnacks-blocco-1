/* Crea un array vuoto. */
var numeriDispari = [];
console.log(numeriDispari);
/* Chiedi per 6 volte all’utente di inserire un numero,
se è dispari (verifichiamolo con una funzione) inseriscilo nell’array. */
for (i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Inserisci un numero qualsiasi")); 
    console.log(numero);
    
    if (numero % 2 == 1) {
        numeriDispari.push(numero[i]);
        console.log(numeriDispari);
    } else {
        
    }

}






/* Stampa l'array nella console. */