const a1 = [1,2,3]
const a2 = [4,5,6]
//const a3 = a1.concat(a2, [7,8,9, "Luiz"]) //Método concat me possibilita concatenar arrays
//Se eu uso o operador de + => ele retorna uma string


// ...rest 
// ...spread (espalhar os elementos de um array em outro)

const a3 = [...a1, ...a2] //Posso concatenar usando o spread !! 
console.log(a3);

