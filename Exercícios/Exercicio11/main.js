function retornaMaior(num_1, num_2) {

    try {
        num_1 = Number(num_1)
        num_2 = Number(num_2)
    } catch (err) {
        throw new Error ("Você deve escrever números para esta função")
    }

    if (num_1 > num_2) {
        return `O ${num_1} é maior que o ${num_2}`
    } 
        return `O ${num_2} é maior que o ${num_1}`
}

//Outras maneiras 

function max(x,y) {
    return x > y ? x : y;
}

const max2 = (x,y) => { //Arrow Function
    return x > y ? x : y;
};

const max3 = (x,y) =>  x > y ? x : y;
