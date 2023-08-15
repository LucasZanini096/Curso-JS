
try {
    console.log(naoExisto);    
} catch (err) {
    console.log("naoExisto não existe");
    console.log(err);
}

function soma_1(x,y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw("x e y precisam ser números."); //Sinalizei o erro com minhas palavras
        //Seria o Raise em Python 
    }
    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1', 2));

} catch(error) {

    console.log(error) //Neste caso vai aparecer a mensagem do Throw
}


function soma_2(x,y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x e y precisam ser números."); //Estou utilizando uma função construtora
    } //Dessa maneira aparece todo o erro que JavaSript lança de maneira padrão, com a mesnagem do throw
    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1', 2));

} catch(error) {

    console.log(error) //Neste caso vai aparecer a mensagem do Throw
    //Essa mensagem não aparece para o usuário no Front Engine
}
