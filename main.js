function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    hamburgerButton.classList.toggle('active');
    mobileNavSections.classList.toggle('show');
    navbar.classList.toggle('transparent');
}

const hamburgerButton = document.getElementById('hamburguer-button');
const mobileNavSections = document.getElementById('mobile-navbar-sections');
const navLinks = document.querySelectorAll('.mobile-navbar-sections-a');

hamburgerButton.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburgerButton.classList.contains('active')) {
            toggleMenu();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const offset = 60; // Ajustar según la altura de la navbar
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetPosition = document.querySelector(targetId).getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});