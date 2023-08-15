//Polimorfismo 
//Classe -> Função constrtutora 


//Superclasse -> Classe constrtutora
function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};   
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag.: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
    );
};


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constrtuctor =  ContaCorrente

ContaCorrente.prototype.sacar = function(valor) { //Pode sacar até o negativo -> Rescreveu o método sacar, porém a partir da mesma base
    if(valor > (this.saldo +  this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};   


function ContaPoupanca(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constrtuctor =  ContaCorrente

const cc = new ContaCorrente(11,22,0,100);
cc.depositar(10)
cc.sacar(90)
