//Atribuição de objetos 

const pessoa = {
    //nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//const nome = pessoa.nome;
//console.log(nome);


// Atribuição via desestruturação
//Coloco o nome da chave  
const {nome = "Qualquer coisa", sobrenome} = pessoa;
console.log(nome, sobrenome)

//Posso modificar o nome da variavel e seu valor apenas referenciando a chave do objeto
const {nome: teste, sobrenome: teste_2} = pessoa;
console.log(teste, teste_2)

//Acessando os dados dentro do objeto endereco 
const {endereco: {rua, numero}, endereco} = pessoa;

//const {nome, sobrenome, ...resto} = pessoa
//console.log(nome, resto)
