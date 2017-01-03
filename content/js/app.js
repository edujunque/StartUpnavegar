/**
 *
 * Minificação do arquivo Koala http://koala-app.com/ 
 * -- Arquivo index.html usa o arquivo minificado.
 *
 */

$(document).ready(function () {
    var w = $(window).width();

    //$('html, body').animate({ scrollTop: 0 }, 50);


    //menu
    $('.navbar-toggle').click(function(){
      $(this).toggleClass('open');
    });        


    //animacoes com animate.css
    $('.navbar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $('.header__frase').show().addClass('bounceInLeft');
    });             

    //acao de click no menu
    $('[data-menu="quemsomos"]').on('click', function (event) {
        event.preventDefault();
        $(".section__quem-somos").scrollView();        
    });

    $('[data-menu="fazemos"]').on('click', function (event) {
        event.preventDefault();
        $(".section__fazemos").scrollView();        
    });

    $('[data-menu="trabalhos"]').on('click', function (event) {
        event.preventDefault();
        $(".section__projetos").scrollView();        
    });

    $('[data-menu="parceiros"]').on('click', function (event) {
        event.preventDefault();
        $(".section__parceiros").scrollView();        
    });

    $('[data-menu="contato"]').on('click', function (event) {
        event.preventDefault();
        $(".section__contato").scrollView();        
    });

    //anima elemento estar visivel na tela
    if (w > 767) {
      //
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

      //
      $('.section__fazemos').onScreen({
      container: window,
      direction: 'vertical',
      doIn: function() {
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
      tolerance: 300,
      throttle: 50,
      }); 

      //
      $('.section__planejamos').onScreen({
      container: window,
      direction: 'vertical',
      doIn: function() {
        $('.planejamento').addClass("fadeInDown");

        $('.planejamento').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.design').show().addClass('fadeInDown');
        });        

        $('.design').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.mvp').show().addClass('fadeInDown');
        });

        $('.mvp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.manutencao').show().addClass('fadeInDown');
        });

        $('.manutencao').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.planejamos__observacao').show().addClass('fadeIn');
        });      
      },
      doOut: function() {

      },
      tolerance: 200,
      throttle: 50,
      });

      //
      $('.section__projetos').onScreen({
      container: window,
      direction: 'vertical',
      doIn: function() {
        $('.projetos_slider .container').addClass("fadeInLeft").css('opacity', '1');
      },
      doOut: function() {
      },
      tolerance: 200,
      throttle: 50,
      }); 

      //
      $('.section__parceiros').onScreen({
      container: window,
      direction: 'vertical',
      doIn: function() {
        $('.parceiros__logos').addClass("fadeInDown").css('opacity', '1');
      },
      doOut: function() {
      },
      tolerance: 200,
      throttle: 50,
      });     
    } else {
      //remove as animacoes de entrada para melhor visualizacao no celular
      $('.section__quem-somos').addClass("fundo");
      $('.software').show();
      $('.operacao').show();
      $('.design').show();
      $('.mvp').show();
      $('.manutencao').show();
      $('.planejamos__observacao').show();
      $('.projetos_slider .container').css('opacity', '1');
      $('.parceiros__logos').css('opacity', '1');
    }

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
    //if (w < 991) {
      $('.bxslider').bxSlider({
        //auto: true,
        //infiniteLoop: false,
        //adaptiveHeight: true,
        //pager: false
      });
    //}  

    //validacao do formulario 
    $(".form-validado input, .form-validado textarea, .form-validado select").blur(function(){
     if(($(this).val() == "" || $(".form-validado select").val() == "0") && $(this).prop('required'))
         {
           $(this).parent().addClass("tem-erro");
         }
    });

    $("#enviar-mensagem").click(function(){
     var cont = 0;
     $(".form-validado input, .form-validado textarea, .form-validado select").each(function(){
         if(($(this).val() == "" || $(".form-validado select").val() == "0") && $(this).attr('required'))
             {
              $(this).parent().addClass("tem-erro");
              cont++;
             }
        });
     if(cont == 0)
         {
            $("#contato").submit();
         }
    });       
});

//script para rolar até elemento
$.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
          scrollTop: $(this).offset().top
      }, 1000);
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