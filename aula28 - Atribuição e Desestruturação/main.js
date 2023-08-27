//               0 1 2 3 4 5 6 7 8
const numeros = [1,2,3,4,5,6,7,8,9];
//const primeiroNumero = numeros[0]
const [primeiroNumero, segundoNumero, ...resto] = numeros;
// ... -> rest operator
console.log(primeiroNumero, segundoNumero)
console.log(resto)

const [um, tres, cinco, sete] = numeros;
console.log(um, tres, cinco)


