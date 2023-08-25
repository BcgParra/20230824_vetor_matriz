
let frutas = ["Uva", "Banana", "Laranja", "manga", "Melão", "Maça", "Melancia"];
/* console.table(frutas); */

/* frutas.splice(1,1, "Abacaxi");

console.table(frutas);

frutas.splice(2,1,);

console.table(frutas); */

/* let posicao = frutas.indexOf("Banana");
console.log("Posição da fruta: " + posicao); */

let posicao = frutas.indexOf("manga");


frutas.splice(posicao, 1);

/* console.table(frutas); */
frutas.sort();
/* console.table(frutas);
console.log("Tamanho da matriz: " + frutas.length); */

frutas.splice(5,0, "Abacaxi");

/* console.table(frutas); */



