//IIFE -> Immeadiately invoked function expression

(function(idade, peso, altura) {  //Função anônima declarada
    //As variáveis declaradas dentro do escopo dessa função não afeta o escopo global
    
    const sobrenome = "Miranda";
    
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome("Luiz"));
    }

    falaNome();
    console.log(idade, peso, altura)

}) (30,80,1.80);


const nome = "Qualquer coisa";
