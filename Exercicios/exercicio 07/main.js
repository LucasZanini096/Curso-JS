function meuEscopo () {
    const form = document.querySelector(".form")
    const resultado = document.querySelector('.resultado')
    /*
    O método querySelector() do documento retorna o primeiro elemento dentro do documento 
    que corresponde ao seletor ou grupo de seletores especificado (CSS -> Id's ou classes). 
    Se nenhuma correspondência for encontrada, null será retornado.
    */

    /*
    form.onsubmit = function (evento) { //Ocorre quando um formulário é enviado
        evento.preventDefault() //Previne em comportamento comum do navegador 
        //sendo a da atualização da página a cada submit do button
        //Havendo o envio do formulário
        alert(1);
    */

        const pessoas = []

        //Método mais moderno 

        function recebeEventoForm (evento) {
            
            evento.preventDefault()
            const nome = form.querySelector('nome')
            const sobrenome = form.querySelector('sobrenome')
            const peso = form.querySelector('peso')
            const altura = form.querySelector('altura')


            const form = {

                Nome: nome.value(),
                Sobrenome: sobrenome.value(),
                Peso: peso.value(),
                Altura: altura.value()           
            };

            pessoas.push(form)

            console.log(pessoas)

            resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value}` +
            `${peso.value} ${altura.value} </p >`

            /*
            Em JavaScript, innerHTML é uma propriedade que permite 
            acessar ou modificar o conteúdo HTML de um elemento.
            */


        }



        form.addEventListener("submit", recebeEventoForm);

        /*
        Em JavaScript, addEventListener é um método que permite adicionar um ouvinte de eventos a um elemento HTML. 
        Esse método é usado para especificar qual função deve ser executada quando 
        um determinado evento ocorre em um elemento, como um clique do mouse, uma rolagem da página, entre outros.
        */

        /*
        O addEventListener pode ser usado em qualquer elemento HTML, 
        incluindo botões, links, formulários, imagens e muito mais. 
        Ele aceita dois argumentos: o primeiro é o tipo de evento a ser ouvido (por exemplo, "click" ou "scroll"), 
        e o segundo é a função que será executada quando o evento ocorrer. 
        A função pode ser definida dentro do próprio argumento ou como uma função separada.
        */



}




