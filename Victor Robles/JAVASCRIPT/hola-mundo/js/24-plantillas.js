'use strict'

// Plantillas de texto

let nombre = prompt('METE TU NOMBRE');
let apellido = prompt('METE TU APELLIDO');

let texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;

document.write(texto);