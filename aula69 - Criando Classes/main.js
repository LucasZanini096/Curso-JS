//Classes e funções construtoras realizam a mesma função 
//Todos os métodos criados com uma classe já são linkados ao seu prototype

class Pessoa {
    constructor(nome, sobrenome) { //Colocar parâmetros -> atributos 
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }
    comer () {
        console.log(`${this.nome} está comendo.`)
    }
    beber () {
        console.log(`${this.nome} está bebendo.`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}
 
const p1 = new Pessoa("Lucas", "Zanini") //Instanciando um objeto  -> criando um objeto por meio de um molde
const p2 = new Pessoa2("Júlia", "Gonsalves")
p2.falar()
console.log(p1)