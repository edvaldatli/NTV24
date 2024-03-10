function scrollToSection(buttonId, sectionId) {
    $(buttonId).on('click', () => {
        $('html, body').animate({ scrollTop: $(sectionId).offset().top -100}, 500);
    });
};

$(document).ready(() => {
    const toggleButton = $('#toggleDrawer');
    const drawer = $('#drawer');

    // Open and close drawer
    toggleButton.on('click', () => {
        if (drawer.hasClass('translate-y-0')) {
            drawer.removeClass('translate-y-0').addClass('-translate-y-full');
            setTimeout(() => drawer.addClass('hidden'), 500);
        } else {
            drawer.removeClass('hidden');
            setTimeout(() => drawer.removeClass('-translate-y-full').addClass('translate-y-0'), 10);
        }
    });

    // Close drawer when clicking outside of it
    $(document).on('click', (e) => {
        if (drawer.hasClass('translate-y-0') && !drawer.has(e.target).length && e.target !== toggleButton[0]) {
            drawer.removeClass('translate-y-0').addClass('-translate-y-full');
            setTimeout(() => drawer.addClass('hidden'), 500);
        }
    });

    // Back to top button
    $('#backToTop').on('click', () => {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // Show back to top button when scrolling down
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 100) {
            $('#backToTop').removeClass('hidden');
        } else {
            $('#backToTop').addClass('hidden');
        }
    });

    $("#navbar-pointer").load("./components/navbar.html");



    scrollToSection('#starters', '#starters-section');
    scrollToSection('#courses', '#courses-section');
    scrollToSection('#sandwiches', '#sandwiches-section');
    scrollToSection('#sides', '#sides-section');
});


  