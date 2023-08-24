//Padrão MVC -> Back Engine e Front Engine na mesma aplicação


const express = require('express');
const app = express();  
const routes = require('./routes')

app.use(express.urlencoded( //Trata o body das requisições -> sem ele o objetvo do body fica undefined 
    {
        extended:true 
    }
))

app.use(routes);


app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
})