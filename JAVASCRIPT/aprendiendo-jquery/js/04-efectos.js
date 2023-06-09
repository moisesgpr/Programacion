$(document).ready(function () {
    let caja = $('#caja')
    $('#mostrar').hide();

    $('#mostrar').click(function () {
        $(this).hide();
        $('#ocultar').show();

        caja.fadeTo('slow', 1);
    });

    $('#ocultar').click(function () {
        $(this).hide();
        $('#mostrar').show();

        caja.fadeTo('slow', 0);
    });

    $('#todoenuno').click(function () {
        if ($(this).text().trim() == 'Ocultar') {
            $(this).text('Mostrar')
        } else {
            $(this).text('Ocultar')
        }
        caja.slideToggle('fast', function(){
            console.log('Animacion finalizada.')
        });
    });

    $('#animar').click(function () {
        caja.animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow', function(){
                console.log('animacion finalizada')
            })
    });

});