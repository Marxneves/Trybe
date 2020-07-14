// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let result2 = 0;

console.log("imprimindo com for tradicional:");
for(let i=0; i<numbers.length; i++){
  result +=numbers[i];
}

result = (result/numbers.length);
if(result > 20){
  console.log("valor maior que 20");
}
else{
  console.log("valor menor ou igual a 20");
}


console.log("Imprimindo com forEach: ")
numbers.forEach(number => {
  result2 += number;
})

if((result2/numbers.length) > 20){
  console.log("valor maior que 20");
}
else{
  console.log("valor menor ou igual a 20");
}