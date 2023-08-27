//Avaliação de curto circuito
//Não necessito checar mais nada caso eu tenho um false em determinada expressão 
/*
&& -> false  && true -> false
|| -> true || false -> true
*/

/*
Falsy -> é um valor que se traduz em falso quando avaliado em um contexto boolean 
(Não necessariamente é um tipo de dado boolean)

Valores Falsy (avaliados como falso)
0

' ' "" ``
null/ undefined 
NaN
*/
console.log('Luiz' && 'Maria'); //Maria
console.log('Luiz' && NaN && "Maria") //NaN

function falaOi() {
    return "Oi";
}

//And

const vaiExercutar = "Joãozinho";

console.log(vaiExercutar && falaOi());

//Or


console.log(0 || false || null || "Luiz Otávio" || true); //"Luiz Otávio"
//Neste caso de expressão sempre vai retornar o primeiro valor verdadeiro 

const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;

console.log(a || b || "Joãozinho" || c || d || e )