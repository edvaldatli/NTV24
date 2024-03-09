document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDrawer');
    const drawer = document.getElementById('drawer');

    toggleButton.addEventListener('click', () => {
        if (drawer.classList.contains('translate-y-0')) {
            drawer.classList.replace('translate-y-0', '-translate-y-full');
            setTimeout(() => drawer.classList.add('hidden'), 500);
        } else {
            drawer.classList.remove('hidden');
            setTimeout(() => drawer.classList.replace('-translate-y-full', 'translate-y-0'), 10);
        }
    });
    
    document.addEventListener('click', (e) => {
        console.log(e.target);
        if (drawer.classList.contains('translate-y-0') && !drawer.contains(e.target) && e.target !== toggleButton) {
            drawer.classList.replace('translate-y-0', '-translate-y-full');
            setTimeout(() => drawer.classList.add('hidden'), 500);
        }
    });
});
  