const express = require('express');
const app = express();  //Carregando o express

//         Criar      let      atualizar    apagar 
//CRUD ->  Create,    Read,      Update,    Delete
//          Post      Get        Put        Delete

//Operações que serão realizadas dentro de uma API, o servidor deve realiza-lás

// http://meusite.com/ <- GET -> Entregue a página -> Pede para o servidor entregar

app.get('/', (req, res) => {  //Tenho que enviar uma requisição e receber uma resposta do servidor  -> GET (entregar alguma coisa)
    res.send('<form action = "/" method = "POST"> Nome: <input type="text" name="name" <button>Enviar</button> </form>'); //Posso enviar HTML !!
});

//O servidor vai estar atrelado a uma porta do meu computador
//Uma porta é referente a um processo realizado no meu servidor -> não pode haver mais de uma aplicação dentro da mesma porta
//Por isso é usualmente utilizado portas menos comuns

app.post('/', (req, res) => {
    res.send("Recebi o formulário")
})

app.get("/contato", (req, res) => {
    res.send("Obrigado por entrar em contato com nossa empresa")
})



//Localhost -> refere-se à máquina local
//Quando eu faço alguma alteração no conteúdo do meu servidor, eu tenho que atuliza-lo para observar as mudanças.
app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
})