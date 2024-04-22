/*
Exercícios de forEach e map:
Questão: Crie um array com 5 números e usando o método forEach(), crie 
um algoritmo para  adicionar 1 a cada elemento deste array? 
*/

let numeros = [1, 2, 3, 4, 5]; // array com 5 números

numeros.forEach((numero, indice) => {
    numeros[indice] = numero + 1;
});

console.log(numeros); // saída: [2, 3, 4, 5, 6]