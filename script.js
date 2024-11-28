// Navigation between pages
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));

        // Hide all sections and show the target
        sections.forEach(section => section.classList.remove('active'));
        target.classList.add('active');
    });
});
