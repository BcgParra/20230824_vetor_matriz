let cadastro = [
    [9],
    ["Astarote"],
    [123.36],
    ["Campinas-SP"]

];

console.table(cadastro);

let cadastro1 = [
    ["ID: ",9],
    ["Nome:", "Astarote"],
    ["Endereço: ", "Av. da Saudade, 125"],
    ["Cidade: ", "Campinas-SP"],
    ["Telefone: ", 199999999]
];
console.table(cadastro1);


let cadastro2 = [
    ["Astarote ",9, 10, 5.5, 8],
    ["Josiane ",12, 11, 10, 9],
    ["Pedro ",1, 2, 3.5, 7],
    ["Ana ",5, 5.5, 6, 7],
    ["Claudia ",19, 3.6, 8.5, 2.5, 111],
];
console.table(cadastro2);
console.log(cadastro2[4][5]);