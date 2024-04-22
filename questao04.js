/*
Exercícios de forEach e map:
Questão: Crie um algoritmo usando o método forEach() para encontrar a 
soma de todos os números em um array? 
*/

const numeros = [10, 20, 30, 40, 50];
let soma = 0;

numeros.forEach(numero => {
    soma += numero;
});

console.log("A soma de todos os núnmeros é:", soma);