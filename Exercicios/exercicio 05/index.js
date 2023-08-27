//0123456789
//Lucas Zanini da Silva
const nome = window.prompt("Digite seu nome completo:")
document.body.innerHTML += `Seu nome é ${nome} <br />`
document.body.innerHTML += `Seu nome tem ${nome.length} <br / >`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.slice(1,2)} <br/ >`
document.body.innerHTML += `Qual o primeiro índice da LETRA em seu nome? ${nome.search("L")} <br/ >`;
document.body.innerHTML += `As últimas 3 letras o seu nome são: ${nome.slice(-3)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")} <br/ >`;
document.body.innerHTML += `Seu nome com letras maiúsculas são: ${nome.toUpperCase()} <br/ >`;
document.body.innerHTML += `Seu nome com letras minúsculas são: ${nome.toLowerCase()} <br/ >`;
