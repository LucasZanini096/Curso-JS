class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + "já está ligado")
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + "já está desligado")
            return;
        }

        this.ligado = false;
    }
}

class Smartfone extends DispositivoEletronico {
    constructor(nome, cor, modelo ) {
        super(nome); //Chamo o construtor da classe pai 
        this.cor = cor;
        this.modelo = modelo

    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi
    }

    ligar () { //Sobrescrevendo um método
        //Quando chamado para um objeto pertecente a classe Tablet
        //Ele vai exceutar esse método.
        //Mas caso ele não existissse, seria executado o da classe DispositivoEletronico 
        console.log("Você está tentando mudar o método ligar")
    }

    ligarTablet () { //Criando um método próprio
        console.log("Tablet ligado")
    }
}

//Eu posso sobrescrever métodos em classes herdadas ou mesmmo criar novos métodos

const s1 = new Smartfone('Iphone', "Preto", "7");
s1.ligar();
console.log(s1)
s1.ligar