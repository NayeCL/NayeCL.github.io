
function ocultarImagen (){
    document.getElementById("texto-boxdesencriptar").style.display="none";
}

function mostrarImagen(){
    document.getElementById("texto-boxdesencriptar").style.display="block";
}

function borrartextoencriptar(){
    document.getElementById("texto-encriptar").value="";
    
}

function borrartextodesencriptar(){
    document.getElementById("texto-desencriptar").value="";
    mostrarImagen();
}

function encriptar(){
    
    var textoencriptar= document.getElementById("texto-encriptar").value;

    
var textoEncriptado = textoencriptar.replace (/e/img, "enter");
var textoEncriptado = textoEncriptado.replace (/i/img, "imes");
var textoEncriptado = textoEncriptado.replace (/a/img, "ai");
var textoEncriptado = textoEncriptado.replace (/o/img, "ober");
var textoEncriptado = textoEncriptado.replace (/u/img, "ufat");


    if (textoencriptar != 0){
        ocultarImagen();
        document.getElementById("texto-desencriptar").value=textoEncriptado;
        borrartextoencriptar();
        
    }

    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un texto para Encriptar!',
            
          })
    }
   
}


function desencriptar(){
    
    var textodesencriptar= document.getElementById("texto-desencriptar").value;

    
var textoDesencriptado = textodesencriptar.replace (/enter/img, "e");
var textoDesencriptado = textoDesencriptado.replace (/imes/img, "i");
var textoDesencriptado = textoDesencriptado.replace (/ai/img, "a");
var textoDesencriptado = textoDesencriptado.replace (/ober/img, "o");
var textoDesencriptado = textoDesencriptado.replace (/ufat/img, "u");


    if (textodesencriptar != 0){
        
        document.getElementById("texto-encriptar").value = textoDesencriptado;
        borrartextodesencriptar();       
        
    }

    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un texto para Desencriptar!',
            
          })
        
    }
   
}


function copiar(){
       
    var boxEncriptar= document.getElementById("texto-encriptar");
    var boxDesencriptar= document.getElementById("texto-desencriptar");

    if ( boxDesencriptar != 0){
        boxDesencriptar.select();
        document.execCommand("copy");

        } 

    if (boxEncriptar != 0){
            boxEncriptar.select();
            document.execCommand("copy");
    }

    

    Swal.fire({
        icon: 'success',
        title: 'Excelente',
        text: '¡Texto Copiado!',
        
      })

}


function limpiar(){
    borrartextoencriptar();
    borrartextodesencriptar()

}

var boxDesencriptar= document.getElementById("texto-desencriptar");
    boxDesencriptar.onclick= ocultarImagen;

var botonencriptar= document.querySelector("#boton-encriptar");
botonencriptar.onclick= encriptar;

var botondesencriptar= document.querySelector("#boton-desencriptar");
botondesencriptar.onclick= desencriptar;

var botoncopiar= document.querySelector("#boton-copiar");
botoncopiar.onclick= copiar;

var botonlimpiar= document.querySelector("#boton-limpiar");
botonlimpiar.onclick= limpiar;
