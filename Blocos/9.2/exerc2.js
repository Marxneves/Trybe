new Promise((resolve, reject) => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push(Math.random() * 50);
  }
  let sum = array.reduce((acc, curr) => acc + (curr ** 2), 0);
  sum = Math.round(sum);
  console.log(sum);
  if (sum < 8000) {
    // const string = `Dividido por 2 = ${Math.round(sum / 2)} Dividido por 3 = ${sum /
    //  3} Dividido por 5 = ${sum / 5} Dividido por 10 = ${sum / 10}`;
    const array2 = [2, 3, 5, 10].map(valor => sum / valor);
    resolve(array2);
  } else {
    reject(new Error('Erro do teste'));
  }
}).then(arrayDividido => arrayDividido.map(value => Math.round(value)))
  .then(console.log)
  .catch(console.log);
