//Splice         -5       -4       -3         -2        -1    
//               0         1        2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"]

//nomes.splice(indice, delete, elem1, elem2, elem3)
//Delete (numero de elementos a serem removidos)
//Depois do delete, são elementos que podem ser adicionados
//pop

//const removidos = nomes.splice(-1,1);

//shift 
const removidos = nomes.splice(0,1);

//Push 
nomes.splice(nomes.length, 0, "Lucas")

//Unshift 
nomes.splice(0,0, "Luiz", "Otávio")
console.log(nomes);




//const removidos = nomes.splice(3,2, "Lucas", "Zanini") //Posso colocar Number.MAX_VALUE
console.log(nomes, removidos)