// 1
// 2
// 3

// * -> referência todos as variáveis de meu módulo 

import somaQualquer from ".modulo1";


import {nome as nome2, sobrenome as sobrenome2, idade, Pessoa} from "./modulo1";
//Posso renomear variáveis de outro módulos, porém com o mesmo valor


const nome = "João"; //Vai dar erro -> pois já foi declarado em outro módulo 

const p1 = new Pessoa("Lucas", "Zanini")
console.log(p1.nome, p1.sobrenome)



console.log(nome, nome2, sobrenome2, idade)
console.log(somaQualquer(5,5))
