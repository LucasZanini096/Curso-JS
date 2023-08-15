//For of
//            0123...     
const nome = "Luiz Otávio Henrique"
const nomes = ["Luiz", "Otávio", "Miranda"]

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

for (let i in nome) {
    console.log(nome[i]); //retorna o índice ou chave de um objeto
}

console.log("##########")

for (let valor of nomes) { //Retorna o valor
    console.log(valor);
}

console.log("############")

nomes.forEach(function(valor, index, array) { //Semelhante ao Enumerate do Python
    console.log(`${valor}, ${index}, ${array}`) //Tenho que criar uma função dentro do método 
}
)

//For Clássico - Geralmente com iteráveis (arrays ou strings)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si  (iteráveis, arrays ou strings)



