
const _velocidade = Symbol('velocidade') //Criando uma propriedade privada
//Posso adutera-lá apenas com alguma condição 

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; //Velocidade inicial 
    }

    get velocidade() {
        return this[_velocidade]
    }
    
    set velocidade(valor) { //Imponho uma condição para o meu setter
        if(typeof valor !== "number") return;
        if(valor >= 100 || valor <=0) return;
        this[_velocidade] = valor
    }

    acelerar() {
        if(this.velocidade >= 100) return;
        this[_velocidade]++;
    }
    freiar () {
        if(this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro("Fusca")

/*
for (let i =0; i <= 200; i++) {
    c1.acelerar();
}
*/


c1.velocidade = 200
console.log(c1)


class Aluno {
    constructor(nome, sobrenome, curso, semestre){
        this.nome = nome
        this.sobrenome = sobrenome
        this.curso = curso,
        this.semestre = semestre
    }

    //Não pode usar defineProperty dentro de uma classe, apenas de uma função constrtutora ou fábrica

    get nomeAluno () {
        console.log("GETTER")
        return this.nome
    }

    set nomeAluno(nomeAluno) {
        console.log("SETTER")
        if(typeof nomeAluno !== "string") return;

        this.nome = nomeAluno
    }

    get nomeCompleto () {
        console.log(`${this.nome}` + " " + `${this.sobrenome}`)
    }

    set nomeCompleto(valor) {
        valor = valor.split(" ")
        this.nome = valor.shift();
        this.sobrenome = valor.join(" ")
    }
}

let lucas = new Aluno('', 'Engenharia', 5)
lucas.nomeAluno = 'Lucas' //Chamou o SETTER
console.log(lucas.nomeAluno) //Lucas //Chamou o GETTER