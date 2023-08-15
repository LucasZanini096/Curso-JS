//Funções Geradoras 
//Posso executar determinadas partes de minha função conforme eu vou chamando ela ao decorrer do código


function* geradora1() {
    //Código qualquer...
    yield "Valor1" //Semelhante ao return, porém retorna esse valor apenas na primeira cahamada da função
    //Código qualquer...
    yield "Valor2"
    //Código qualquer...
    yield "Valor3"
}

const g1 = geradora1();
//console.log(g1.next().value);

//Apenas com o método next -> retorna um objeto
//{value: "Valor3", done: false} | Done -> verifica se há ou não mais yields na função
//Com value -> retorna o valor declarado no Yield

for (let valor of g1) { //Possui um next embutido no for 
    console.log(valor) //Retorna o valor do yield
}

function* geradora2 () {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}


const g2 = geradora2();


function* geradora3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}


function* geradora5() {
    yield function() {
        console.log("Vim do y1")
    
    }

    //....

    yield function() {
        console.log("Vim do y2")
    }

}