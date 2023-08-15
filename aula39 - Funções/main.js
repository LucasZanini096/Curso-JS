//Declaração de função (Fonction Hoisting)
//O motor do JavaScript vai elevar todas as funções para o topo do código
//Posso executar uma função mesmmo antes de criar ela


falaOi();

function falaOi () {
    console.log("Oi")
}

//First-Class objects (Objetos de primeira classe) => São Dados !!
//Functions Expression

const souUmDado = function() { //Variável que passa a ser uma função 
    console.log("Sou um Dado") //Posso jogar essa variável como um parâmetro de uma outra função 
};

function executaFunção(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao()
}

executaFunção(souUmDado);

//Arrow function 
const funcaoArrow = () => {
    console.log("Sou uma arrow function")
}
funcaoArrow();

//Dentro de um objeto (Método)
const obj = {
    falar: function () {
        console.log("Estou falando")
    }
}
obj.falar();




