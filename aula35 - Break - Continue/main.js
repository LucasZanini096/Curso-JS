const numeros = [1,2,3,4,5,6,7,8,9]

for (let numero of numeros) {

    if (numero===2) {
        console.log("Pulei o número 2");
        continue; //Pula a próxima interação do laço
        //ignorando o restante do código
    };

    if (numero===5) {
        console.log("Pulei o número 5");
    };

    if (numero===7) {
        console.log("7 encontrado, saindo")
        break; //Força a saída do laço 
    }

    console.log(numero);
}


for (let i in numeros) {
    let numero = numeros[i]

    if (numero===2) {
        console.log("Pulei o número 2");
        continue; //Pula a próxima interação do laço
        //ignorando o restante do código
    };

    if (numero===5) {
        console.log("Pulei o número 5");
    };

    if (numero===7) {
        console.log("7 encontrado, saindo")
        break; //Força a saída do laço 
    }

    console.log(numero);
}


for (let i =0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero===2) {
        console.log("Pulei o número 2");
        continue; //Pula a próxima interação do laço
        //ignorando o restante do código
    };

    if (numero===5) {
        console.log("Pulei o número 5");
    };

    if (numero===7) {
        console.log("7 encontrado, saindo")
        break; //Força a saída do laço 
    }

    console.log(numero);
}

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero===2) {
        console.log("Pulei o número 2");
        i++;
        continue;        
    }

    console.log(numero);

    if (numero===7) {
        console.log("7 encontrado, saindo...");
        i++;
        break;
    }

    i++;
}
