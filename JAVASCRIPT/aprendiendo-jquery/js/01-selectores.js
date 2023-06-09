$(document).ready(function () {

    // Selector de ID
    $('#rojo').css('background', 'red')
        .css('color', 'white');

    $('#amarillo').css('background', 'yellow')
        .css('color', 'green');

    $('#verde').css('background', 'green')
        .css('color', 'white');


    // Selector de ID
    let mi_clase = $('.zebra').css('padding', '5px');

    $('.sin_borde').click(function(){
        console.log('Click dado!!');
        $(this).addClass('zebra');
    });


    // Selectores de etiqueta
    let parrafos = $('p').css('cursor', 'pointer');

    parrafos.click(function(){
        let that = $(this);

        if(!that.hasClass('grande')){
            that.addClass('grande ');
        }else{
            that.removeClass('grande ');
        }
    });

    // Selectores de atributo
    $(`[title="google"]`).css('background', '#ccc');
    $(`[title="facebook"]`).css('background', 'blue');

    // Otros
    //$('p, a').addClass('margen-superior');

    let busqueda = $('#elemento2').parent().parent().find('.resaltado');
    
    console.log(busqueda);

});