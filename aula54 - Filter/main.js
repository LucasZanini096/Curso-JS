//Filter

//Retorne os números maiores que 10
const numeros = [5,50,80,65,32,41,57,85,32,7,11,10,27];


function callbackFilter(valor, indice, array) { //Array completo
    return valor > 10
}



//const numerosFiltrados = numeros.filter(callbackFilter); 
//Recebe uma função de callBack como argumento
//Filter vai executar a função de callBack

//Dependendo da minha lógica, se um elemento da lista percorrida 
//atender a condição imposta (true), ele será adcionado novo array!!


//Maneira mais comum 

//const numerosFiltrados = numeros.filter(function(valor) {
//    return valor > 10;
//})

//Modelo Arrow function

const numerosFiltrados = numeros.filter((valor) => valor > 10);


//Retorne as pessoas que tem o nome ocm 5 letras ou mais 
//Retorne as pessoas com mais de 50 anos 
//Retorne as pessoas cujo nome termina com a 


const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47},
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
//console.log(pessoasComNomeGrande)

const pessoasComMais50 = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasComMais50)


const pessoasTerminaA = pessoas.filter((obj) => obj.nome.endsWith('a'));
//console.log(pessoasTerminaA)

