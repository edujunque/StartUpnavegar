$(document).ready(function () {
    var w = $(window).width();

    //$('html, body').animate({ scrollTop: 0 }, 50);

    //acao de click no menu
    $(".ancora__nuvem").on('click', function (event) {
        event.preventDefault();
        $(".meio__ferramentas").scrollView();        
    });   


    //anima elemento estar visivel na tela
    if (w > 991) {
        $('.meio__ferramentas').onScreen({
           container: window,
           direction: 'vertical',
           doIn: function() {
             // Do something to the matched elements as they come in
             $(this).addClass("animated slideInUp");     
           },
           doOut: function() {
             // Do something to the matched elements as they get off scren
           },
           tolerance: 0,
           throttle: 50,
           toggleClass: 'onScreen',
        });

        $('.meio__conjunto').onScreen({
           container: window,
           direction: 'vertical',
           doIn: function() {
             // Do something to the matched elements as they come in
             $(this).addClass("animated slideInUp");     

            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(".conjunto__nome").addClass('animated pulse');
            });             
           },
           doOut: function() {
             // Do something to the matched elements as they get off scren
           },
           tolerance: 50,
           throttle: 50,
           toggleClass: 'onScreen',
        });

        $('.meio__parceira').onScreen({
           container: window,
           direction: 'vertical',
           doIn: function() {
             // Do something to the matched elements as they come in
             $(".meio__parceira .media").addClass("animated slideInLeft");         
             $(".meio__parceira .parceria__curtiu-conhece").addClass("animated slideInUp");
             $(".meio__parceira .img-devices").addClass("animated slideInRight");
           },
           doOut: function() {
             // Do something to the matched elements as they get off scren
           },
           tolerance: 0,
           throttle: 50,
           toggleClass: 'onScreen',
        }); 

        $('.parceria__instituto-premio').onScreen({
           container: window,
           direction: 'vertical',
           doIn: function() {
             // Do something to the matched elements as they come in
             $(".parceria__instituto-premio img").addClass("animated pulse");         
           },
           doOut: function() {
             // Do something to the matched elements as they get off scren
           },
           tolerance: 0,
           throttle: 50,
           toggleClass: 'onScreen',
        }); 
    }  
    
    //init bx slider slider    
    if (w < 991) {
        $('.conjunto__meninas').bxSlider({
            //auto: true,
            //infiniteLoop: false,
            adaptiveHeight: true,
            pager: false
        });
    }

    //conjunto__meninas - ao clicar na seta subir ao texto
    if (w < 767) {
      $(".bx-next").on('click', function (event) {
          //event.preventDefault();
          $("#conjunto__scroll").scrollView();        
      });    
    }    

    //troca elemento de lugar quando celular
    if (w < 767) { 
        //leticia 
        elemento1L = $('#original-l');
        elemento2L = $('#movido-l');

        lElemento1 = elemento1L.clone();
        lElemento2 = elemento2L.clone();

        elemento1L.replaceWith(lElemento2);
        elemento2L.replaceWith(lElemento1);

        //talicia
        elemento1T = $('#original-t');
        elemento2T = $('#movido-t');

        tElemento1 = elemento1T.clone();
        tElemento2 = elemento2T.clone();

        elemento1T.replaceWith(tElemento2);
        elemento2T.replaceWith(tElemento1); 

        //paula bellizia
        elemento1P = $('#original-p');
        elemento2P = $('#movido-p');

        pElemento1 = elemento1P.clone();
        pElemento2 = elemento2P.clone();

        elemento1P.replaceWith(pElemento2);
        elemento2P.replaceWith(pElemento1); 
    }     

    //fecha menu toggle
    if (w < 1024) {
        $(".ancora__nuvem, .ancora__conjunto, .ancora__instituto").on('click', function (event) {
            $('.navbar-toggle').click();
        });
    }
});

//script para rolar até elemento
$.fn.scrollView = function () {
    return this.each(function () {
        var w = $(window).width();

        if (w < 767 || w < 1024) {
            $('html, body').animate({
                scrollTop: $(this).offset().top - 70
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        }
    });
}

//Botao que leva o usuario de volta ao topo
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.scrollup').css('right', '0');
    } else {
        $('.scrollup').css('right', '-80px');
    }
});
$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});