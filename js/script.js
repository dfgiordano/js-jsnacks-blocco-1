/* Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste. */

/* creare due liste, nomi e cognomi */
var nomi = ["Franco", "Paolo", "Luigi", "Gino"];
console.log(nomi);
var cognomi = ["Rossi", "Pozzi", "Lotti", "Botte"];
console.log(cognomi);
/* abbinamento 1 e abbinamento 2 */
var abbinamento1 = randomItem(nomi);
console.log(abbinamento1);

var abbinamento2 = randomItem(cognomi);
console.log(abbinamento2);

/* stampare in pagina la lista di invitati dentro un ul */

for (var i = 0; i < 10; i++) {
  }
  
  document.getElementById("invitato").innerHTML = abbinamento1 + " " + abbinamento2;

/* funzione valida per entrambi */
function randomItem (nomi) {
    return nomi[Math.floor(Math.random()*nomi.length)];
}