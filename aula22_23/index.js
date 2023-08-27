const hora = 10;

if (hora < 12) {
    console.log("Bom dia");
}

//Sintaxe 
/*

if (condição) {
    Execute algo
}
*/

/*
Entre 0 - 11 - Bom dia 
Entre 12 - 17 - Boa Tarde 
Entre 18 - 23 - Boa noite 
*/

//O if pode ser utilizado sozinho 
//Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else if's na minha checagem 
//Podemos utilizar apenas else e if, sem utilizar else if


const hora_1 = 13;

if (hora_1 < 12 && hora <= 11) {
    console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa Tarde");
} else if (hora >= 18 && hora <= 23) {
    console.log ("Boa noite");
} else {
    console.log("Digite um horário válido")
}

const tenhoGrana =  NaN;

if (tenhoGrana) {
    console.log("Vou sair de casa");
} else {
    console.log("Não vou sair de casa");
}

const numero = 10;


if (numero >= 0 && numero <= 5) {
    console.log("O número está entre 0 e 5.");
} else {
    console.log("O número NÃO está entre 0 e 5");
}

console.log("O número NÃO está entre 0 e 5");

 
