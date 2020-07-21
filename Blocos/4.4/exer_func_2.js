// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array =[2, 3, 6, 7, 10, 1];

function indiceMaiorValor(vetor){
  
  let maiorValor =vetor[0];
  let indice = 0;

  for(indices in vetor){

    if(vetor[indices] >= maiorValor ){
      maiorValor = vetor[indices];
      indice = indices;
    }
  }
  return indice;
}

let indice = indiceMaiorValor(array);

console.log(indice);