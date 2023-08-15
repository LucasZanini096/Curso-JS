//Produto -> aumento, desconto 
//Camiseta, caneca, lapis

function Produto(nome, preco) {
    this.nome =  nome;
    this.preco = preco;
}


Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) { //Tem seu próprio prototype
    Produto.call(this, nome, preco) //Herdo de produto os atributos nome e preco
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    //this.estoque = estoque

    let estoquePrivado = estoque

    Object.defineProperty (this, "estoque",  {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== "number") {
                throw new TypeError("Você deve escrever um número")
            }
            estoquePrivado = valor //Variável privada, não pode ser acessada fora do objeto 
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

//Object.setPrototypeOf(Camiseta.prototype, Produto.prototype) //Sem Camisa.prototype não funciona 

//Outra Forma de linkar o prototype de ambos
Camiseta.prototype = Object.create(Produto.prototype); 
Camiseta.prototype.constructor = Camiseta;


caneca.estoque = 100;

const camiseta = new Camiseta("Regata", 7.5, "Preta") //Mas tem outro problemam, sendo que o contrtutor não é Camiseta e sim Produto 
camiseta.aumento(10)
console.log(camiseta)
console.log()

