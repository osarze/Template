import "../scss/style.scss";

// import "bootstrap";
require("bootstrap");
let Isotope = require('isotope-layout');
require("jquery.easing");
// import "owl.carousel/dist/assets/owl.carousel.min.css";
// import "owl.carousel/dist/assets/owl.theme.default.min.css";

import "owl.carousel";

//Jquery Isotope
let container = document.querySelector('.portfolio-container');
let iso = new Isotope( container, {
    filter: '*',
    itemSelector: '.portfolio',
    animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
    }
});

$('.portfolio-filter a').click(function (e) {
    e.preventDefault();
    let filterValue = $(this).attr('data-filter');
    iso.arrange({
        filter: filterValue
    });
    return false;
});
// End Jquery Isotope



// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function(event) {
    let $anchor = $(this);

    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

//Testimonial
// $(".carousel-inner .item:first-child").addClass("active");
//
$('.testimonies-content').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,

        }
    }
});

//Adding Animate.Css Dynamically
// function animateCss(element, animationName, callback) {
//     const node = document.querySelector(element)
//     node.classList.add('animated', animationName)
//
//     function handleAnimationEnd() {
//         node.classList.remove('animated', animationName)
//         node.removeEventListener('animationend', handleAnimationEnd)
//
//         if (typeof callback === 'function') callback()
//     }
//
//     node.addEventListener('animationend', handleAnimationEnd)
// }