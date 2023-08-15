function Produto(nome,preco,estoque) {

    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque; //Variável interna
    //Evita de criar um loop infinito dentro do objeto

    Object.defineProperty(this, "estoque", { 
        enumerable: true,  //Value e Writable não uteis neste caso
        configurable: true,
        get: function() { //Pega um valor e exibe ele 
            return estoquePrivado
        },
        set function(valor) { //Quero que aceite apenas números
            if (typeof valor !== "number") {
                throw new TypeError("Você deve escrever um número")
            }
            estoquePrivado = valor; //O valor não será alterado caso ele não seja um número
        } 
    })

}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace("Carro", "Fruta")
            nome = valor;
        }
    };
}

//const p1 = new Produto("Camiseta", 20, 3)
//console.log(p1) //Na chave estoque retorna Getter
//Produto { nome: 'Camiseta', preco: 20, estoque: [Getter] }
//console.log(p1.estoque)

const p2 = criaProduto("Camiseta");
console.log(p2) //Retorna { nome: [Getter/Setter] }
p2.nome = "Carro"
console.log(p2.nome)
