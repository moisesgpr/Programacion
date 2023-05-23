'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt('Introduce el primer numero'));
var numero2 = parseInt(prompt('Introduce el segundo numero'));

while (isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer numero'));
    numero2 = parseInt(prompt('Introduce el segundo numero'));
}

var mayor = 0, menor = 0

if (numero1 > numero2) {
    mayor = numero1
    menor = numero2
} else {
    mayor = numero2
    menor = numero1
}

for (let i = menor; mayor >= i; i++) {
    if (i % 2 == 1) {
        document.write('El '+i+' es impar.<br/>')
    }
}