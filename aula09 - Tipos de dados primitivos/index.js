//Dados Primitivos 
//String, number, undefined, null, bool

const nome = 'Luiz'; // string
const nome1 = 'Luiz'; // string
const nome2 = `Luiz`; //string
const num1 = 10 // number
const num2 = 10.42 //number
let nomeAluno; //undefined -> não aponta para um local na memória (de maneira implícita)
let sobrenomeAluno = null; //Nulo -> não aponta para um local na memória (de maneira explícita)
const aprovado = true; // Boolean = true, false (lógico)

let a = 2;
let b = a; //Estou apontando a variável b para o mesmo local da memória do valor a
//Ou seja, foi copiado !!

console.log(a,b);

a = 3;

console.log(a, b);
