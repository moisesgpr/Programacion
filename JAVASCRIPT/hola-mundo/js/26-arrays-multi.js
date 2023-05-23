'use strict'

let categorias = ['Accion', 'Terror', 'Comedia'];
let peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

peliculas.sort();

console.log(peliculas);

peliculas.reverse();

console.log(peliculas);

let cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

/*
let elemento = '';

do(
    elemento = prompt('Introduce tu pelicula:');
    peliculas.push(elemento);
) while (elemento != 'ACABAR');
*/

let indice = peliculas.indexOf('Gran torino');

if (indice > -1) {
    peliculas.splice(indice, 1);
}

let peliculas_string = peliculas.join();

let cadena = 'texto1, texto2, texto3';
let cadena_array = cadena.split(', ');

console.log(cadena_array);