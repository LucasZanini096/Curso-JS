function FuncaoQualquer (num) {
    try {
        num = Number(num)
    }
    catch {
        throw new Error ("Você deve declarar um número")
        return num
    }

    if (num % 3 == 0 && num % 5 == 0) { 
        return 'FizzBuzz';
    } else if (num % 3 == 0) { 
        return "Fizz";
    } else if (num % 5 == 0) {
        return "Buzz"
    } return num
        
}

for (let i = 0; i <= 100; i++) {
    console.log(i, FuncaoQualquer(i))
}

function fizzBuzz(numero) {
    if (typeof numero != "number" ) return numero;
    if (numero % 3 == 0 && numero % 5 ==0) return "FizzBuzz"
    if (numero % 3 == 0) return "Fizz"
    if (numero % 5 == 0) return "Buzz"
    return numero
}

