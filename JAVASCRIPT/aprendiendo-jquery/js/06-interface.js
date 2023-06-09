$(document).ready(function(){

    // Mover elemento por la pagina
    $('.elemento').draggable();

    // Redimensionar
    $('.elemento').resizable();

    // Seleccionar y ordenar elementos
    //$('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update: function(event, ui){
            console.log(event, ui)
        }
    });

    // Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log('Has soltado algo dentro');
        }
    });

    // Efectos
    $('#mostrar').click(function(){
        $('.caja-efectos').toggle('shake', 4000);
    });

    // Tooltip
    $(document).tooltip();

    // Dialog
    $('#lanzar-popup').click(function(){
        $('#popup').dialog();
    });

    // Datepicker
    $('#calendario').datepicker();

    // Tabs
    $('#pestañas').tabs();
});