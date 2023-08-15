//Promises -> utilizado para realizar a espera da recepção de dados de uma API

//Com callback
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg)
        if(cb) cb();
    }, tempo);
}

esperaAi('Frase 1', rand(1,3), function() {;
    esperaAi("Frase 2", rand(1,3), function() {;
        esperaAi("Frase 3", rand(1,3));
    })
})


//Com promises


function esperaAi2(msg, tempo) {
    return new Promise((resolve, reject) => {

        if(typeof msg !== "string") reject("BAD VALUE") //CAI NO CATCH -> Promisse rejeitada 

        setTimeout(() => {
            console.log(msg);
            resolve(msg) //Só pode colocar um parâmetro
        }, tempo);
    }); 
    //Resolve -> código executado com sucesso
    //Reject -> Deu um erro no código, então rejeita 

}

esperaAi2("Conexão com o BD", rand(1,3)).then(resposta => {
    console.log(resposta);
    return esperaAi2("Buscando dados da BASE", rand(1,3));
}).then(resposta => {
    console.log(resposta)
    return esperaAi("Tratando os dados da BASE", rand(1,3))
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log("Exibe dado na tela")
}).catch( e => {
    console.log("ERRO", e)
});



