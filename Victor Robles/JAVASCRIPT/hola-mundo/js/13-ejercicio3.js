'use strict'

/*
Hacer un programa que muestre entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt('Introduce el primer numero'));

var numero2 = parseInt(prompt('Introduce el segundo numero'));

while (isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer numero'));
    numero2 = parseInt(prompt('Introduce el segundo numero'));
}
var mayor = 0
var menor = 0

if (numero1 > numero2) {
    mayor = numero1
    menor = numero2
    document.write('<h1>De ' + menor + ' a ' + mayor + ' estan estos numeros:</h1>')
    while (mayor >= menor) {
        document.write(menor + '<br/>')
        menor++
    }
} else if (numero2 > numero1) {
    mayor = numero2
    menor = numero1
    document.write('<h1>De ' + menor + ' a ' + mayor + ' estan estos numeros:</h1>')
    while (mayor >= menor) {
        document.write(menor + '<br/>')
        menor++
    }
} else if (numero1 == numero2) {
    document.write('Los numeros son iguales, ambos numeros son el numero: ' + numero1);
}