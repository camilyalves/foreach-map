/*
Exercícios de forEach e map:
Questão: Crie um algoritmo usando o método forEach() para encontrar o 
maior número em um array de números?
*/

let arrayDeNumeros = [10, 5, 8, 15, 3]; // array de números
let maiorNumero = -Infinity; // inicializa o maior número como -Infinity

arrayDeNumeros.forEach(numero => {
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
});


console.log("O maior número é:", maiorNumero); // saída: O maior número é: 15