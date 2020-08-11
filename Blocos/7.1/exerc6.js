let skills = ['HTML', 'CSS', 'JS', 'NODE.JS', 'REACT.JS'];

const substituirString = (string) => {
  let frase = `Tryber x aqui!`;
  frase = frase.split(' ');
  for(let i in frase) {
    if (frase[i] === 'x') {
      frase[i] = string;
    }
  }
  frase = frase.join().replace(/,/g, ' ');
  return frase;
}

let string = substituirString('Marx');

const concatenaStringESkill = (string,array) => {
  let skills = array.sort();

  console.log(
`${string}

Minhas cinco principais habilidades são:
  - ${skills[0]}
  - ${skills[1]}
  - ${skills[2]}
  - ${skills[3]}
  - ${skills[4]}`)
}

concatenaStringESkill(string, skills);