// Hamburguer button
document.getElementById('hamburguer-button').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('mobile-navbar-sections').classList.toggle('show');
});