//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0
let result2 = 0;

console.log("imprimindo com for tradicional:");
for(let i=0; i<numbers.length; i++){
  result +=numbers[i];
}
console.log(result);

console.log("Imprimindo com forEach: ")
numbers.forEach(number => {
  result2 += number;
})
console.log(result2);
