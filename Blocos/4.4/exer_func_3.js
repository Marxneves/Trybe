// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array =[2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor(vetor){
  
  let menorValor =vetor[0];
  let indice = 0;

  for(indices in vetor){

    if(vetor[indices] <= menorValor ){
      menorValor = vetor[indices];
      indice = indices;
    }
  }
  return indice;
}

let indice = indiceMenorValor(array);

console.log(indice);