document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');


    // Toggle menu
    menuIcon.addEventListener('click', () => {
        navUl.classList.toggle('show-menu');
    });

    
    // Smooth scrolling
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            const offsetPosition = targetSection.offsetTop - 70; // Adjusted for fixed header height

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            navUl.classList.remove('show-menu'); // Hide menu after clicking
        });
    });
});
