alert("Boas vindas ao jogo do Número Secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroChute;
let tentativas = 1;

while (numeroChute != numeroSecreto) {
  numeroChute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

  if (numeroChute == numeroSecreto) {
    break;
  } else {
    if (numeroChute > numeroSecreto) {
      alert(`O número secreto é menor que ${numeroChute}`);
    } else {
      alert(`O número secreto é maior que ${numeroChute}`);
    }
  }
  tentativas++;
}

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso ai!, Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativas}`
);
// if (tentativas > 1) {
//   alert(
//     `Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`
//   );
// }
// alert(
//   `Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`
// );
