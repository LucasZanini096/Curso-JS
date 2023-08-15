//Escopo Léxico 

const nome = "Luiz"; 
//Vai dar erro, pois nome não foi declarado
function falaNome() {
    const nome = "Otávio" //Agroa vai retornar essa variável
    console.log(nome)
}

function usaFalaNome() {
    falaNome();
}

usaFalaNome();
