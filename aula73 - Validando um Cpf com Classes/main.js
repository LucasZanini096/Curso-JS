const _cpf = Symbol("cpf")

class CPF {
    constructor(cpf) {
        this[_cpf] = cpf 
    }


    get mudarCpf () {
        return this[_cpf]
    } 

    set mudarCpf (valor) {
        if(typeof this[_cpf !== "string"]) return "Você não digitou um cpf"
        if(this[_cpf].length !== 14) return "Você não digitou um cpf"

        this[_cpf] = valor
    }

    //Método de instância

    get verificacaoCpf () {

        //Primeira parte
        if(typeof this[_cpf !== "string"]) return "Você não digitou um cpf"
        if(this[_cpf].length !== 14) return "Você não digitou um cpf"
        
        //Segunda Parte
        let listaNumsCpfFinal =  new Array();
        let cpfArrumado = this[_cpf].replaceAll("")
        cpfArrumado = cpfArrumado.replace("-","")
        cpfArrumado = cpfArrumado.slice(0,9)
        cpfArrumado = cpfArrumado.split("") //Retorna um array
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

}    