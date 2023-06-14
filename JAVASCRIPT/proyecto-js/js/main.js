$(document).ready(function(){

    // Selector de tema
    let theme = $('#theme');

    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css')
        localStorage.setItem('color', 'green')
    });

    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css')
        localStorage.setItem('color', 'red')
    });

    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css')
        localStorage.setItem('color', 'blue')
    });

    if (localStorage.getItem('color')) {
        theme.attr('href', 'css/'+localStorage.getItem('color')+'.css');
    };
    
    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false
    });

    // Login falso

    $('#login form').submit(function(){
        let form_name = $('#form_name').val();

        localStorage.setItem('form_name', form_name);
    });

    let form_name = localStorage.getItem('form_name');

    if (form_name != null && form_name != 'undefined'){
        let about_parrafo = $('#about p');

        about_parrafo.html('<br><strong>Bienvenido, '+form_name+'</strong>');
        about_parrafo.append('<a href="#" id="logout">Cerrar sesion</a>')

        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    };

});