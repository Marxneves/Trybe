// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("imprimindo com for tradicional");
for(let i=0; i<numbers.length; i++){
  console.log(numbers[i]);
}

console.log("Imprimindo com forEach: ")
numbers.forEach(element => {
  console.log(element);
})