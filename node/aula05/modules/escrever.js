const fs = require('fs').promises;


module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'});
};

//const caminhoArquivo = path.resolve(__dirname, 'teste.txt');

 //Transforma um objeto em Json


//fs.writeFile(caminhoArquivo, 'Frase 1', {flag: 'w', encoding: 'utf8'});

 
//writeFile -> escreve em arquivos
//Flag apaga tudo que estiver no arquivo caso já tenha sido criado
// flag: a -> realiza um append -> não realiza quebra de linha automaticamente
