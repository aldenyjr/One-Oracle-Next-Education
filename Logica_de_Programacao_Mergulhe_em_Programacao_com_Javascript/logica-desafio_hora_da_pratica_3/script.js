/* Desafios
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador. */

let contador = 1;
while (contador <= 10) {
  console.log("Contador 1: " + contador);
  contador++;
}

let contador2 = 10;
while (contador2 >= 0) {
  console.log("Contador 2: " + contador2);
  contador2--;
}

let numeroInformado = parseInt(prompt("Informe um número: "));
while (numeroInformado >= 0) {
  console.log("Contagem regressiva: " + numeroInformado);
  numeroInformado--;
}

let numeroInformado2 = parseInt(prompt("Informe um número: "));
let contador3 = 0;
while (contador3 <= numeroInformado2) {
  console.log("Contagem progressiva: " + contador3);
  contador3++;
}
