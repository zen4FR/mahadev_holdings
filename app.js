// -----------------------
// MOBILE MENU TOGGLE
// -----------------------

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.active');
    if (menuBars) {
        menu.classList.remove('active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// -----------------------
// IMAGE SLIDER LOGIC
// -----------------------

// Select all slides
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let autoSlideInterval;

// Select buttons
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Function to show a slide based on index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

// Next button handler
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    showSlide(currentIndex);
}

// Previous button handler
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Start auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

// Stop auto-slide when user interacts
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Attach event listeners
nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

// Start auto-slide on page load
document.addEventListener('DOMContentLoaded', startAutoSlide);

// Pause auto-slide when hovering over slider
const slider = document.querySelector('.hero-slider');
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

// -----------------------
// SERVICES SECTION INTERACTIONS
// -----------------------

// Add hover effects to service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
  // Add click handlers for service buttons
const serviceButtons = document.querySelectorAll('.service-btn, .karthika-btn, .puja-book-btn');

serviceButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.service-card, .puja-card');
        const title = card ? card.querySelector('.service-title, .puja-title').textContent : 'Service';
        alert(`Booking: ${title}\n\nRedirecting to booking page...`);
    });
});

// Add click handlers for puja details buttons
const pujaDetailsButtons = document.querySelectorAll('.puja-details-btn');
pujaDetailsButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const pujaTitle = this.closest('.puja-card').querySelector('.puja-title').textContent;
        alert(`Details for: ${pujaTitle}\n\nDetailed information about this puja will be shown here.`);
    });
});
    // Touch events for mobile
    serviceCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// -----------------------
// SMOOTH SCROLLING
// -----------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// -----------------------
// PRIMARY SERVICES INTERACTIONS
// -----------------------

document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for primary service buttons
    const primaryServiceButtons = document.querySelectorAll('.primary-service-btn');
    
    primaryServiceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceTitle = this.closest('.primary-service-card').querySelector('.primary-service-title').textContent;
            alert(`Learn more about: ${serviceTitle}\n\nDetailed information about this service will be shown here.`);
        });
    });
    
    // Add hover effects to primary service cards
    const primaryServiceCards = document.querySelectorAll('.primary-service-card');
    
    primaryServiceCards.forEach(card => {
        // Mouse events
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Touch events for mobile
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});