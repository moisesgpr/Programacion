'use strict'

/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1 = parseInt(prompt('Introduce el primer numero'));
var numero2 = parseInt(prompt('Introduce el segundo numero'));

while (isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer numero'));
    numero2 = parseInt(prompt('Introduce el segundo numero'));
}

let resultado = 'La suma es: '+(numero1+numero2)+' <br/>'+
                'La resta es: '+(numero1-numero2)+' <br/>'+
                'La multiplicacion es: '+(numero1*numero2)+' <br/>'+
                'La division es: '+(numero1/numero2)+' <br/>';

let resultadoCMD =  'La suma es: '+(numero1+numero2)+' \n'+
                    'La resta es: '+(numero1-numero2)+' \n'+
                    'La multiplicacion es: '+(numero1*numero2)+' \n'+
                    'La division es: '+(numero1/numero2)+' \n';


document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);