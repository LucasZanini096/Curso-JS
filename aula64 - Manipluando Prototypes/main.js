// new Object -> Object.prototype
const objA = {
    chaveA: "A"
    // __proto__ : Object.prototype
    //Herda o prototype de Object
};

const objB = {
    chaveB: "B"
    // __proto__: objA
    //Herda o prototype do objeto A
}

const objC = new Object();
objC.chaveC =  "C"


console.dir(objA)
console.dir(objB)
Object.setPrototypeOf(objB, objA) //O objeto b herda o prototype do objeto a
//Se não tem esse métodos, ambos vão herdar diretamente de Object.prototype
console.log(objB.chaveA)
Object.setPrototypeOf(objC, objB)


//Object.setPrototypeOf(objC, objA) -> Pulei na cadeia
//Neste caso se eu tentar acessar a chaveB, vai resultar em undefined


console.log(objC.chaveB)


//Para acessar o prototype de um objeto, não utilize nomeobjeto.__proto__
//pois poderá ter problemas de performance

//Utilize Object.getPrototypeOf(objA)


//Exemplo

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) { //Criação de um método para desconto
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


const p1 = new Produto("Camiseta", 50)
//p1.desconto(100);

const p2 = { //Criando um objeto diretamente (literal)
    nome: "Caneca",
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)
//p2.__proto__ === Produto.prototype (True)

p2.aumento(50)
console.log(p2)


console.log(p1);
p1.aumento(100);
console.log(p1)


//const p3 = Object.create(Produto.prototype)
//Cria um objeto vazio, mas que herda de Produto.prototype
//Mas posso definir properties dentro dele

/*
p3.preco = 113; //Criando uma chave com o seu valor
p3.aumento(10);
console.log(p3);
*/


const p3 = Object.create(Produto.prototype, {

    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})

p3.aumento(10);
console.log(p3)

