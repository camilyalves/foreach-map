/*
Exercícios de forEach e map:
Questão:    É possível encadear map() e forEach() juntos? 
*/


//o encadeamento é possível porque map() retorna um novo array e forEach() não retorna nada (ou retorna undefined), então você pode chamar forEach() no novo array retornado por map(). No entanto, isso pode levar a um código confuso e difícil de entender. é melhor evitar encadear map() e forEach() juntos.