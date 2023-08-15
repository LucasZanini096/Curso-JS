/*
JavaScript é baseado em protótipos para 
passar propriedades e métodos de um objeto para outro


Definição de protótipo 
Portótipo é o termo usado para referir ao que foi criado pela 
primeira vez, servindo de modelo ou molde para futura produções.


Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para 
criá-lo (Pessoa.prototype === pessoa1.__proto__). Quando tentamos acessar um membro de um objeto, primeiro o motor do JS 
vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos
é usada até o topó (null) até encontrar (ou não) tal membro.

*/


//Construtora -> molde(classe -> Python)
//Molde para a criação de novos objetos
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + " " + this.sobrenome; 
    //Neste caso, esse vai sobrescrever o prototype 
    //pois foi declarado antes. Primeiro procura o método no objeto, depois no __proto__
    //Problema -> Eu a cada pessoa criada, vai haver a instânciação de métodos, 
    //algo que pode comprometer a performance da lingaugem e do computador do cliente.

}

//Pessoa.prototype.naoSei = "Não Sei"

Pessoa.prototype.nomeCompleto = function() { //Melhora o funcionamento do programa
    return this.nome + " " + this.sobrenome
};

//Instância  -> Criando uma instância da função construtora
const pessoa1 = new Pessoa("Luiz", "O.") // <- Função Construtora
const pessoa2 = new Pessoa("Maria", "A.")
const data = new Date();

//Pessoa.prototype -> é um objeto !!

//Cadeia:  pessoa1 -> Pessoa.prototype -> Object.prototype


//__proto__ -> todas as propriedades dos Objetos estão localizados nesta propriedade
//Ou seja, não é necessária criar uma propriedade para cada objeto, pois todos todas vão para o __proto__
//Está localizada no pai de um objeto


console.dir(pessoa1)
console.dir(data) //Me permite ver no console do navegador
