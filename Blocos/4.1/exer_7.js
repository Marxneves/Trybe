// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F

let nota = 80;

switch(nota){
  case (nota>= 90):
    console.log("A");
    break;
  case (nota >= 80):
    console.log("B");
    break;
  case (nota >= 70):
    console.log("C");
    break;
  case (nota >= 60):
    console.log("D");
    break;
  case (nota >= 50):
    console.log("E");
    break;
  case (nota < 50):
    console.log("F");
    break;
  default:
    console.log("Erro, nota invalida");
}