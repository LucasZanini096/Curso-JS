const nome = "Luiz";
const sobrenome = "Miranda";

const falaNome = () => nome + " " + sobrenome;

/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.falaNome = falaNome;
*/

exports.nome = nome;
exports.sorbenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "Qualquer Coisa" //Não muito usual para utilizar



console.log(module.exports);


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

//module.exports = 'Luiz';
//exports.Pessoa = Pessoa;

module.exports = {
    nome,sobrenome, Pessoa
}; //Não funciona com Exports

exports.OutraCoisa = "Outra coisa";

