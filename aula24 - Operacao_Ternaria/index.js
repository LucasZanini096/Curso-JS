// Operação Ternaria

// Operador ?:
//Permite fazer um if em apenas uma linha de código
//{condição} ? "Valor para verdadeiro" : "Valor para falso"



const pontuacaoUsuario = 99;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário Normal";
console.log(nivelUsuario)

if (pontuacaoUsuario >= 1000) {
    console.log("Usuário VIP");
} else {
    console.log("Usuário Normal")
}

