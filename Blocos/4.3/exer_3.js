// Agora inverta o lado do triângulo do exerc2.

let n = 5;
let aux = n;
let simbol="*";
let line = "";

for(let i = 0; i < n; i+=1){
  for(let j=0; j<n; j+=1){
    if(j<aux-1){
      line += " ";
    }
    else{
      line += simbol;
      if(j==(n-1)){
        aux-=1;
        
      }
    }
  }
  console.log(line);
  line = "";  
}