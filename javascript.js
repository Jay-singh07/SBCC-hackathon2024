$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000, // Slide change every 3 seconds
        autoplayHoverPause: true, // Pause on hover
        smartSpeed: 800, // Smooth transition speed
        animateOut: 'fadeOut', // Fades out the slide
        animateIn: 'fadeIn' // Fades in the new slide
    });
});
