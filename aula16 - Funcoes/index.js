//Funções JavaScript

function saudacao(nome) {
    return `Bom dia ${nome}!` //Vai acabar a função no return
    //Se não for declarado um valor de return, por padrão irá rertonar undefined
}

saudacao_1 = saudacao("Luiz");
saudacao_2 = saudacao("Maria");

console.log(saudacao_1)



function soma(x,y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(3,6));
//Neste caso se não for declarado nada no parâmetro dessa função, haverá o retono de um valor NaN

function soma_1(x=1,y=2) { //Parâmetros nomeados -> Posso deixar de colocar argumentos na chamada da função 
    const resultado = x + y;
    return resultado;
}


console.log(soma_1(3))

//Segunda maneira de criar funções;

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(4));

//Terceira maneira -> Arrow Functions;

const raiz_1 = n => n ** 0.5;
console.log (raiz_1(9));

