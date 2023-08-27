/**
 * Operadores Aritméticos
 * + (Adição | Concatenação)
 * - (Subtração)
 * / (Divisão)
 * "*" (Multiplicação)
 * "**" (Potenciação)
 * % (Resto da divisão)
 */

//Para alterar a precedência de uma operção matemática, use parênteses !!

//Operador de incremento -> ++

const contador = 1;
contador++; //2 OU ++contador (pré-incremento) -> já realiza a operação quando chamado
contador++; //3 (pós incremento) -> realiza após a operação quando chamada (mais comum)
contador++; //4
contador++; //5
console.log(contador);

// Operador de decremento -> -- (Função reversa de ++)

// Acréscimo de um valor diferente de 1

const passo = 50;
let contador_1 = 0;

contador_1 = contador_1 + passo;
console.log(contador_1);
contador_1 = contador_1 + passo;
console.log(contador_1);
contador_1 = contador_1 + passo;
console.log(contador_1);

//OU

//Operadores de atribuição
// += | -= | *= | /= | **= | %=

const passo_2 = 20;
let contador_2 = 0;

contador_2 += passo_2
contador_2 += passo_2
contador_2 += passo_2

console.log(contador_2)

// NaN -> Not a Number 
let num_1 = 10;
let num_2 = "Luiz"

console.log (num_1 * num_2) //NaN

//Porém assim vai dar certo !!

num_1 = 5;
num_2 = "4";
let num_3 = "L3" //typeoff -> NaN

console.log(num_1 * num_2) //20

//Função de conversão de strings em números

num_1 =  10;
num_2 = parseInt("5");
console.log(num_1 + num_2);

num_1 =  10;
num_2 = parseFloat("5.54"); //JavaScript não distingue números inteiros de números de ponto flutuante
console.log(num_1 + num_2);
console.log(typeof num_2);

num_1 =  10;
num_2 = Number("5"); //Se eu colocar um texto dentro da função, ele retorna um NaN
console.log(num_1 + num_2);
console.log(typeof num_2);








