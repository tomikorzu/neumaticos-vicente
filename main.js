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