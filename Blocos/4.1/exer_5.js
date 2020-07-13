//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let ladoA = 60;
let ladoB = 60;
let ladoC = 70;

if(ladoA + ladoB + ladoC === 180){
  console.log(true);
}
else{
  console.log(false);
  console.log("A soma dos angulos do triangulo não possue 180 graus");
}