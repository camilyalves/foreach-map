/*
Exercícios de forEach e map:
Questão:    Qual é a diferença fundamental entre map() e forEach()?
*/

//map() retorna um novo array com base na função de callback fornecida. Ou seja, ele cria um novo array ao aplicar uma função a cada elemento do array original.
//map() não modifica o array original; ele cria e retorna um novo array com os resultados das chamadas de função para cada elemento do array original.


//forEach() executa uma função de callback fornecida uma vez para cada elemento do array sem retornar nada (ou seja, retorna undefined).
//forEach() não cria um novo array; ele apenas executa uma operação em cada elemento do array original.


// use map() quando você quer transformar cada elemento de um array em algo diferente e criar um novo array com esses resultados. Use forEach() quando você quer apenas iterar sobre os elementos de um array e executar uma operação em cada um, sem a necessidade de criar um novo array.