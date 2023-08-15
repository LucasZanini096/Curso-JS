const pessoas = [
    {id: 3, nome: "Luiz"},
    {id: 2, nome: "Maria"},
    {id: 1, nome: "Helena"},
];

/*
const novasPessoas = {};
for (const pessoa of pessoas) {
    const{id} = pessoa;
    novasPessoas[id] = {...pessoa}; //Retorna um objeto e uma string(número)
}
*/

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}
//console.log(novasPessoas); //Dessa maneira sempre vai retornar a ordem crescente 


for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}

for (const pessoa of novasPessoas) {
    console.log(pessoa) //Retorna um Array
}