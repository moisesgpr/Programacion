'use strict'

// BOM - Browser Object Model
function getBom() {
console.log(screen.height);
console.log(screen.width);
console.log(window.location);
}

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url);
}

getBom();