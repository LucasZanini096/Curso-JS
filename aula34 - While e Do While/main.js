let controle = 0;

while (i <= 10) { //Cuidado com o laço infinito
    console.log(controle);
    i++
}

console.log('Segue a vida...')

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
//let rand = random(min, max);
let rand = 10;


while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

//Do while -> Faça alguma coisa antes de realiza o while 

do {
    rand = random(max, min);
    console.log(rand)
} while(rand !==10);


