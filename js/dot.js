$(document).ready(function() { 
        
        //efecto-menu
        $(".nav a").each(function(index, el) {
            $(el).css({ opacity: 0, marginRight: -100 });
            $(el).animate({opacity: 1, marginRight: 0}, 1500 + (index*500) );
        });
       
        //efecto logo
        var tituloCiudad = $(".titulo, .ciudad, .texto-logo")
        tituloCiudad.css({opacity: 0,});
        tituloCiudad.animate({opacity: 1}, 4000);
        

        //navegar offset

        var inicio = $("#inicio").offset().top,
            works = $("#works").offset().top,
            dotTeam = $("#dot-team").offset().top,
            loQueHacemos = $("#loQueHacemos").offset().top,
            contacto = $("#contacto").offset().top;

        $("#btn-inicio").on('click', function(e) {
            e.preventDefault();
            $("html, body").animate({scrollTop: inicio }, 1000);});
    
        $("#btn-works").on('click', function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: works
            }, 1000);
        });
        $("#btn-dot-team").on('click', function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: dotTeam 
            }, 1000);
        });
        $("#btn-loQueHacemos").on('click', function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: loQueHacemos 
            }, 1000);
        });
        $("#btn-contacto").on('click', function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: contacto + 150
            }, 1000);
        });      
        
       

});
