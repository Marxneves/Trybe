// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let n = 5;

function somaNumerosAnteriores(numero){
  let soma = 0;
  for(let i=1; i<=numero; i++){
    soma +=i;
  }
  return soma;
}

console.log(somaNumerosAnteriores(n));