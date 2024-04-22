/*
Exercícios de forEach e map:
Questão:  Crie um algoritmo usando o método forEach() para imprimir 
apenas os elementos pares de um array? 
*/

// array original
var arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// usando o método forEach() para imprimir apenas os elementos pares
arrayOriginal.forEach(function(elemento) {
    if (elemento % 2 === 0) { // verifica se o elemento é par
    console.log(elemento); // imprime o elemento se for par
  }
});