//For in -> lê os índices ou chaves de um objeto

//                0        1      2
const frutas = ['Pera', "Maçã", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let indice in frutas) {
    console.log(frutas[indice]);
}

const pessoa = {
    nome: "Luiz",
    sobrenome: "Otávio",
    idade: 30
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

const L = "nome";
console.log(pessoa[L]);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};
