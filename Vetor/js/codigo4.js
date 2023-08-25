/* Somando valores de uma matriz */

/* function somaArray(val1, val2, val3) {
    let resp = val1 + val2 + val3;
    return resp;
}

let x = somaArray(65, 3, 236)
console.log("Resposta da soma: " + x); */

/* Calcula média de 4 valores */

/* let resultado = 0;
let imprime = 0;

function media(v1, v2, v3, v4) {
    resultado = (v1 + v2 + v3 + v4) / 4;
    return resultado.toFixed(0);
}

console.log("A média é: " + media(5.5, 4.5, 10, 7.0)); */

/* ***************************************************************************************** */
/* function somarArray(x) {
    let soma = 0;
    for (let a = 0; a < x.length; a++) {
        soma += x[a];
    }
    return soma;
}

let valor = [1, 1, 1, 1, 1, 10];
let resultado = somarArray(valor);
console.log("Resultado da soma: " + resultado); */

/* ***************************************************************************************** */

function mediaArray(x){
    let soma = 0;
    for (let a =0; a < x.length; a++){
        soma += x[a];
    }
    return soma/x.length;
}

let valor = [100, 20, 30, 40, 10, 500];
let resultado = mediaArray(valor);
console.log("A média é: " + resultado);


