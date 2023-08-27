
//Esta função está dentro do objeto window 
alert("Com a nossa mensagem"); //Cria um alerta no navegador
window.alert("ALERTA!!") //retorna undefinied (não aponta para local nenhum)

window.confirm("Deseja realmente sair?") //Me permite escolher entre duas opções, 
// retornando um valor boolean de acordo com minha escolha.


window.prompt("Digite o seu nome") //Me permite escrever algo na área de alerta

let confirma = confirm("Qualquer mensagem") //Posso salvar o valor de retorno em variáveis 
let num1 = prompt("Digite outro número:") //Retorna uma STR !!
//Quando há algo digitado no prompt