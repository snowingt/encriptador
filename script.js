//llamamos al boton y al input
const btnCod = document.querySelector('.btn--cod');
const btnDec = document.querySelector('.btn--dec');
const tex = document.querySelector('#code--text');
const spanCod= document.querySelector('.span--cod');
const toogleImg = document.querySelector('.imagge')
const btnCoppy = document.getElementById('coppy')
let cod 
let dec


// funciones y los escuchas

//funcion para codificar
function encode(str) {
   return  str.replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }
  btnCod.addEventListener('click', function(){
    

   cod= encode(tex.value)
   cod ==''? toogleImg.style.display='block': toogleImg.style.display='none'
 
   spanCod.innerHTML= cod
  }
  //funcion para decodificar
    );
    function decode(str) {
        return str.replace(/enter/g, "e")
          .replace(/imes/g, "i")
          .replace(/ai/g, "a")
          .replace(/ober/g, "o")
          .replace(/ufat/g, "u");
      }
        btnDec.addEventListener('click', function(){
         dec=   decode(tex.value)
            spanCod.innerHTML= decode(tex.value)  
            dec ==''? toogleImg.style.display='block': toogleImg.style.display='none'
        }
            );





           
    