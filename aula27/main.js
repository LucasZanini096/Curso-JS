//Mais diferenças entre var e let/const
// let tem escopo de bloco {}
// var só tem escopo de função


const verdadeira = true;

let nome = "Luiz";
var nome2 = "Luiz"

if (verdadeira) {
    let nome = "Otávio" //Recriando
    var nome2 = "Rogério" //Redeclarando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = "Outra Coisa" //Recriando
        console.log(nome)
    }
}   


function falaOi () {
    var nome = "Lucas" //Só posso acessar esta variável dentro da função
    //Não cosigo acessar fora (closure)
    //Porém caso ela fosse declrada fora da função, eu poderia usa-lá dentro, pois ela
    //pertence ao escopo global

    if (verdadeira) {
        let sobrenome = "Zanini"
        console.log(nome, sobrenome) 
    }
}

falaOi();


//Hosting -> Quando eu declaro eu variável dentro do escopo global 
//depois de chama-lá como em um console.log, o JavaScript vai elevá-la
//para o topo do código, porém com o valor undefined
//O Hosting funciona apenas com VAR !!!

