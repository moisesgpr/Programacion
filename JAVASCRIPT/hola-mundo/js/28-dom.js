'use strict'

// DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}

// Conseguir elementos con un ID concreto

// let caja = document.getElementById('miCaja');
let caja = document.querySelector('#micaja');

caja.innerHTML = "TEXTO EN LA CAJA DESDE JS!";
caja.style.background = 'red';
caja.style.padding = '20px'
caja.style.color = 'white'
caja.className = 'hola hola2';

// Conseguir elementos por su etiqueta
let todosLosDivs = document.getElementsByTagName('div');

let seccion = document.querySelector('#miseccion');
let hr = document.createElement('hr');

let valor;

for (valor in todosLosDivs){
    if (typeof todosLosDivs[valor].textContent == 'string'){
        let parrafo = document.createElement('p');
        let texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);

// Conseguir elementos por su clave css
let divsRojos = document.getElementsByClassName('rojo');
let divsAmarrillos = document.getElementsByClassName('amarillo');
divsAmarrillos[0].style.background = 'yellow';

for (let div in divsRojos){   
    if(divsRojos[div].className == 'rojo'){
        divsRojos[div].style.background = 'red'
    }
}

// Query selector
let id = document.querySelector('#encabezado');
console.log(id);

let claseRojo = document.querySelectorAll('div.rojo');
console.log(claseRojo);

let etiqueta = document.querySelectorAll('div');
console.log(etiqueta);