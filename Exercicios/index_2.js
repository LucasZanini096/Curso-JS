const nome = 'Lucas';
const sobrenome = 'Zanini';
const idade = 19;
const peso = 68;
const alturaEmMetros = 1.85;
let imc;
 
imc = peso / (altura ** 2);

console.log(nome, sobrenome, "tem", idade, "pesa", peso, "kg", 
"tem", altura, "e seu IMC é de", Math.round(imc));


//Templates Strings == fstrings (Python)
// Sinal de + -> Concatenação de strings
// ${nome-variável} == f''
console.log(`${nome} + " " + ${sobrenome} + "tem" + ${idade} +"anos, pesa" + ${peso}, "kg", 
"tem", ${altura}, "e seu IMC é de", ${Math.round(imc)}.`);

