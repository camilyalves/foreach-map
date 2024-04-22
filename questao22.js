/*
Exercícios de forEach e map:
Questão:     O que acontece se a função de callback passada para forEach() 
modificar os elementos do array original?  
*/

//Se a função de callback passada para forEach() modificar os elementos do array original, essas modificações serão refletidas no próprio array original. Isso ocorre porque forEach() itera sobre os elementos do array original e executa a função de callback para cada elemento, permitindo que você faça modificações nos elementos diretamente.