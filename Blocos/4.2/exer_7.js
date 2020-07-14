// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = numbers[0];
let result2 = numbers[0];

console.log("imprimindo com for tradicional:");
for(let i=0; i<numbers.length; i++){
  if(result > numbers[i]){
    result = numbers[i];
  }
}
console.log(result);


console.log("Imprimindo com forEach: ")
numbers.forEach(number => {
  
  if(result2 > number){
    result2 = number;
  }
})

console.log(result2);


let result3 = numbers[0];

console.log("Imprimindo com forOf: ")
for (const number of numbers) {
  if(result3 > number){
    result3 = number;
  }
}

console.log(result3);