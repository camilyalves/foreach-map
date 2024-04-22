/*
Exercícios de forEach e map:
Questão:    É possível modificar o array original com map()?
*/

//map() não modifica o array original; ele retorna um novo array com os resultados da aplicação da função de callback a cada elemento do array original. Isso significa que o array original permanece inalterado.

// você pode modificar os elementos do array original dentro da função de callback passada para map(), mas isso não alterará o array original em si. A modificação afetará apenas os elementos temporários criados durante a execução da função de callback.