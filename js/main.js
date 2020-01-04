$(function () {
    $('.header , .header .row').innerHeight($(window).innerHeight() - $('.navbar').innerHeight())
    // Offers Owl
    $('.owl-offers').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items: 3
            }
        }
    }); 
    // Client Owl
    $('.owl-clients').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items: 4
            }
        }
    });
    // Scroll To Top
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 800) {
            $('.to-top').fadeIn(500)
        } else {
            $('.to-top').fadeOut(500)
        }
    })
    $('.to-top').on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 1500)
    })
    
});
$(window).on('load', function () {
    $('.loading-override').fadeOut(1000, function () {
        $('body').css({
            overflow: 'auto'
        })
    })
})