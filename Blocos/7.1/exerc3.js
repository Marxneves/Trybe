let number = 5;

const fatorial = number => {
  let result = number;
  for (let i = 1; i < number; i += 1){ 
    result *= (number-i);
  }
  return result;
}

console.log(fatorial(number));