// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(stringWord,stringEnding){

  for(let i=0; i<stringEnding.length; i++){
    if(stringWord[stringWord.length-1-i] !== stringEnding[stringEnding.length-1-i]){
      return false;
    }
  }
  return true;
}

console.log(verificaFimPalavra("trybe","be"));
console.log(verificaFimPalavra("joaofernando","fernan"));