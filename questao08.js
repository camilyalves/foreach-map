/*
Exercícios de forEach e map:
Questão:   Crie um algoritmo usando o método forEach() para calcular a 
média de todos os números em um array?
*/

// array original
var arrayNumeros = [10, 20, 30, 40, 50];

// variáveis para armazenar a soma e a contagem dos números
var soma = 0;
var contador = 0;

// usando o método forEach() para calcular a soma de todos os números
arrayNumeros.forEach(function(numero) {
    soma += numero; // adiciona o número á soma
    contador++; // incrementa o contador
});

// calcula a média dividindo a soma pelo total de números
var media = soma / contador;

// exibe a média
console.log("A média dos números é:", media);