// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let result2 = 0;

console.log("imprimindo com for tradicional:");
for(let i=0; i<numbers.length; i++){
  if(numbers[i] % 2 == 1){
    result++;
  }
}
if(result > 0)
  console.log(result);
else
  console.log("nenhum valor ímpar encontrado");


console.log("Imprimindo com forEach: ")
numbers.forEach(number => {
  
  if(number % 2 == 1){
    result2 += 1;
  }
})

if(result2 > 0)
  console.log(result2);
else
  console.log("nenhum valor ímpar encontrado");

