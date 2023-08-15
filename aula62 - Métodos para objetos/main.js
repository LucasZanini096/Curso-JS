//Métodos para objetos 

//Não posso ter uma mesma chave num objeto

/*
Object.assign(des, any) -> Copia os elementos de um objeto para outro
Object.getOwnPropertyDescriptor(o, "prop")
...(spread)

//Já vimos
Object.keys(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: "Caneca", preco: 1.8}
const outraCoisa = {...produto};

outraCoisa.nome = "Outro nome";
outraCoisa.preco = 2.5;
console.log(produto)
console.log(outraCoisa)

const produto2 = {nome: "Produto", preco: 2};
/*
const caneca = {
    ...produto, //Spread operator para colocar elementos de um objeto em outro objeto
    material: "porcelana" 
}
*/


const caneca = Object.assign({
    material: "porcelana"
}, produto2)

console.log(Object.keys(produto)) //Retorna um Array com as chaves de um objeto
//Object.freeze(produto) //Não posso alterar mais o meu objeto

Object.defineProperty(produto, "nome", {
    writable: false,
    value: 'nome',
    configurable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(produto, "nome"))


//Object.entires -> Retorna um array para cada chave com seu valor
for(let [chave, valor] of Object.entries(produto)) { //stou usando desestrtuturação
    console.log(chave, valor)
}

 
