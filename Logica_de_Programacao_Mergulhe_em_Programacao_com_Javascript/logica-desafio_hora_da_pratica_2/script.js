let diaDaSemana = prompt("Qual o dia da semana?");

if (diaDaSemana == "Sabado" || diaDaSemana == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

let numeroDigitado = prompt("Informe um numero");

if (numeroDigitado >= 0) {
  alert("O numero informado é Positivo!");
} else {
  alert("o numero informado é Negativo!");
}

let pontuacao = prompt("Informe sua pontuação");
if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar!");
}

let saldoConta = 100.0;
alert(`O saldo da sua conta é: R$${saldoConta},00s Reais.`);

let seuNome = prompt("Inform seu Nome: ");
alert(`Seja bem-vindo ${seuNome}`);
