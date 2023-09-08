const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Change styles on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // You can adjust the scroll threshold as needed
        navbar.style.backgroundColor = '#555'; // New background color on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Initial background color
    }
});

// Change styles on hover
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#ff6600'; // New font color on hover
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '#fff'; // Initial font color
    });
});
