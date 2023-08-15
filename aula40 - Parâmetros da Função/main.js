function funcao() {
    console.log(arguments[6])
}
//Posso enviar um argumneto numa função que não possui parâmetros

funcao("Valor",1,2,3,4,5,6,7,8,9,10); //Não vai dar erro !!
//Retorna "Oi"

//Todos esses valores são armazenados num objeto (arguments)
//Argumentos que sustenta todos os argumentos enviados
function funcao2 () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

function funcao3 (a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f);
}

funcao(1,2,3);
//Vai retornar 1 2 3 undefined undefined undefined

function funcao4 (a,b=2, c=4) { //Estou definido valores padrão
    //(Maneira antiga) b = b || 0; 
    //Se não tem isso, vai retornar NaN, pois b é undefined
    console.log(a + b + c)
}

funcao4(2,undefined,20) //Apenas o valor undefined possibilitar utilizar os valores padrão de uma função 


//Argumentos que sustenta todos os argumnetos enviados
//Posso desestrturar objetos e arrays, do mesmo modo !!
function funcao5({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: "Luiz", sobrenome: "Otávio", idade: 20}
funcao5(obj)

function conta(operador, acumalador, ...numeros) { //Operador de resto retorna um array
    //Esse operador sempre tem que estar por último numa função 
    for (let numero of numeros) {
        if (operador === "+") acumalador += numero;
        if (operador === "-") acumalador -= numero;
        if (operador === "*") acumalador *= numero;
        if (operador === "/") acumalador /= numero;
    }
    
    console.log(acumalador); 
}

