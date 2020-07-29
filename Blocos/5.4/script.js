window.onload = function(){
  
  const corFundo = document.getElementById('background');
  const btnBg = document.getElementById('btnBg');
  btnBg.addEventListener('click', function(){
    document.body.style.backgroundColor = `${corFundo.value}`;
    let cor = corFundo.value;
    localStorage.setItem('bgColor',cor);
  });
  if(localStorage.bgColor != undefined){
    document.body.style.backgroundColor = localStorage.bgColor;
  }

  const corTexto = document.getElementById('colorText');
  const textColor = document.querySelector('.textColor');
  if(localStorage.color != undefined){
    textColor.style.color = localStorage.color;
  }
  corTexto.addEventListener('input', function(){
   textColor.style.color = `${corTexto.value}`;
   localStorage.color = corTexto.value;
  });

  const fontSize = document.getElementById('fontSize');
  // const btnFs = document.getElementById('btnFs');
  if(localStorage.font != undefined){
    textColor.style.fontSize = localStorage.font;
  }
  fontSize.addEventListener('input', function(){
   textColor.style.fontSize = `${fontSize.value}px`;

   localStorage.font = `${fontSize.value}px`;
  });

  const lineHeight = document.getElementById('lineHeight');
  // const btnLh = document.getElementById('btnLh');
  if(localStorage.font != undefined){
    textColor.style.lineHeight = localStorage.line;
  }
  lineHeight.addEventListener('input', function(){
   textColor.style.lineHeight = `${lineHeight.value}px`;
   localStorage.line = `${lineHeight.value}px`;
  });

  const fontFamily = document.getElementById('fontFamily');
  const btnFf = document.getElementById('btnFf');
  if(localStorage.tipoFonte != undefined){
    textColor.style.fontFamily = localStorage.tipoFonte;
  }
  btnFf.addEventListener('click', function(){
    console.log(fontFamily.value);
   textColor.style.fontFamily = fontFamily.value;
   localStorage.tipoFonte = fontFamily.value;
  });
}