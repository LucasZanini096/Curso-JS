const nome = "Luiz";
const sobrenome = "Miranda"
const idade = 30;


//Apenas existe 1 default por módulo
export default function soma(x,y) { //Não preciso nomear com mesmo nome em outro módulo, além de não precisar de chaves 
    return x + y //Colocando como padrão 

}

export {nome, sobrenome, soma} 
//Posso importar uma variável de um módulo com outro nome


//Posso exportar algum dados durante na sua criação

export const nome2 = "Lucas"; //Estou exportando diretamente 


export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}
