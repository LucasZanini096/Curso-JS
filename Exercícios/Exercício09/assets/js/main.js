const elementos = [
    {tag: 'p', texto: "Qualquer coisa"},
    {tag: 'div', texto: "Frase 2"},
    {tag: 'section', texto: "Frase 3"},
    {tag: 'footer', texto: "Frase 4"},
]

const container = document.querySelector('.container');
const div = document.createElement('div')


for (let i = 0; i < elementos.length; i++) {
    //console.log(elementos[i].tag); 
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement('tag'); //Criando elementos HTML(DOM)
    tagCriada.innerHTML = texto; //Escrevendo texto na tag criada
    div.appendChild(tagCriada) //Colocando dentro da div o conteúdo
}

container.appendChild(div) //Colocando dentro do conteiner


for (let i = 0; i < elementos.length; i++) {
    //console.log(elementos[i].tag); 
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement('tag'); 
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

container.appendChild(div) 