// Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.

let a = 2;
let b = 4;
let c = 5;

let impar = false;

if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
  impar = true;
}
console.log(impar);