//Arrays -> Listas 
//Posso colocar vários objetos JavaScript dentro 
//São elementos indexados por elementos

const alunos = ["Luiz", "Maria", "João", true, null];
console.log(alunos); //Array completo

console.log(alunos[0]) //Elemento do índice 0 do array 

//OBS: Sempre colocar dados de um mesmo tipo em uma lista;
//Adicionar mais um elemento no array no final

alunos[3] = 'Luiza'
alunos[alunos.length] = "Lucas"

//Posso saber o tamanho do array pelo atributo lenght 

console.log(alunos.length)


//Método unshift -> permite eu adicionar elementos no início de um array

alunos.unshift("Luiza")

//Método push -> permite eu adiconar elementos em meu array
//Melhor adicionar elementos no final do array, a fim de não modificar o índice dos outros elementos
alunos.push("Fábio")

//Método pop -> remove o último elemento de um array 

alunos.pop()
//Posso salvá-lo em uma variável 

//Método shift -> permite eu retirar o primeiro elemento do array 

alunos.shift()

//Função instanceof (isistance em Python) -> retorna se determinado objeto é de 
//um determinado tipo declarado 

console.log(alunos instanceof Array);


