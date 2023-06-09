'use strict'

// JSON - JavaScript Object Notation

let pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

let peliculas = [
    {titulo: 'La verdad duele', year: 2016, pais: 'Francia'}, pelicula
];


let caja_peliculas = document.querySelector('#peliculas')
for (let index in peliculas) {
    let p = document.createElement('p');
    p.append(peliculas[index].titulo + ' - ' + peliculas[index].year);
    caja_peliculas.append(p);
}