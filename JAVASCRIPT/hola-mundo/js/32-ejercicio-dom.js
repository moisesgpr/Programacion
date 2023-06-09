'use strict'

window.addEventListener('load', function(){
    
    let formulario = document.querySelector('#formulario');
    let box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';

    formulario.addEventListener('submit', function(){
        let nombre = document.querySelector('#nombre').value;
        let apellidos = document.querySelector('#apellidos').value;
        let edad = parseInt(document.querySelector('#edad').value);

        if(nombre.trim() == null || nombre.trim().length == 0) {
            alert('El nombre no es valido');
            return false
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0) {
            alert('Los apellidos no son validos');
            return false
        }

        if(edad == null || edad <= 0 || isNaN(edad)) {
            alert('La edad no es valida');
            return false
        }

        box_dashed.style.display = 'block';

        let p_nombre = document.querySelector('#p_nombre span');
        let p_apellidos = document.querySelector('#p_apellidos span');
        let p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
    });
});