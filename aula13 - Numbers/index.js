// IEE 754-2008

let num1 = 10.7675576;
let num2 = 2.5;

console.log(num1.toString() + num2);
consolelog(typeof num1);

//Como trasformar um número em binário

console.log(num1.toString(2));

//Método toFixed -> arredondamento de casas decimais 

console.log(num1.toFixed(2));

//Método isInteger -> retorna se um número é verdadeiro 

console.log(Number.isInteger(num1));

//Método isNaN -> retorna se um valor é NaN

let temp = num1 + "5";
console.log(temp);

let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4;

num3 = parseFloat(num3.toFixed(2)); //Garante precisão
//Outra maneira é colocar Number no lugar de parseFloat

console.log(num3);
console.log(Number.isInteger(num3));