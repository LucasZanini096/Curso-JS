//Trabalhamos com Promises quando nós trabalhamos com algo assíncrono -> sendo algo que não temos certeza de quando acabará


//Métodos para Promises 
//Promise.all
//Promise.race
//Promise.resolve (Cai no then diretamente)
//Promise.reject (Cai no catch diretamente)

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        if(typeof msg !== "string"){ 
            reject(false) //CAI NO CATCH -> Promisse rejeitada 
            return;             
        }
        setTimeout(() => {
            console.log(msg);
            resolve(msg.toUpperCase() + ' - Passei na promise') //Só pode colocar um parâmetro
        }, tempo);
    }); 
}

function baixaPagina() {
    const emCache = false;


    if(emCache) {
        return Promise.resolve("Página em cache"); 
    } else {
        return esperaAi("Baixei a página", 3000)
    }
}



const promises = [
    //"Primeiro valor", -> Uma promise já realizada 
    esperaAi("Promise 1", rand(1,5)),
    esperaAi("Promise 2", rand(1,5)),
    esperaAi("Promise 3", rand(1,5)),
    //"Outro valor" -> Uma promise já realizada
]

/*

Promise.all(promises).then( //Executa todas as promises 
    function(valor) {
        console.log(valor);
    }
).catch(function(erro) {
    console.log(erro)
})

*/

/*
Promise.race(promises).then( //Executa a primeira promise que se realiza apenas
    function(valor) {
        console.log(valor);
    }
).catch(function(erro) {
    console.log(erro)
})
*/


baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => console.log(e))

