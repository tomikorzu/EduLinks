function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    hamburgerButton.classList.toggle('active');
    mobileNavSections.classList.toggle('show');
    navbar.classList.toggle('transparent');
}

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleScroll);

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

//Contacto
document.querySelector('.form-footer').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.send("service_vczqhc8", "template_8pukp7d", {
      from_name: document.getElementById('name-footer').value,
      from_email: document.getElementById('email-footer').value,
      subject: document.getElementById('asunto-footer').value,
      message: document.getElementById('message-footer').value,
    })
    .then(function(response) {
      alert('Mensaje enviado correctamente');
      document.querySelector('.form-footer').reset();
    }, function(error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje');
    });
  });