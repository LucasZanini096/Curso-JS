const data = new Date("1987-04-21 00:00:00");
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) { //Sempre busca o break !!
    //Independetemente se o caso for verdadeiro ou não
    case 0:
        diaSemanaTexto = "Domingo";
        break;

    case 1:
        diaSemanaTexto = "Segunda";
        break;

    case 2:
    diaSemanaTexto = "Terça";
    break;

    case 3:
    diaSemanaTexto = "Quarta";
    break;

    case 4:
    diaSemanaTexto = "Quinta";
    break;

    case 5:
    diaSemanaTexto = "Sexta";
    break;

    case 6:
    diaSemanaTexto = "Sábado";
    break;

    default:
        diaSemanaTexto = " ";
        

}


/*
    if (diaSemana === 0) {
        diaSemana = "Domigo";
    } else if (diaSemana === 1) {
        diaSemana = "Segunda" ;
    }
    else if (diaSemana === 2) {
        diaSemana = "Terça" ;
    }
    else if (diaSemana === 3) {
        diaSemana = "Quarta" ; 
    }
    else if (diaSemana === 4) {
        diaSemana = "Quinta" ;
    }
    else if (diaSemana === 5) {
        diaSemana = "Sexta" ;
    }
    else if (diaSemana === 6) {
        diaSemana = "Sábado" ;
    } else {
        diaSemana = " "
    }
*/