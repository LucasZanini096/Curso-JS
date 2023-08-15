// Função constrtutora  -> objetos
// Função fabrica -> objetos
//Função constrtura possuem uma nomenclatura
//em que sempre o nome da função começa com letra maiúscula
//Mas é apenas uma convenção 


//Ambas as funções são moldes para a criação de novos objetos

//Quando houver a declaração de um novo objeto, tem que usar "new" antes !!

function Pessoa(nome, sobrenome) { 
    //Atributos ou métodos privados
    const ID = 123456; //Não está disponível fora do escopo dessa função !!

    const metodoInterno = function () {

    }
    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ":Sou um método")
    }
};

const p1 = new Pessoa("Luiz", "Otávio")
const p2 = new Pessoa("Maria", "Oliveira")

//New possui a função de criar um novo objeto vazio, apontando para o próprio objeto
//Possui um return já embutido

//Nas funções constrtutoras não é necessário usar vírgula