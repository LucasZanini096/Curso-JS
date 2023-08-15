//Meio por composição
//Mixing
const falar = { 
    falar() {
    console.log(`${this.nome} está falando`)
} 
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}


const pessoaPrototype = Object.assign({}, falar, beber, comer) //Passa o objeto vazio e seus métodos após
//Ou pelo spread 
//const pessoaPrototype = {...falar, ..comer, ...beber}


//Factory Function
function criaPessoa(nome, sobrenome) {        
        return Object.create(pessoaPrototype,  { 
            //Cria um objeto herdado do prototype 
            //e posso configurar os seus atributos 
            nome: {value: nome},
            sobrenome: {value: sobrenome}
        })
}

const p1 = criaPessoa("Luiz", "Otávio");
const p2 = criaPessoa("Maria", "A")
console.log(p1)