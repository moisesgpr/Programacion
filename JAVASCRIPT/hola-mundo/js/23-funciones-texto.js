'use strict'

// Transformacion de textos
let numero = 444;
let texto1 = 'Bienvenido al curso de JavaScript de Victor Robles';
let texto2 = 'es muy buen curso';

let dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

// console.log(dato);

// Calcular longitud
let nombre = 'Victor robles';

// console.log(nombre.length);

// Concatenar - Unir textos

//let textoTotal = texto1+ ' ' +texto2;
let textoTotal = texto1.concat(' '+texto2);

console.log(textoTotal);