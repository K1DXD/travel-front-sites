// preload
$(window).on('load', function () {
    $('.status').fadeOut();
    $('.preload').delay(350).fadeOut('slow');
});
// double slider
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 100,
        max: 5000,
        values: [500, 1000],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + "                  $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        "                     $" + $("#slider-range").slider("values", 1));
});
// owl-carousel
$('.place-slide').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        },
    }
})
$('.picture-slide').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: ["<i class='fas fa-arrow-left '></i>", "<i class=' fas fa-arrow-right' ></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
    }
})
$('.review-content').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'slideOutUp',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
    }
})
// venobox
$('.box1').venobox({
    framewidth: '960px',
    frameheight: '540px',
    border: '',
    bgcolor: '#5dff5e',
    titleattr: 'data-title',
    numeratio: true,
    infinigall: true,
    spinner: 'cube-grid',
});
// form-validate
function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["psw"].value;
    if (y == "" && x == "") {
        document.getElementById("error-password").style.visibility = 'visible';
        document.getElementById("error-username").style.visibility = 'visible';
        return false;
    }
    else if (x == "") {
        document.getElementById("error-username").style.visibility = 'visible';
        document.getElementById("error-password").style.visibility = 'hidden';
        return false;
    }
    else if (y == "") {
        document.getElementById("error-password").style.visibility = 'visible';
        document.getElementById("error-username").style.visibility = 'hidden';
        return false;
    } else {
        alert("Login successful !!");
        return true;
    }
}