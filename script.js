document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navBar = document.querySelector('.nav-bar'); // Use querySelector for the class

    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active'); // Toggles the "active" class for the nav bar
    });
});
