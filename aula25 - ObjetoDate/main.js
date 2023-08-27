//Função Date (construtora - sempre começa com a primeira letra maiúscula) 
//Posso passar os milésimos de segundos como argumento da função
const data = new Date(0); //O1/01/1970 Timestamp unix ou época unix (Marco Zero) 
//Cria um objeto de Data 


const data_atual = new Date(); //Vai retornar a data atual
console.log(data.toString())

//Posso colocar (ano, mês, dia, hora, minuto , segundo, milissegundo) como argumentos 
//Se eu omitir algum valor, vai aparecer zerado.
//Isso não ocorre com dia(começa em 0), mês(0-11) e ano 

const data_1 = new Date('2019-04-20 20:20:59')
//formato mais utilizado -> Date String 

console.log('Dia', data_1.getDate())
onsole.log('Mês', data_1.getMonth() + 1)
onsole.log('Ano', data_1.getFullYear())
onsole.log('Hora', data_1.getHours())
onsole.log('Min', data_1.getMinutes())
onsole.log('Seg', data_1.getSeconds())
onsole.log('ms', data_1.getMilliseconds())
onsole.log('Dia semana', data_1.getDay()) //Dia da Semana (0 -Domingo, 6 - Sábado)
console.log(Date.now()) //Retorna o número de milisegundo do marco zero até a data atual

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}


function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}

const data_2 = new Date();
const dataBrasil = formataData(data_2);
