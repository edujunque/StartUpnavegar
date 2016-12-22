$(document).ready(function () {
    var w = $(window).width();

    //$('html, body').animate({ scrollTop: 0 }, 50);

    //animacoes com animate.css
    $('.navbar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $('.header__frase').show().addClass('bounceInLeft');
    });    

    //acao de click no menu
    // $(".").on('click', function (event) {
    //     event.preventDefault();
    //     $(".").scrollView();        
    // });   

    //anima elemento estar visivel na tela
    $('.section__quem-somos').onScreen({
    container: window,
    direction: 'vertical',
    doIn: function() {
      // Do something to the matched elements as they come in
      $(this).addClass("fundo");
    },
    doOut: function() {
      // Do something to the matched elements as they get off scren
    },
    tolerance: 500,
    throttle: 50,
    //toggleClass: 'onScreen',
    });

    //navegar em numeros
    $('#capitalMovimentado').circliful({
      foregroundColor: '#c1c0c1',
      backgroundColor: '#696969',    
      text: 'CAPTIAL MOVIMENTADO P/ STARTUPS ATENDIDAS',            
      textBelow: true,
      textColor: '#FFF',
      noPercentageSign: true,
      //animateInView: true,
      percent: 38,
    });

    $('#tecnologiasUtilizadas').circliful({
      foregroundColor: '#c1c0c1',
      backgroundColor: '#696969',      
      text: 'TECNOLOGIAS UTILIZADAS',            
      textBelow: true,
      textColor: '#FFF',
      noPercentageSign: true,
      //animateInView: true,
      percent: 86,
    });

    $('#usuariosImpactados').circliful({
      foregroundColor: '#c1c0c1',
      backgroundColor: '#696969',      
      text: 'USUARIOS IMPACTADOS',            
      textBelow: true,
      textColor: '#FFF',
      noPercentageSign: true,
      //animateInView: true,
      percent: 32.0000,      
    });

    $('#startupsAtendidas').circliful({
      foregroundColor: '#c1c0c1',
      backgroundColor: '#696969',      
      text: 'STARTUPS ATENDIDAS EM 2016',            
      textBelow: true,
      textColor: '#FFF',
      noPercentageSign: true,
      //animateInView: true,
      percent: 2.658,      
      decimals: 3,
    });
    
    //init bx slider slider    
    if (w < 991) {
      $('.').bxSlider({
        //auto: true,
        //infiniteLoop: false,
        adaptiveHeight: true,
        pager: false
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