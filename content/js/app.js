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

    $('.section__fazemos').onScreen({
    container: window,
    direction: 'vertical',
    doIn: function() {
      // Do something to the matched elements as they come in
      $('.negocios').addClass("fadeInLeft");

      $('.negocios').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $('.software').show().addClass('fadeInLeft');
      });        

      $('.software').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $('.operacao').show().addClass('fadeInLeft');
      });
    },
    doOut: function() {
      // Do something to the matched elements as they get off scren
    },
    tolerance: 200,
    throttle: 50,
    //toggleClass: 'onScreen',
    });    

    //navegar em numeros
    $('#capitalMovimentado').circliful({
      foregroundColor: '#c1c0c1',
      foregroundBorderWidth: '10',
      backgroundColor: '#696969', 
      backgroundBorderWidth: '10',   
      text: 'CAPITAL MOVIMENTADO P/ <tspan y="205" x="97">STARTUPS ATENDIDAS</tspan>',
      textBelow: true,
      textColor: '#FFF',
      textStyle: 'font-size: 12px; font-weight: bold;',
      replacePercentageByText: 'R$ 1 mi',
      noPercentageSign: true,      
      fontColor: '#fff',      
      animateInView: true,
      percent: 85,
    });

    $('#tecnologiasUtilizadas').circliful({
      foregroundColor: '#c1c0c1',
      foregroundBorderWidth: '10',
      backgroundColor: '#696969', 
      backgroundBorderWidth: '10',      
      text: 'TECNOLOGIAS <tspan y="205" x="97">UTILIZADAS</tspan>',
      textBelow: true,
      textColor: '#FFF',
      textStyle: 'font-size: 12px; font-weight: bold;',
      replacePercentageByText: '86',
      noPercentageSign: true,      
      fontColor: '#fff',
      animateInView: true,
      percent: 65,
    });

    $('#usuariosImpactados').circliful({
      foregroundColor: '#c1c0c1',
      foregroundBorderWidth: '10',
      backgroundColor: '#696969', 
      backgroundBorderWidth: '10',      
      text: 'USUARIOS IMPACTADOS',            
      textBelow: true,
      textColor: '#FFF',
      textStyle: 'font-size: 12px; font-weight: bold;',
      replacePercentageByText: '32.000',
      noPercentageSign: true,      
      fontColor: '#fff',
      animateInView: true,
      percent: 60,
    });

    $('#startupsAtendidas').circliful({
      foregroundColor: '#c1c0c1',
      foregroundBorderWidth: '10',
      backgroundColor: '#696969', 
      backgroundBorderWidth: '10',       
      text: 'STARTUPS ATENDIDAS <tspan y="205" x="97">EM 2016</tspan>',
      textBelow: true,
      textColor: '#FFF',
      textStyle: 'font-size: 12px; font-weight: bold;',
      replacePercentageByText: '2.658',
      noPercentageSign: true,      
      fontColor: '#fff',
      animateInView: true,
      percent: 95,
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