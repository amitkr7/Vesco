$(function () {

    /*------animate.css -----*/
    new WOW().init();


    /*-------magnific popup--------*/
    $('.img-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });

    /*----------Owl Carousel on Team-----------*/
    $("#team-members").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                
                items: 3
            },
            // breakpoint from 792 up
            992:{
                items: 3
            }
        }
    });

    /*----------Owl Carousel on Testimonials-----------*/
    $("#customers-testimonials").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700
    });

    /*-------------------Counter up Stats----------*/
    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });

    /*----------Owl Carousel on Client-----------*/
    $("#clients-list").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:2
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                
                items: 5
            },
            // breakpoint from 792 up
            992:{
                items: 6
            }
        }
    });
    /*----------Show/Hide navigation -----------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show{
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
    /*-------------Smooth Scroll--------------*/
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        //get id/aatr of href section like #work #about etc
        var section = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

    /*-------------Responsive Collpase on link click--------------*/
    $(".navbar-collapse li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});

