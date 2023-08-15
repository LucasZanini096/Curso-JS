
//Global
//Closure -> capacidade de uma função acessar seu escopo léxico
function retornaFuncao () {
    const nome = 'Luiz';
    return function () { //função anônima
        return nome
    }
}

const funcao = retornaFuncao("Luiz"); //Fecha o escopo com o nome Luiz 
console.log(funcao)
//console.dir possui a mesma função de console.log