$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.tattoo').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('tatto--visible');
            }
        });
    });


    $(window).on('scroll', function() {
        $('.removal').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('removal--visible');
            }
        });
    });


    $(window).on('scroll', function() {
        $('.sketches').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('sketches--visible');
            }
        });
    });


    $(window).on('scroll', function() {
        $('.image-tattoos__fourth-image').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-tattoos__fourth-image--visible');
            }
        });
    });
    $(window).on('scroll', function() {
        $('.image-tattoos__third-image').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-tattoos__third-image--visible');
            }
        });
    });
    $(window).on('scroll', function() {
        $('.image-tattoos__second-image').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-tattoos__second-image--visible');
            }
        });
    });
    $(window).on('scroll', function() {
        $('.image-tattoos__first-image').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-tattoos__first-image--visible');
            }
        });
    });


    $(window).on('scroll', function() {
        $('.image-corrections__third-image').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-corrections__third-image--visible');
            }
        });
    });
    $(window).on('scroll', function() {
        $('.image-corrections__first-image').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-corrections__first-image--visible');
            }
        });
    });
    $(window).on('scroll', function() {
        $('.image-corrections__fouth-image').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-corrections__fouth-image--visible');
            }
        });
    });
    $(window).on('scroll', function() {
        $('.image-corrections__second-image').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-corrections__second-image--visible');
            }
        });
    });
    $(window).on('scroll', function() {
        $('.image-corrections__fifth-image').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-corrections__fifth-image--visible');
            }
        });
    });


    $(window).on('scroll', function() {
        $('.image-sketches__list').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('image-sketches__list--visible');
            }
        });
    });

    $('.header__burger-menu').click(function(event) {
        $('.header__burger-menu,.navigation__list ').toggleClass('active');
    });

/*     $('.learn-more').click(function(event) {
        $('.contacts').toggleClass('contacts-visible');
    });
 */
    $(document).ready(function() {
        $('.learn-more-1').click(function() {
            $('.pop-up-window-tattoo').css('display', 'flex'), $('body').css('overflow', 'hidden');;
            setTimeout(function() {
                $('.pop-up-window-tattoo').css('opacity', '1');
            }, 100);
        });
    });
    $(document).ready(function() {
        $('.pop-up-window-tattoo__exit').click(function() {
            $('.pop-up-window-tattoo').css('display', 'none'), $('body').css('overflow', 'visible');;
            setTimeout(function() {
                $('.pop-up-window-tattoo').css('opacity', '0');
            }, 100);
        });
    });


    $(document).ready(function() {
        $('.learn-more-2').click(function() {
            $('.pop-up-window-removal').css('display', 'flex'), $('body').css('overflow', 'hidden');;
            setTimeout(function() {
                $('.pop-up-window-removal').css('opacity', '1');
            }, 100);
        });
    });
    $(document).ready(function() {
        $('.pop-up-window-removal__exit').click(function() {
            $('.pop-up-window-removal').css('display', 'none'), $('body').css('overflow', 'visible');;
            setTimeout(function() {
                $('.pop-up-window-removal').css('opacity', '0');
            }, 100);
        });
    });

    $(document).ready(function() {
        $('.learn-more-3').click(function() {
            $('.pop-up-window-sketches').css('display', 'flex'), $('body').css('overflow', 'hidden');;
            setTimeout(function() {
                $('.pop-up-window-sketches').css('opacity', '1');
            }, 100);
        });
    });
    $(document).ready(function() {
        $('.pop-up-window-sketches__exit').click(function() {
            $('.pop-up-window-sketches').css('display', 'none'), $('body').css('overflow', 'visible');;
            setTimeout(function() {
                $('.pop-up-window-sketches').css('opacity', '0');
            }, 100);
        });
    });
    
    



    $(document).ready(function() {
        $('.image-tattos__button-style').click(function() {
            $('.pop-up-window-images-tattoo').css('display', 'flex'), $('body').css('overflow', 'hidden');;
            setTimeout(function() {
                $('.pop-up-window-images-tattoo').css('opacity', '1');
            }, 100);
        });
    });
    $(document).ready(function() {
        $('.pop-up-window-images-tattoo__button').click(function() {
            $('.pop-up-window-images-tattoo').css('display', 'none'), $('body').css('overflow', 'visible');;
            setTimeout(function() {
                $('.pop-up-window-images-tattoo').css('opacity', '0');
            }, 100);
        });
    });



    $(document).ready(function() {
        $('.image-corrections__button-style').click(function() {
            $('.pop-up-window-images-corrections').css('display', 'flex'), $('body').css('overflow', 'hidden');;
            setTimeout(function() {
                $('.pop-up-window-images-corrections').css('opacity', '1');
            }, 100);
        });
    });
    $(document).ready(function() {
        $('.pop-up-window-images-corrections__button').click(function() {
            $('.pop-up-window-images-corrections').css('display', 'none'), $('body').css('overflow', 'visible');;
            setTimeout(function() {
                $('.pop-up-window-images-corrections').css('opacity', '0');
            }, 100);
        });
    });



    $(document).ready(function() {
        $('.image-sketches__button-style').click(function() {
            $('.pop-up-window-images-sketches').css('display', 'flex'), $('body').css('overflow', 'hidden');;
            setTimeout(function() {
                $('.pop-up-window-images-sketches').css('opacity', '1');
            }, 100);
        });
    });
    $(document).ready(function() {
        $('.pop-up-window-images-sketches__button').click(function() {
            $('.pop-up-window-images-sketches').css('display', 'none'), $('body').css('overflow', 'visible');;
            setTimeout(function() {
                $('.pop-up-window-images-sketches').css('opacity', '0');
            }, 100);
        });
    });


/*     $(document).ready(function() {
        $('.pop-up-window-sketches__button-instagram').mouseenter(function() {
            $(this).css('background', 'linear-gradient(90deg, rgba(48,255,169,1) 0%, rgba(164,107,255,1) 50%, rgba(72,66,255,1) 100%)');
        });
    
        $('.pop-up-window-sketches__button-instagram').mouseleave(function() {
            $(this).css('background', 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)');
        });
    }); */





    $('.scroll-main').click(() => {
        $('html, body').animate({
            scrollTop: $('.header').offset().top
        }, 400);
    });
    $('.scroll-works').click(() => {
        $('html, body').animate({
            scrollTop: $('.image-tattoo').offset().top
        }, 400);
    });
    $('.scroll-prices').click(() => {
        $('html, body').animate({
            scrollTop: $('.services').offset().top
        }, 400);
    });
    $('.title-scroll').click(() => {
        $('html, body').animate({
            scrollTop: $('.services').offset().top
        }, 400);
    });
    


    $(document).ready(function() {
        var otherBlockHeight = $('.header__upper').height();
    
        $('.automatic-height').height(otherBlockHeight);
    });

    $(document).ready(function() {
        let clicked = false;
        $('.header__burger-menu').click(function() {
            clicked = !clicked;
            if (clicked) {
                $(this).find('.header__burger-menu--animation-1').addClass('animation-effect-skale-yes-up').removeClass('animation-effect-skale-no-up');
            } else {
                $(this).find('.header__burger-menu--animation-1').addClass('animation-effect-skale-no-up').removeClass('animation-effect-skale-yes-up');
            }
            if (clicked) {
                $(this).find('.header__burger-menu--animation-2').addClass('animation-effect-none').removeClass('animation-effect-block');
            } else {
                $(this).find('.header__burger-menu--animation-2').addClass('animation-effect-block').removeClass('animation-effect-none');
            }
            if (clicked) {
                $(this).find('.header__burger-menu--animation-3').addClass('animation-effect-skale-yes-down').removeClass('animation-effect-skale-no-down');
            } else {
                $(this).find('.header__burger-menu--animation-3').addClass('animation-effect-skale-no-down').removeClass('animation-effect-skale-yes-down');
            }
        });
    });
});