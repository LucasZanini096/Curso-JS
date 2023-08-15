function mostrarHora () {
    let data = new Date();

    return data.toLocaleDateString('pt-br', {
        hour12: false
    });
}

setInterval(); //Vai configurar um intervalor de tempo para uma função ser ativada em
//determinado momento

function funcaoDoInterval () {
    console.log(mostrarHora());
}

setInterval(funcaoDoInterval, 1000); //Minha função vai ser repetir a cada 1 segundo (1000ms)

//Outra maneira

const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer); //Após determinado tempo, minha função vai parar de ser executada 
}, 3000);

setTimeout(function() { //Posso definir a realização de tarefas em determinado momento do código
    console.log("Olá mundo"); 
}, 5000);

