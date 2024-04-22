/*
Exercícios de forEach e map:
Questão:  Crie um algoritmo usando o método map() para calcular o 
quadrado de cada número em um array?
*/

// array original
var arrayOriginal = [1, 2, 3, 4, 5];

// usando o método map() para calcular o quadrado de cada número
var arrayQuadrados = arrayOriginal.map(function(numero) {
    return numero * numero; // retorna o quadrado do número
});


// exibindo o array com os quadrados dos números
console.log(arrayQuadrados);