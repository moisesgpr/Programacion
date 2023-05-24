'use strict'

window.addEventListener('load', function(){

    function intervalo(){
        let tiempo = setInterval(function(){
            
            console.log('Set interval ejecutado');
            
            let encabezado = document.querySelector('h1');
            if(encabezado.style.fontSize == '50px') {
                encabezado.style.fontSize = '30px';
            } else {
                encabezado.style.fontSize = '50px';
            }
        }, 1000);

        return tiempo;
    }

    let tiempo = intervalo();

    let stop = document.querySelector('#stop');

    stop.addEventListener('click', function(){
        alert('Has parado el intervalo en bucle');
        clearInterval(tiempo);
    });

    let start = document.querySelector('#start');

    start.addEventListener('click', function(){
        alert('Has iniciado el intervalo en bucle');
        intervalo();
    });
});