const Cachorro = require('./mod')

const cachorrinho = new Cachorro("Dog")
cachorrinho.latir();



const path = require('path');
console.log(__filename) //Caminho do arquivo com o nome do arquivo 
console.log(__dirname) //Caminho do arquivo sem o nome do arquivo 
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens')) //Incrementa arquivos no caminho do dirname


const Cachorro = require('./z/mod2');

const c1 = new Cachorro('Dog');
c1.latir();
