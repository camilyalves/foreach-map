/*
Exercícios de forEach e map:
Questão: Crie um algoritmo usando o método map() para converter um 
array de strings para um array de números? 
*/

let arrayDeStrings = ['1', '2', '3', '4', '5']; // Array de strings

let arrayDeNumeros = arrayDeStrings.map(numero => parseInt (numero));

console.log(arrayDeNumeros); // saída: [1, 2, 3, 4, 5]