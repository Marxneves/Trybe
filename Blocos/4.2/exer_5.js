//Utilizando for, descubra qual o maior valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let result2 = 0;

console.log("imprimindo com for tradicional:");
for(let i=0; i<numbers.length; i++){
  if(result < numbers[i]){
    result = numbers[i];
  }
}
console.log(result);


console.log("Imprimindo com forEach: ")
numbers.forEach(number => {
  
  if(result2 < number){
    result2 = number;
  }
})

console.log(result2);

console.log("Usando uma função que pega o maior numero:")
let maior = Math.max(...numbers)
console.log(maior);