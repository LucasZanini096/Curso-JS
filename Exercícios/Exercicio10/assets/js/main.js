const paragrafos = document.querySelector(".paragrafos")
//NodeList não é array, mais possui índices. Ou seja, eu posso iterar sobre
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body) //Retorna todos os estilos de um elementos HTML
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody //Me permite modificar o estilo de um elemento HTML
    //Sintaxe: p.style.{alguma coisa}
    p.style.color = "#ffffff"    
}