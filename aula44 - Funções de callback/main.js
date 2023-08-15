function rand(min = 1000, max=3000) {
    const num = Math.random() * (max-min) + min;
    return Math.floor(num);
} 
 
 function f1 (callback) {
    setTimeout(function () { //Função de callBack
        console.log('f1');
        if (callback) callback();
    }, rand())
 }

 function f2(callback) {
    setTimeout(function () {
        console.log("f2");
        if (callback) callback();
    }, rand())  
 }

 function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand())
 }

//CallBack Hell
/*
f1 (function() { //Sempre será executado primeiro
    f2(function() { //Nunca será executado antes de f1
        f3 (function() { //Nunca será executado antes de f2,f1
            console.log("Olá mundo") //Nunca será executado antes de f3,f2,f1
        });
    });
});
*/

//Outra maneira


f1(f1CallBack);
function f1CallBack() {
    f2(f2CallBack);
}

function f2CallBack () {
    f3(f3CallBack);
}

function f3CallBack() {
    console.log("Olá mundo")
}