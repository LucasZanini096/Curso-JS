//Reduce -> Reduzindo um array a um único elemento
//Some todos os números 
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce (function(acumulador, valor, indice, array){
    
    acumulador += valor;
    return acumulador;
    
     //Sem return, a função retorna undefined 
}, 0) //Valor inicial do meu acumulador

console.log(total)


//Posso colocar condições para a minha redução 

const total_2 = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 !== 0) {
        acumulador += valor;
    }
    return acumulador;
})

console.log(total_2)

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})

