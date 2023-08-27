//Dados primitivos (imutáveis) - string, number, boolean, undefined
//null (bigint, symbol)

let nome = "Luiz";
console.log(nome[0]); //Retonra L

nome[0] = "R"
console.log(nome) //Continua Luiz

let a = "A";
let b = "B";
console.log(a,b);

a = "Outra Coisa";
console.log(a,b);



//Dados por referência (mutável) - array, object, function

let c = [1,2,3];
let d = c; //Apontando para o mesmo local na memória (realiza uma cópia)
console.log(c,d)

c.push(4); //Vai ocorrer o push tanto em c quanto em d
console.log(a,b); 

d.pop()
console.log(a,b);

//Para realizar apenas a cópia sem a referência na memória, 
//devo utilizar a seguinte estrtura 

d = [...c] //Não estou referenciando na memória
//Posso utilizar esta mesma tática em objetos, TAMBÉM 


