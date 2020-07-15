// Depois, faça uma pirâmide com n asteriscos de base.

let n = 7;
let line = '';
let simbol = '*';
let aux = (n + 1) / 2;
let esquerda = aux+1;
let direita= aux-1;

for (let i = 0; i < aux; i+=1) {
  for (let j = 1; j <= n; j+=1) {
    if (j > direita && j < esquerda) {
      line = line + simbol;
    } else {
      line = line + ' ';
    }
  }
  direita-=1;
  esquerda+=1;
  console.log(line);
  line = '';
};