//                 0         1        2
const nomes = ["Eduardo", "Maria", "Joana"] //Forma Literal
//Posso criar um Array dessa maneira:
//const nomes = new Array("Eduardo","Maria", "Joana") //Forma Constrtutora
nomes[2] =  'João';
delete nomes[2];
console.log(nomes) //Retorna a lista com um empty item


//Valor por referência
const novo = nomes; //Tudo que eu modifico em dos arrays, modifica em ambos
//Pois ambos fazem referência ao mesmo espaço na memória

//Para não haver essa referência, eu devo fazer o seguinte 

const novo_1 = [...nomes];
const removido = nomes.shift(); //Remove do início do Array 
//.pop(); -> remove um item do final do array
console.log(nomes, removido)

nomes.push("João")
nomes.push("Wallace")
//Coloca ao final do array

//.unshift -> coloca um novo elemento ao início de um array


const novo_3 = nomes.slice(0,3) //Pego apenas uma parte do array 


const nome = "Lucas Zanini da Silva"
const nomes_1 = nome.split(" ") //Cria um array a partir de uma string, sendo cada um dos elementos separados por espaços 
console.log(nomes_1)

const nome_2 = nomes_1.join(" ") //Cria uma string a partir de um array
//O parâmetro é como será separado esses elementos




