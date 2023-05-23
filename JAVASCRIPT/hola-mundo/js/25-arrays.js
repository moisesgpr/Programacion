'Use strict'

// Arrays, Arreglos, Matrices

let nombre = 'Victor Robles';
let nombres = ['Victor Robles', 'Juan lopez', 'Manolo Garcia', 'Jose Martin', 52, true];

let lenguajes = new Array('PHP', 'JS', 'Go', 'Java', 'C#', 'C', 'Pascal');

/*
let elemento = parseInt(prompt('Que elemento del array quieres??', 0));
if(elemento >= nombres.length){
    alert('Introduce el numero correcto menor que ' + nombres.length);
} else {
    alert('El usuario seleccionado es: ' + nombres[elemento])
}
*/

document.write('<h1>Lenguajes de programacion del 2018</h1>');
document.write('<ul>');

/*
for(let i = 0; i < lenguajes.length; i++){
    document.write('<li>'+lenguajes[i]+'</li>');
}

lenguajes.forEach((elemento, indice) => {
        document.write('<li>'+indice+' - '+elemento+'</li>');
});
*/

for(let lenguaje in lenguajes){
    document.write('<li>'+lenguajes[lenguaje]+'</li>');
}

document.write('<ul>');

// Busquedas
let precios = [10, 20, 50, 80, 12];

// let busqueda = lenaguejes
let busqueda = precios.some(precio => precio < 20);

console.log(busqueda);