// Não podemos criar constantes com palavras reservadas 
// Constantes precisam ter nomes significativos 
// Não pode começar o nome de uma cosntante com um número 
// Não podem conter espaços ou traços 
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante 
// NÃO UTILIZE VAR, UTILIZE CONST 

const nome = "João"; //Tenho que sempre inicializar uma constante com um valor quando declarada
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado += 5;

console.log(resultadoTriplicado)

//Função Typeoff -> me permite descobrir o tipo de dados JavaScript de um objeto

console.log(typeof(primeiroNumero));
// Ou
// console.log(typeoff primeiroNumero)

