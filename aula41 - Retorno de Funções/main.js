function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luiz', "Otávio");
const p2 = {
    nome: "João",
    sobrenome: "Oliveira"
};

console.log(typeof p1);
console.log(typeof p2);


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + " " + resto;
    }
    return falaResto; //Retorna a função, porém sem executa-lá
} //É um intervalo !!

const fala = falaFrase('Olá');
const resto = fala('mundo!');

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadruplica(2))
