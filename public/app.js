/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

$( document ).ready(function() {
    var words = [
        'Sécurité',
        'Biométrie',
        'Alarme',
        'Surveillance',
        ], i = 0;

    setInterval(function(){
        $('.word').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 2000);
    
    $(".menu-displayer").click(function(){
      if($(".header ul").is(":visible"))
      {
        $(".header ul").css("display","none");
      }
      else
      {
         $(".header ul").css("display","block");
      }
    });

    $('#number1').animateNumber(
    {
        number: 1200,
        'font-size': '40px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('#number2').animateNumber(
    {
        number: 15,
        'font-size': '40px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('#number3').animateNumber(
    {
        number: 10,
        'font-size': '40px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('#number4').animateNumber(
    {
        number: 290000,
        'font-size': '40px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('#number5').animateNumber(
    {
        number: 1200,
        'font-size': '40px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('.number6').animateNumber(
    {
        number: 5,
        'font-size': '100px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('.number7').animateNumber(
    {
        number: 100,
        'font-size': '100px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('.number8').animateNumber(
    {
        number: 20,
        'font-size': '100px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('.number9').animateNumber(
    {
        number: 30,
        'font-size': '60px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('.number10').animateNumber(
    {
        number: 40,
        'font-size': '60px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $('.number11').animateNumber(
    {
        number: 100,
        'font-size': '60px',

        easing: 'easeInQuad', // require jquery.easing

        // optional custom step function
        // using here to keep '%' sign after number
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.text(floored_number);
        }
      },
      1800
    );

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    }); 

    $('.grid').masonry({
       // set itemSelector so .grid-sizer is not used in layout
       itemSelector: '.grid-item',
       // use element for option
       columnWidth: '.grid-sizer',
       percentPosition: true
  });

    $('.partenaires').masonry({
       // set itemSelector so .grid-sizer is not used in layout
       itemSelector: '.grid-item',
       // use element for option
       columnWidth: '.grid-sizer',
       percentPosition: true
  });

    window.sr = ScrollReveal({duration:1000});
    sr.reveal('.grid img');
    sr.reveal('.quote');
    sr.reveal('.presentation');
    sr.reveal('#products img');
    sr.reveal('.line1');
    sr.reveal('.line2');
    sr.reveal('.line3');
    sr.reveal('.line4');
    sr.reveal('.line5');
    sr.reveal('.line6');
    sr.reveal('.glass-icon');
    sr.reveal('.round-icon');
    sr.reveal('.main-references .text');
    sr.reveal('.main-references .number');
    sr.reveal('.work-icon');

    $('.product-text').click(function(){
      var number = $(this).attr('id');
      number = number.substring(number.length-1,number.length);
      $( ".product" ).each(function() {
        $( this ).hide();
      });
      switch(number) {
      case "1":
          $("#product-text1").slideToggle(500);
          $(".m25").animate({ left: '105px' });
          break;
      case "2":
          $(".m25").animate({ left: '360px' });
          $("#product-text2").slideToggle(500);
          break;
      case "3":
          $(".m25").animate({ left: '620px' });
          $("#product-text3").slideToggle(500);
          break;
      case "4":
          $(".m25").animate({ left: '880px' });
          $("#product-text4").slideToggle(500);
          break;
}
      
});


    $('.product-text').click(function(){
      var number = $(this).attr('id');
      number = number.substring(number.length-1,number.length);
      $( ".product" ).each(function() {
        $( this ).hide();
      });
      switch(number) {
      case "1":
          $("#product-text1").slideToggle(500);
          $(".m25-mobile").animate({ top: '15px' });
          break;
      case "2":
          $(".m25-mobile").animate({ top: '85px' });
          $("#product-text2").slideToggle(500);
          break;
      case "3":
          $(".m25-mobile").animate({ top: '153px' });
          $("#product-text3").slideToggle(500);
          break;
      case "4":
          $(".m25-mobile").animate({ top: '225px' });
          $("#product-text4").slideToggle(500);
          break;
}
      
});

    $('.menu li').click(function(){
      var number = $(this).attr('id');
      number = number.substring(number.length-1,number.length);
      $( ".desc" ).each(function() {
        $( this ).hide();
      });
      $( ".menu-selected" ).each(function() {
        $( this ).hide();
      });
      $(this).find(".menu-selected").slideToggle(500);
      console.log(number);
      $("#description"+number).show(500);
    });

    $('#metiers ul li').click(function(){

      var number = $(this).attr('id');
      number = number.substring(number.length-1,number.length);
      $( "#metiers .text" ).each(function() {
        $( this ).hide();
      });
      $( "#metiers ul li" ).each(function() {
        $( this ).removeClass();
      });
      $(this).addClass("selected");
      console.log(number);
      $("#metiers #text"+number).show(500);
    });

     $('#recrutement ul li').click(function(){

      var number = $(this).attr('id');
      number = number.substring(number.length-1,number.length);
      $( "#recrutement .text" ).each(function() {
        $( this ).hide();
      });
      $( "#recrutement ul li" ).each(function() {
        $( this ).removeClass();
      });
      $(this).addClass("selected");
      console.log(number);
      $("#recrutement #text"+number).show(500);
    });

    $('.owl-carousel-main').owlCarousel({
    loop:true,
    nav:true,
    navText: ["",""],
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1400:{
            items:4,
            nav:true
        }
    }
}); 


    $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText: ["",""],
    margin:300,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:2
        }
    }
}); 

}); 



/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);



