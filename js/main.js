//alert('Hola Costa Brava');







$(document).ready(function() {





    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            560: {
                items: 2,
                nav: false
            },
            960: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    // click to scroll top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })



    //----CAROUSEL----//

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            560: {
                items: 2,
                nav: false
            },
            960: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    //---x-CAROUSEL--x--//



});