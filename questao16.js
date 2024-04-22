/*
Exercícios de forEach e map:
Questão:   E se a função de callback fornecida ao método map() não 
retornar nada? O que será retornado no novo array? 
*/

//Se a função de callback fornecida ao método map() não retornar nada explicitamente (ou seja, não incluir uma instrução return), cada elemento no novo array será undefined. Isso acontece porque o map() sempre retorna um novo array com o mesmo comprimento que o array original, e cada elemento desse novo array é o resultado da chamada da função de callback para o elemento correspondente no array original.