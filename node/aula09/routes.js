//A função desse arquivo é apenas chamar o controlador, realizando o roteamento no padrão MVC

const express = require("express");
const route = express.Router();  //Vai tratar as rotas
const homeControler = require('./controllers/homeController.')
const contatoController = require('./controllers/contatoController')


//Rotas da home
route.get("/", homeControler.paginaInicial);
route.post('/', homeControler.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;
