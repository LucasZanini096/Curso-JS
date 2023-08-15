//Objeto literal -> escreve a estrutura padrão do dado 

const pessoa = {
    nome: "Luiz",
    sobrenome: "Otávio"
}
/*
console.log(pessoa.nome)
console.log(pessoa["nome"]) //Melhor para acessar determinados dados dentro de um objeto 
console.log(pessoa.sobrenome)
*/
const chave = "nome"
console.log(pessoa[chave]) //Retorno "Luiz"
//Forma dinâmica 


const pessoa2 = new Object() //Método construtor
    pessoa2.nome = "Lucas"
    pessoa2.sobrenome = "Zanini"
    pessoa2.idade = 19
    pessoa2.falarNome = function() { 
        return `Meu nome é ${this.nome + " " + this.sobrenome}` 
    }
    //This retorna undefined neste caso
    pessoa2.getDataNacimento = function() {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    };

//Deletando uma chave de um objeto 
delete pessoa.nome
console.log(pessoa)

console.log(pessoa2.falarNome())
/*
console.log(pessoa2.getDataNacimento());


for (let chave of pessoa2) { //Não funciona -> TypeError: pessoa2 is not iterable
    console.log(chave)
}

for (let chave in pessoa2) {
    console.log(chave) //Funciona -> retorna as chaves do meu objeto
}

//Factories functions / Constructor functions // Classes 
//Factory Function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa("Lucas", "Zanini");
console.log(p1.nomeCompleto());

//Constructor Function
function Pessoa(nome, sobrenome) { //Pessoa é o construtor
    this.nome = nome; //This -> palavra chave 
    this.sobrenome = sobrenome; //Referencia o this ao objeto criado
    //A função irá retornar o próprio this
    //Return é implícito
}

const p2 = new Pessoa("Luiz", "Miranda") //Cria um objeto vazio
Object.freeze(p2); //Neste caso eu não posso modificar o valor do objeto, pois ele está travado
//Posso travar meu objeto dentro dele, colocando this dentro do parâmetro dessa sintaxe
console.log(p2)

//Um objeto aponta para um endereço de memória (referência) que possui um valor
//Eu posso modificar esse valor, porém eu não posso modificar o endereço de memória para uma constante

p2 = "Outra Coisa" //Tá errado!!
p2.nome = "Outra Coisa" //Está certo

*/