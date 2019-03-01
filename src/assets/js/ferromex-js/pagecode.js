/*
// INVOKE
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});

//Menu mobile
$(document).ready(function() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });
});

$("#nav-icon3").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

//Header menu hamburguer
$(document).ready(function() {
    $('#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });
});

$("#nav-icon4").click(function(e) {
    e.preventDefault();
    $("#icon-small").toggleClass("toggled2");
});


$(function() {
    $('[data-toggle="tooltip"]').tooltip('update')
})

//Modal
$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})

//Datepicker
$(function() {
    $('#datetimepicker7').datetimepicker();
    $('#datetimepicker8').datetimepicker({
        useCurrent: false
    });
    $("#datetimepicker7").on("change.datetimepicker", function(e) {
        $('#datetimepicker8').datetimepicker('minDate', e.date);
    });
    $("#datetimepicker8").on("change.datetimepicker", function(e) {
        $('#datetimepicker7').datetimepicker('maxDate', e.date);
    });
});

//Columns height
function sameHeights(selector) {
    var selector = selector || '[data-key="sameHeights"]',
        query = document.querySelectorAll(selector),
        elements = query.length,
        max = 0;
    if (elements) {
        while (elements--) {
            var element = query[elements];
            if (element.clientHeight > max) {
                max = element.clientHeight;
            }
        }
        elements = query.length;
        while (elements--) {
            var element = query[elements];
            element.style.height = max + 'px';
        }
    }
}
if ('addEventListener' in window) {
    window.addEventListener('resize', function() {
        sameHeights();
    });
    window.addEventListener('load', function() {
        sameHeights();
    });
}


$(document).on('ready', start);
$(window).on('load resize', responsive);
*/