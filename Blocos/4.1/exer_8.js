// Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.

let a = 3;
let b = 1;
let c = 7;

let par = false;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  par = true;
}
console.log(par);