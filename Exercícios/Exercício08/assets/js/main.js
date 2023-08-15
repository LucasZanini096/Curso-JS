
const h1 = document.querySelector(".container h1") //Selecionando elemento
const data = new Date();


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda-Feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-Feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-Feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-Feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-Feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;

} 
}

function getMesTexto(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    let nomeMes;
  
    for (let i = 0 ; i <= meses.length; i++) {
        if (i === numeroMes) {
            nomeMes = meses[i]
            return nomeMes
        }
}
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana); 
    const nomeMes = getMesTexto(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
        `de ${data.getFullYear()} ` +
        `${zeroAEsquerda(data.getHours())}: ${zeroAEsquerda(data.getMinutes())}`
    )
}



h1.innerHTML = criaData(data)
                               

/*
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes)
*/