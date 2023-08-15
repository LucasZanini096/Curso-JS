//Funções Fábrica -> retornam objetos 
//Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter 

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift(); //Retira o elemento do primeiro índice de um array
            this.sobrenome = valor.join(" ");
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
            //This faz referência ao próprio objeto, podendo selecionar os seus próprios atributos
            //This faz referência a quem chama o objeto

            //Posso declarar um método dessa maneira
        
        /* fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        }*/
        },
        altura: a, 
        peso: p,

        get imc () { //Get (Getter) -> Transforma um método em um atributo !!
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
console.log(p1.imc);
const p2 = criaPessoa("Maria", "Joaquina", 1.6, 42);
console.log(p1.fala("está falando sobre Js"));
