//Desafios
//Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo() {
  console.log("Olá Mundo!");
}
exibirOlaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
  console.log(`Olá ${nome}`);
}
exibirNome("Aldeny Jr");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function retornaDobro(numero) {
  console.log(numero * 2);
}
retornaDobro(20);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function retornaMedia(n1, n2, n3) {
  return n1 + n2 + n3 / 3;
}
let media = retornaMedia(2, 15, 2);
console.log(media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaior(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
let numeroMaior = retornaMaior(22, 10);
console.log(numeroMaior);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function retornaMultiplicacao(n1) {
  return n1 * n1;
}
let multiplicacaoPorEleMesmo = retornaMultiplicacao(29);
console.log(multiplicacaoPorEleMesmo);
