const numbers = [32, 15, 3, 2, -5, 56, 10];

const maiorNumero = numbers.reduce((maior, proximo) => (proximo > maior) ? proximo : maior)

console.log(maiorNumero);