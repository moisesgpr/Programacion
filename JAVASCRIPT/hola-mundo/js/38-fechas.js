let fecha = new Date();

let year = fecha.getFullYear()
let mes = fecha.getMonth();
let dia = fecha.getDate();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();

let textoHora = `
    El año es: ${year}
    El mes es: ${mes+1}
    El dia es: ${dia}
    La hora es: ${hora}:${minutos}
    `;

console.log(textoHora);