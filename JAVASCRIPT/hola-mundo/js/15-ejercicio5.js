'use strict'

/*
Mostrar todos los numeros divisores de un numero introducido en un prompt
*/

var numero1 = parseInt(prompt('Introduce el primer numero'));

while (isNaN(numero1)) {
    numero1 = parseInt(prompt('Introduce el primer numero'));
}

for (let i = 0; i <= numero1 ; i++) {
    if (numero1 % i == 0) {
        document.write('El numero '+i+' es un divisor del numero '+numero1+'<br/>')
    }
}