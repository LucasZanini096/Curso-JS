//Objects JavaScript

const pessoa1 = {
    nome: "Luiz", //Estou criando atributos no corpo do objeto
    sobrenome: "Miranda",
    idade: 25
};


console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)


function criaPessoa (Nome, Sobrenome, Idade) { //Função que cria objetos
    return {  //Estou criando um objeto por meio de uma função 
        nome: Nome,
        sobrenome: Sobrenome,
        idade: Idade
    };
}

//Posso também declarar da seguinte maneira 
/* 
function criaPessoa (Nome, Sobrenome, Idade) { //Função que cria objetos
    return {  Nome,  Sobrenome, Idade
    };  
}
O nome do atributo vai se associar automaticamente com o valor colocado como argumento
*/


const pessoa2 = criaPessoa("Lucas", "Zanini", 19)
console.log(pessoa2.sobrenome)


const pessoa3 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala () {  //Criação de um método (ação) dentro de um objeto
        console.log(`${this.nome} ${this.sobrenome} está falando oi.`);        
    },  //This estpa referenciando ao próprio objeto 

    incrementaIdade () {
        this.idade++;
    }
 
};


pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();


pessoa1.fala();
pessoa1.incrementaIdade();


pessoa1.fala();
pessoa1.incrementaIdade();


pessoa1.fala();
pessoa1.incrementaIdade();


