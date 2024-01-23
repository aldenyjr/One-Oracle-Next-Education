// Desafios
//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoImc(altura, peso) {
  return peso / (altura * altura);
}
let imc = calculoImc(1.65, 78);
console.log(imc);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculoFatorial(num) {
  let resultado = num;
  if (num === 0 || num === 1) {
    return 1;
  }

  while (num > 1) {
    num--;
    resultado *= num;
  }

  return resultado;
}
console.log(calculoFatorial(5));

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let cotacaoDolar = 4.8;
function converterDolarEmReal(cotacaoDolar, valorReal) {
  return valorReal * cotacaoDolar;
}
console.log(
  "R$ " + converterDolarEmReal(cotacaoDolar, 22.0).toFixed(2).replace(".", ",")
);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaEPerimetro(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  return `Area da Sala: ${area} metros quadrados
Perímetro da Sala: ${perimetro} metros
  `;
}
console.log(calcularAreaEPerimetro(5, 3));

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let raio = 4;
function calcularAreaEPerimetroCinculo(raio) {
  let area = Math.PI * Math.pow(raio, 2);
  let perimetro = 2 * Math.PI * raio;

  return `A sala possui em area: ${area.toFixed(
    2
  )} metros quadrados, e em perímetro ${perimetro.toFixed(2)} metros`;
}
console.log(calcularAreaEPerimetroCinculo(raio));

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let controle = 1;
function calculoTabuada(num) {
  while (controle <= 10) {
    let tabuada = num * controle;
    console.log(`A Tabuada de ${num} x ${controle} = ${tabuada}`);
    controle++;
  }
}
calculoTabuada(25);
