//Strings 
//Possuem índices 

//               01234567
//        -8-7-6-5-4-3-2-1
let umaString = "Um texto";
// Barra invertida (\) é um caracter de escape 


//Método concat -> realiza a concatenação 

console.log(umaString.concat('em um lindo dia'));
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia`)

//Método indexOf() -> retorna o índice de uma palavra ou caracter de um string
console.log(umaString.indexOf())

//Método lastIndexOf() -> retorna o índice de uma palavra
//ou caracter de uma string. Porém a contagem é realizada de trás para frente 

console.log(umaString.lastIndexOf())

//Método search -> semelhante ao indexOf, porém aceita expressões regulares

console.log(umaString.search(/[a-z]/g))

//Método replace -> permite trocar palavras dentro de uma string

console.log(umaString.replace('Um', 'Outra'));


//Atributo lenght -> retorna o tamanho da string

console.log(umaString.length);

//Método split( ) -> permite realizar o fatiamento de uma string

umaString = 'O rato roeu a roupa do rei de Roma'
console.log(umaString.split(" ")) //Retorna um array
console.log(umaString.split(2,6))
console.log(umaString.split(" ", 3))

//Método toUpperCase -> retorna todos os caracteres em Maiúsculo

console.log(umaString.toUpperCase())

//Método toLowerCase -> retorna todos os caracteres em Minísculo

console.log(umaString.toLowerCase())




