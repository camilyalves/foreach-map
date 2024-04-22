/*
Exercícios de forEach e map:
Questão:   Qual é a diferença entre map() e forEach() em termos de 
manipulação do array original?  
*/

//map() retorna um novo array com base na função de callback fornecida, enquanto forEach() não retorna nada e simplesmente itera sobre os elementos do array original.

//map():
//map() não modifica o array original; ele retorna um novo array com os resultados das chamadas de função para cada elemento do array original.
//Cada elemento do array original é mapeado para um elemento correspondente no novo array, com base na função de callback fornecida


//forEach():
//forEach() não retorna nada (ou retorna undefined) e simplesmente itera sobre os elementos do array original, executando uma função de callback para cada elemento.
//forEach() não cria um novo array; ele apenas executa uma operação em cada elemento do array original.