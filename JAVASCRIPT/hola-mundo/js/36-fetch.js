'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest

let div_usuarios = document.querySelector('#usuarios');
let div_profesor = document.querySelector('#profesor');
let div_janet = document.querySelector('#janet');


getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data)

        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        MostrarJanet(user.data);
    })
    .catch(error => {
        alert("Error en las peticiones");
    });


function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {
    let profesor = {
        nombre: 'Moises',
        apellidos: 'Pena',
        url: 'https://moisespenaweb.com'
    };

    return new Promise((resolve, reject) => {
        let profesor_string = '';

        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if (typeof profesor_string != 'string' || profesor_string == '') return reject('error')

            return resolve(profesor_string)
        
        }, 3000);

    });

}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML = i + 1 + '. ' + user.first_name + ' ' + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';
    });
}

function MostrarJanet(user) {
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + ' ' + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';


        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector('#janet .loading').style.display = 'none';
}