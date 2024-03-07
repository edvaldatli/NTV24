document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDrawer');
    const closeDrawerButton = document.getElementById('closeDrawer');
    const drawer = document.getElementById('drawer');

    toggleButton.addEventListener('click', () => {
        if (drawer.classList.contains('translate-y-0')) {
        // Slide up
        drawer.classList.replace('translate-y-0', '-translate-y-full');
        setTimeout(() => drawer.classList.add('hidden'), 500); // Hide after animation
        } else {
        // Slide down
        drawer.classList.remove('hidden');
        setTimeout(() => drawer.classList.replace('-translate-y-full', 'translate-y-0'), 10); // Delay for CSS to apply 'display: block'
        }
    });
});
  