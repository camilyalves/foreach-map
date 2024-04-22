/*
Exercícios de forEach e map:
Questão:   O método forEach() sempre retorna um valor? 
*/

//o método forEach() não retorna um valor. Ele é projetado para iterar sobre os elementos de um array e executar uma função de callback para cada elemento, mas não retorna nada (ou retorna undefined explicitamente).

//A função de callback fornecida ao forEach() é executada para cada elemento do array, mas o próprio método forEach() não retorna nada. Isso significa que, ao contrário de map(), que retorna um novo array com base nos resultados da função de callback aplicada a cada elemento, forEach() não retorna um novo array.