var windowSize;

/*temporal borrar termina*/
function coverImage() {
    var imageUrl = $(this).find('img').attr('src');

    //console.log(imageUrl);

    if (!$(this).attr('style')) {
        $(this).css({
            backgroundImage: 'url("' + imageUrl + '")',
        });
    }
}
$(document).ready(function() {
    $('.image').each(coverImage);
});





$(function() {


    $('.input-group.date').datepicker({});

    $(".contenedor").click(function() {
        $(".contenedor").removeClass("active");
        $("#tipo-contenedor").val("");
        var dataContenedor = $(this).attr("data-contenedor");
        $(this).addClass("active");
        $("#tipo-contenedor").val(dataContenedor);
    });


    /*SPINNER*/
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="zmdi zmdi-chevron-up icon-item__inside"></i></div><div class="quantity-button quantity-down"><i class="zmdi zmdi-chevron-down icon-item__inside"></i></div></div>').insertAfter('.cantidad input');
    jQuery('.cantidad').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });


});



function accordion() {
    $(".js-accordion-tab").click(function(e) {

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).next(".accordion-panel").slideUp();
        } else {
            $(".js-accordion-tab").removeClass("active");
            $(".accordion-panel").slideUp();
            $(this).addClass("active");
            $(this).next(".accordion-panel").slideDown();
        }
    });

}


function videoPlay() {

    $(".js-play-video").click(function(e) {
        var myVideo = $(this).find(".js-video");

        e.preventDefault();

        if (!$(this).hasClass("active")) {
            $(this).find(".js-hero-image").addClass("active");
            $(this).addClass("active");
            myVideo.addClass("active");
            myVideo[0].play();
            $(this).closest(".hero-image").addClass("hide-dots-arrows");
        } else {
            $(this).find(".js-hero-image").removeClass("active");
            $(this).removeClass("active");
            myVideo.removeClass("active");
            myVideo.get(0).pause();
            $(this).closest(".hero-image").removeClass("hide-dots-arrows");
        }
    });

}

function deskCotizacion() {
    var widthScreen = $(document).width();

    $(".js-desk-cotizar").click(function(e) {
        e.preventDefault();
        $(".col-cotizar-desk").slideUp();
        $(".quote-results").slideDown();
        $(".tren-selected, .tren-inputed, .cantidad, .actions").addClass("active");
        // Desactiva elemento "option"
        $(".option").addClass('disabled');
        // Resize ".section.quote"
        $('.section.quote').addClass('resize');
        // Resize ".actions"
        $('.actions').addClass('resize');
        // Esconde "header" & "stepper"
        $('.hero-content, .stepper-container').addClass('hidden');
    });

    $(".js-mobile-cotizar").click(function(e) {
        e.preventDefault();
        $(".tab-content").slideDown();
        $(".tren-selected, .tren-inputed, .cantidad, .actions, .quote-results").addClass("active");
        // Desactiva elemento 'option'
        $(".option").addClass('disabled');
        // Esconde botones
        $(".tab-content").addClass('hide-actions');
        // Esconde "header" & "stepper"
        $('.hero-content, .stepper-container').addClass('hidden');
    });

    $(".js-prevroute").click(function(e) {
        if (widthScreen >= 993) {
            e.preventDefault();
            $(".quote-results").slideUp();
            $(".col-cotizar-desk").slideDown();
            $(".tren-selected, .tren-inputed, .cantidad").removeClass("active");
            // activa elemento 'option'
            $(".option").removeClass('disabled');
            // Resize '.section.quote'
            $('.section.quote').removeClass('resize');
            // Resize '.actions'
            $('.actions').removeClass('resize');
            // Muestra "header" & "stepper"
            $('.hero-content, .stepper-container').removeClass('hidden');
        }

    });

}

toggleStep = function(e) {
    var target = $(this).data('target');
    var containers = $('.tab-content');
    var slick = $(this).data('slick');

    if (windowSize <= 992) {
        e.preventDefault();

        $(target).slideDown();
        $('[data-parent="' + target + '"]').addClass('active');

        for (var i = 0; i < containers.length; i++) {
            if (target != '#' + containers[i].id) {
                // Oculta contenedores inactivos
                $(containers[i]).slideUp();
                // Remueve clase 'active' de barra de progreso
                $(containers[i]).removeClass('active');
            }
        }

        if (slick === 'reset') {
            var slider = $(target).find('.slider');

            slider.slick('destroy');
            slider.slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: '<button type="button" class="slick-arrows slick-prev"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-arrows slick-next"><i class="fas fa-angle-right"></i></button>'
            });
        }
    }
};

function mobileCotizacion() {
    var widthScreen = $(document).width();

    $(".js-prevroute").click(function(e) {

        if (widthScreen <= 992) {
            toggleStep.call(this, e);

            // Muestra "header" & "stepper"
            $(".actions").removeClass('active');
            // Muestra "header" & "stepper"
            $('.hero-content, .stepper-container').removeClass('hidden');
            // Esconde botones
            $(".tab-content").removeClass('hide-actions');
            // Muestra "option"
            $(".option").removeClass('disabled');
            // Remove class
            $(".tren-selected, .tren-inputed, .cantidad").removeClass("active");

        }

    });

    $(".js-nextquote").click(function(e) {
        if (widthScreen <= 992) {
            e.preventDefault();
            $(".choice-container").slideUp();
            $(".tab-container").removeClass("active");
            $(".tab-route").removeClass("active");
        }
    });

}

function headerMobileMenus() {

    $(".js-nav-menu").click(function(e) {
        var target = $(this).attr("data-target");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("." + target).removeClass("active");
        } else {
            $(".js-nav-menu").removeClass("active");
            $(this).addClass("active");
            $(".nav-menu").removeClass("active");
            $("." + target).addClass("active");

        }
        $(".list-reset>li").click(function(e) {
            $(".js-nav-menu").removeClass("active");
            $(".nav-menu").removeClass("active");
        });
        $(".js-nav-menu").mouseout(function() {
            $(".js-nav-menu").removeClass("active");
            $(".nav-menu").removeClass("active");
        });
    });


}

function start() {
    windowSize = $(window).width();

    accordion();
    videoPlay();
    mobileCotizacion();
    deskCotizacion();
    headerMobileMenus();

    $('body').on('click', '.js-show-target', toggleStep);

    if (windowSize <= 992) {
        $('.js-slider-services-mobile').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-arrows slick-prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-arrows slick-next"><i class="fas fa-angle-right"></i></button>'
        });
    }
}

resize = function() {
    windowSize = $(window).width();
};

$(document).on('ready', start);
$(document).on('resize', resize);