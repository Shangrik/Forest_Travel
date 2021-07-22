const navButton = document.querySelector('.header-nav-button');
const icon = document.querySelector('#nav-icon');
const navMenu = document.querySelector('.header-nav');
navButton.addEventListener('click', function () {
    icon.classList.toggle('active');
    navMenu.classList.toggle('header-nav--active');
});


// owl carousel

$(document).ready(function () {
    const slider = $('#slider');
    slider.owlCarousel({
        items: 1,
        loop: true
    });

    $('.gallery__arrow-btn--left').click(function () {
        slider.trigger('prev.owl.carousel');
    });
    $('.gallery__arrow-btn--right').click(function () {
        slider.trigger('next.owl.carousel');
    });
});
