const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const resultadoPar = numbers.filter(number => number % 2 === 0).reduce((acumulador, proximo) => acumulador + proximo)

console.log(resultadoPar);

const resultadoReduce = numbers.reduce((total, next) => (next % 2 === 0) ? total + next : total , 0)

console.log(resultadoReduce);