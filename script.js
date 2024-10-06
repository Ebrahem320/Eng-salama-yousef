$(document).ready(function () {
    AOS.init();

    // Smooth scrolling for all links
    $('a.nav-link').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    // Add some interactive hover effects
    $('.education-item').hover(function () {
        $(this).toggleClass('shadow-lg p-3 mb-5 bg-body rounded');
    });
});
