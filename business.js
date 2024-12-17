// Get the current page URL
const currentPage = window.location.pathname.split('/').pop();

// Select all navbar links
const navLinks = document.querySelectorAll('.navbar a');

// Loop through the links and add/remove the active class
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Animate logo letters
document.querySelectorAll('.logo-text .letter').forEach((el, index) => {
    el.style.setProperty('--i', index);
});

// Intersection Observer for about text visibility
document.addEventListener("DOMContentLoaded", () => {
    const aboutTexts = document.querySelectorAll('.about h3, .about .heading');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    aboutTexts.forEach(text => observer.observe(text));
});

// Intersection Observer for about text container visibility
document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.querySelector('.about-text-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textContainer.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(textContainer);
});

// Intersection Observer for services section header visibility
document.addEventListener("DOMContentLoaded", () => {
    const serviceHeader = document.querySelector('.services h2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                serviceHeader.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(serviceHeader);
});

// Service item click event to toggle 'active' class for enlarging
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function() {
        // Toggle 'active' class to enlarge the item
        this.classList.toggle('active');
    });
});

// This will toggle the navbar when the menu icon is clicked
const menuIcon = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
}


