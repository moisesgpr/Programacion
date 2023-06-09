'use strict'

// Localstorage

// Comprobar disponibilidad del localstorage

if (typeof(Storage) !== 'undefined') {
    console.log('disponible')
} else {
    console.log('no disponible')
}

// Guardar Datos
localStorage.setItem('titulo', 'Curso de Symfony de Victor Robles');

// Recuperar elemento
document.querySelector('#peliculas').innerHTML = (localStorage.getItem('titulo'));

// Guardar objetos
let usuario = {
    nombre: 'Victor Robles',
    email: 'victor@victor.com',
    web: 'victorroblesweb.es'
};

localStorage.setItem('usuario', JSON.stringify(usuario))

// Recuperar objeto
let userjs = JSON.parse(localStorage.getItem('usuario'))

console.log(userjs);
document.querySelector('#datos').append(userjs.web+' - '+userjs.nombre);

localStorage.clear();