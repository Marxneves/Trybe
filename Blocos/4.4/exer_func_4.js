// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array){
  let maisCaracteres = 0;
  let name = "";
  
  for(nomes in array){
    if(array[nomes].length > maisCaracteres){
      maisCaracteres = array[nomes].length;
      name = array[nomes];
    }
  }
  return name;
}

let nome = maiorNome(nomes);

console.log(nome);