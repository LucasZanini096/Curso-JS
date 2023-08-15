function Produto(nome,preco,estoque) {
    //this.nome = nome;
    //this.preco = preco;
    //this.estoque = estoque; //Eu quero que não seja modificado este atributo
    //Eu posso declarar uma property sem necessariamente declarar o atributo antes 

    Object.defineProperty(this, "estoque", { //Objeto, nome da chave, objeto com as configurações //Apenas uma chave
        enumerable: true, //Pode mostrar a chave ?
        value: estoque, //Pode ter um valor associado?
        writable: true, //Posso alterar o valor dessa propriedade ?
        configurable: false //Pode reconfigurar ou apagar a propriedade ? 
    })


    Object.defineProperties(this, { //Objeto //Várias Chaves 
        
        nome: {//Nome da chave // Dentro é o objeto com suas configurações 
        enumerable: true, 
        value: estoque, 
        writable: true, 
        configurable: false },

        preco: {
        enumerable: true, 
        value: estoque, 
        writable: true, 
        configurable: false

        }
    })
}

const p1 = new Produto("Camiseta", 20, 3)
p1.estoque = 50000
delete p1.estoque
console.log(p1)


console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}




