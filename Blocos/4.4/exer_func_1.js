// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(string){

  for(let posicao=0; posicao < string.length; posicao += 1){
    if(string[posicao] !== string[string.length - posicao - 1]){
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));
