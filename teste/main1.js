//SuperClasse
function Trabalhador (nome, idade, cpf, numeroCelular) {
    this.nome = nome 
    this.idade = idade
    this.celular = numeroCelular

    Object.defineProperty(this, "cpf", {
        value: cpf,
        writable: false,
        enumerable: false,
        configurable: false
    })
}

Trabalhador.prototype.validacaoCpf = function (cpf) {
     //Primeiro Dígito
     let indice1 = 10;
     let indice2 = 11;
     let listaNumsCpf = new Array();
     let listaNumsCpfFinal =  new Array();
     let cpfArrumado = cpf.replaceAll(".", "")
     cpfArrumado = cpfArrumado.replace("-","")
     cpfArrumado = cpfArrumado.slice(0,9)

    const cpfInvalidos = ["000000000", "111111111", "222222222", "333333333", "444444444",
"555555555", "666666666", "777777777", "888888888", "999999999"]

    if (cpfArrumado in cpfInvalidos) return `O cpf digitado não é válido`

     cpfArrumado = cpfArrumado.split("") //Retorna um array 
 
     for (let i = 0; i < cpfArrumado.length; i++) {
         listaNumsCpf.push(Number(cpfArrumado[i]))       
     }
 
     const somaPrimeiroDigito = listaNumsCpf.reduce(function(ac, valor) {
 
         ac += (valor * indice1);
         indice1 -= 1
 
         return ac
 
     }, 0); 
 
     function funcDigito(somaDigitos) {
         if ((somaDigitos % 11) < 2) return 0
         if ((somaDigitos % 11) >= 2) return 11 - (somaDigitos % 11) 
      };    
 
      const primeiroDigito = funcDigito(somaPrimeiroDigito)
      listaNumsCpf.push(primeiroDigito)
 
      //Segundo Dígito
 
      const somaSegundoDigito = listaNumsCpf.reduce(function(ac, valor) {
 
         ac += (valor * indice2);
         indice2 -= 1
 
         return ac
 
     }, 0); 
 
     const segundoDigito = funcDigito(somaSegundoDigito);
     listaNumsCpf.push(segundoDigito)
 
     for (let i in listaNumsCpf) {
      listaNumsCpfFinal.push(String(listaNumsCpf[i]))
     } 
 
     let cpfFinal = listaNumsCpfFinal.join("")
 
     cpfFinal = `${cpfFinal.slice(0,3)}`+ "." + `${cpfFinal.slice(3,6)}` + "." + 
     `${cpfFinal.slice(6,9)}` + "-" + `${cpfFinal.slice(9,11)}`
 
     if (cpfFinal === cpf) return `O cpf digitado é válido`
     if (cpfFinal !== cpf) return `O cpf digitado não é válido`
 
    
}


function Engenheiro (nome, idade, cpf, numeroCelular, especialidade) {
    Trabalhador.call(this, nome, idade, cpf, numeroCelular)
    this.especialidade = especialidade;
};

Engenheiro.prototype = Object.create(Trabalhador.prototype)
Engenheiro.prototype.constructor = Engenheiro

Engenheiro.prototype.falarEspecialidade = function(nome, especialidade) {
    console.log(`Meu nome é ${nome} e sou epecialista em ${especialidade}.`)
}

const workmen1 = new Trabalhador("Lucas Zanini","19","478.751.28-93", "11943750601")
console.log(workmen1.validacaoCpf("478.751.128-93"))

const engenheiro1 =  new Engenheiro("Gustavo", "20", "454464448446", "Civil")
engenheiro1.falarEspecialidade("Gustavo", "Civil")



