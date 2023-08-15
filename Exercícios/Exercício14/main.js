//Validador de cpf

const cpf = "478.751.128-93"

function validadorCpf(cpf) {


    //Primeiro Dígito
    let indice1 = 10;
    let indice2 = 11;
    let listaNumsCpf = new Array();
    let listaNumsCpfFinal =  new Array();
    let cpfArrumado = cpf.replaceAll(".", "")
    cpfArrumado = cpfArrumado.replace("-","")
    cpfArrumado = cpfArrumado.slice(0,9)
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
console.log(validadorCpf(cpf))

                                                                                                                                                                                                                                                                                                         
