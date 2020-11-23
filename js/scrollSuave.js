$(document).ready(function (){

    // mostrar y ocultar el botond e volver  arriba
    
    var btnVolverArriba = $('#btnVolverArriba');

     // lo que hicimos para el menu
    $(window).on('scroll',function () {

        var proyectosOffsetTop = $('#proyectos').offset().top;

        if($(window).scrollTop() >= proyectosOffsetTop){

            btnVolverArriba.css('margin-right', 0);

        }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {

            btnVolverArriba.css('margin-right', '-60px');
        }
    });
    // Movimiento suave de scroll de "Inicio" y "vovler arriba"

    $('a.volver-arriba').on('click' , function (e) {
        e.preventDefault();

        if ($(window).scrollTop() != 0) {

            $('html, body').stop().animate({scrollTop: 0}, 1000);
        }
    })
    // movimiento suave del scrollsuave para los demas 
    $('a.scroll-suave').on('click' , function (e) {
        e.preventDefault();

        var seccionOffsetTop = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
    });

    $('a.scroll-acercaDe').on('click' , function (e) {
        e.preventDefault();

        var seccionOffsetTop = $($(this).attr('href')).offset().top - 122;
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
    });

    $('a.scroll-equipo').on('click' , function (e) {
        e.preventDefault();

        var seccionOffsetTop = $($(this).attr('href')).offset().top -68;
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
    });
});