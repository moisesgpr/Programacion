'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Motrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (se valorara el uso de funciones)
*/

function mostrarArray(arr, texto = ''){
    document.write('<h1>Contenido del array '+texto+'</h1>');
    arr.forEach((numero) => {
        document.write('<strong>'+numero+'</strong></br>')
    });
}

// 1. Pedir 6 numeros
let numeros = []

while (numeros.length != 6) {
    numeros.push(parseInt(prompt('Introduce un numero', 0)))
}

// 2a. Mostrar array en el cuerpo de la pagina
mostrarArray(numeros)

// 2b. Mostrar array en la consola
console.log(numeros);

// 3. Ordenar y mostrar
let numerosOrdenados = numeros.sort((a,b ) => a - b)
mostrarArray(numeros, 'ordenado')

// 4. Invertir y mostrar
mostrarArray(numerosOrdenados.reverse(), 'revertido');

// 5. Contar elementos
document.write('<h1>El array tiene: '+numeros.length+' elementos');

// 6. Busqueda e Indice
let busqueda = parseInt(prompt('Busca un numero', 0))

if (numeros.indexOf(busqueda) > -1) {
    document.write('<h1>Se encontro el valor de '+busqueda+' en el array y su indice es el numero: '+numeros.indexOf(busqueda)+'</h1>')
} else {
    document.write('<h1>El elemento no existe</h1>')
}