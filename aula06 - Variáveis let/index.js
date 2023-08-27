// Variável -> um elemento que armazena determinado objeto em determinado local da memória


let nome = 'João'; //String
//Estou inicializando uma variável num local da memória

console.log(nome, "nasceu em 2004");
console.log("Em 2004", nome, "nasceu no Brasil");

//##########################################################################

let nome_1; //Declarei uma variável, mas não a inicilizei 
console.log(nome_1)

//###########################################################################

let nome_2;
nome_2 = "Lucas"
console.log(nome_2)
nome_2 = "Simone"
console.log(nome_2)

//let nome_2; Vai dar erro, pois já foi declarada essa variável!!

// Não podemos criar variáveis com palavras reservadas (palavras chaves)
//Como if, console, let e  entre outros.

//Não pode começar o nome de uma variável com um número, assim como em Python.
//Não podem conter espaços ou traços.

//Em JavaScript se utiliza o camelCase (Primeiro nome -> Minúsculo | Segundo Nome -> Maiúsculo )
//É uma linguagem Case-sensitive -> Letras Maiúsculas e minúsculas são diferentes 
//NÃO UTILIZE VAR, UTILIZE LET 
let nomeCliente = "Lucas"
nomeCliente = "Zanini"

console.log(nomeCliente)