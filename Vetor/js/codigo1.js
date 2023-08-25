/* NODE.JS - É um softare de código aberto, multiplataforma 
que permite a execução de java script fora do navegador */


let aluno = [];

/* aluno.push("paulo");      //* adiciona novo elemento no final da matriz */
aluno.push("paulo");
aluno.push("pedro");
aluno.push("antonio");
aluno.push("carlos");
aluno.unshift("Gabriel");    //* adiciona novo elemento no inicio da matriz */
aluno.unshift("alan");

aluno.pop();                 //* remove último elemento da matriz */

aluno.pop();

aluno.shift();               //* remove primeiro elemento da matriz */
console.table(aluno);
console.log("tamanho da matriz: " + aluno.length);
aluno[1] = "Maria do Carmo";
console.table(aluno);
delete aluno[1];
aluno.splice(2,0,"Guarulhos")
console.table(aluno);






