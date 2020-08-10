const longestWord = (string) => {
  let palavras = string.split(' ');
  let maiorPalavra = '';

  for (let indice of palavras) {
    if (indice.length > maiorPalavra.length) {
      maiorPalavra = indice;
    }
  }
  return maiorPalavra;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) //retorna 'aconteceu'