$(document).ready(function(){


    realoadLinks();

    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
        $('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');
        
        $('#add_link').val('');
        realoadLinks();
    });

});

function realoadLinks(){
    $('a').each(function(index){
        let that = $(this);
        let enlace = that.attr('href');
        
        that.attr('target','_blank');
        
        that.text(enlace);
    });
}