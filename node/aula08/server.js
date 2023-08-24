const express = require('express');
const app = express();  


app.use(express.urlencoded( //Trata o body das requisições -> sem ele o objetvo do body fica undefined 
    {
        extended:true 
    }
))

// http://facebook.com/profiles/12345?campanha=googlelead&nome_campanha=seila


//? -> começa as querrystrings/querryparents (par de chave e valor)
//12345 -> id
//campanha=googlelead&nome_campanha=seila -> Parâmetros da URL

app.get('/', (req, res) => {  
    res.send('<form action = "/" method = "POST"> Nome do cliente: <input type="text" name="name"> <button>Olá mundo</button> </form>'); //Posso enviar HTML !!
});

// ? -> coloca o parâmetro como opcional -> pode ou não ser recebido
// /: -> adiciona um novo parâmetro a URL
app.get('/testes/:idUsuarios?/:novo_parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query)
    //http://localhost:3000/testes/?nome=Lucas&sobrenome=Zanini&idade=19 ->
    //req.query retorna ->
    //{ nome: 'Lucas', sobrenome: 'Zanini', idade: '19' }
    res.send(req.params) //retorna um objeto JSON
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.name}`) //O mesmo name do input
})


//Localhost -> refere-se à máquina local
//Quando eu faço alguma alteração no conteúdo do meu servidor, eu tenho que atuliza-lo para observar as mudanças.
app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
})