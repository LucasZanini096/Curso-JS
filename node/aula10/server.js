//Padrão MVC -> Back Engine e Front Engine na mesma aplicação


const express = require('express');
const app = express();  
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded( //Trata o body das requisições -> sem ele o objetvo do body fica undefined 
    {
        extended:true 
    }
))

app.set('views', path.resolve(__dirname, 'src', 'views'));
//app.set('views', './src/views') -> modelo relativo
app.set('view engine', 'ejs') //ejs -> view engine

app.use(routes);


app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
})