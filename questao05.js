/*
Exercícios de forEach e map:
Questão:  Crie um algoritmo usando o método map() para criar um novo 
array com o dobro de cada número ímpar em um array original?
*/

// Função para verificar se um número é ímpar e dobrá-lo
function dobrarNumeroImpar(numero) {
    if (numero % 2 !== 0) { // Verifica se o número é ímpar
      return numero * 2; // Retorna o dobro do número ímpar
    } else {
      return numero; // Retorna o número original se for par
    }
  }
  
  // Array original
  var arrayOriginal = [1, 2, 3, 4, 5];
  
  // Usando o método map() para criar um novo array com o dobro de cada número ímpar
  var novoArray = arrayOriginal.map(dobrarNumeroImpar);
  
  // Exibindo o novo array
  console.log(novoArray);
  