/*
Exercícios de forEach e map:
Questão:    Qual é a diferença entre map() e forEach() em relação ao retorno 
de valores de uma função de callback?  
*/

//map() retorna um novo array contendo os valores de retorno da função de callback para cada elemento do array original, enquanto forEach() não retorna nenhum valor (ou retorna undefined) da função de callback.

//map():
//A função de callback em map() deve retornar um valor. Este valor será incluído no novo array retornado por map().
//O novo array retornado por map() terá o mesmo comprimento que o array original, pois cada elemento é mapeado para um elemento correspondente no novo array.

//forEach():
//A função de callback em forEach() não precisa retornar um valor específico. Se retornar algum valor, ele será ignorado.
//forEach() não retorna um novo array. Ele simplesmente executa a função de callback para cada elemento do array original.


//map() é usado quando você quer transformar cada elemento de um array e criar um novo array com esses resultados, enquanto forEach() é usado quando você quer apenas iterar sobre os elementos de um array e executar uma operação em cada um, sem a necessidade de criar um novo array