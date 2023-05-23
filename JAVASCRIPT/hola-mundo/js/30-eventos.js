'use strict'

// Evento del raton

function cambiarColor(){
    console.log('Me has dado click');

    let bg = boton.style.background;

    if(bg == 'green') {
        boton.style.background ='red';
    } else {
        boton.style.background = 'green';
    }
    
    boton.style.padding = '10px';
    boton.style.border = '1px solid #ccc';

    return true;
}

let boton = document.querySelector('#boton');

// Click
boton.addEventListener('click', function(){
    cambiarColor();
});

// Mouse over
boton.addEventListener('mouseover', function(){
boton.style.background = '#ccc'
});

// Mouseout
boton.addEventListener('mouseout', function(){
    boton.style.background = 'black'
    });

// Focus
let input = document.querySelector('#campo_nombre');

input.addEventListener('focus', function(){
    console.log('Estas dentro del input');
});


// Blur
input.addEventListener('blur', function(){
    console.log('Estas fuera del input');
});

// Keydown
input.addEventListener('keydown', function(event){
    console.log('Pulsando esta tecla ', String.fromCharCode(event.keyCode));
});

// Keypress
input.addEventListener('keypress', function(event){
    console.log('Tecla presionado ', String.fromCharCode(event.keyCode));
});

// Keyup
input.addEventListener('keyup', function(event){
    console.log('Tecla soltada ', String.fromCharCode(event.keyCode));
});