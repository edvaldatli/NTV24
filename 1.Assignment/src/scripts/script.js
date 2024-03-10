function scrollToSection(buttonId, sectionId) {
    $(buttonId).on('click', () => {
        $('html, body').animate({ scrollTop: $(sectionId).offset().top -100}, 500);
    });
};



console.log('Script loaded');

$(document).ready(() => {
    // Load navbar
    $("#navbar-pointer").load("./components/navbar.html", function() {
        console.log('Navbar loaded');
    
        // Event handlers for dynamically loaded content go here
        $(document).on('click', '#toggleDrawer', function() {
            const drawer = $('#drawer');
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
            if (!$(e.target).closest('#drawer').length && !$(e.target).is('#drawer') && !$(e.target).is('#toggleDrawer')) {
                const drawer = $('#drawer');
                if (drawer.hasClass('translate-y-0')) {
                    drawer.removeClass('translate-y-0').addClass('-translate-y-full');
                    setTimeout(() => drawer.addClass('hidden'), 500);
                }
            }
        });
    });

    // Load footer
    $("#footer-pointer").load("./components/footer.html", function() {
        console.log('Footer loaded');
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

    // Load components
    



    scrollToSection('#starters', '#starters-section');
    scrollToSection('#courses', '#courses-section');
    scrollToSection('#sandwiches', '#sandwiches-section');
    scrollToSection('#sides', '#sides-section');
});


  