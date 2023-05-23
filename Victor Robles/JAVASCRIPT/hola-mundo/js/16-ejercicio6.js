'use strict'

/*
Que nos diga si un numero es par o impar.
1. Ventana prompt.
2. Si no es valido que nos pida de nuevo el numero.
*/

var numero1 = parseInt(prompt('Introduce el primer numero'));

while (isNaN(numero1)) {
    numero1 = parseInt(prompt('Introduce el primer numero'));
}

if (numero1 % 2 == 0) {
    document.write('El numero '+numero1+' es un numero par.')
} else {
    document.write('El numero '+numero1+' es un numero impar.')
}