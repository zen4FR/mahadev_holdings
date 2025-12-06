// DOM Elements
const teamMembers = document.querySelectorAll('.team-member');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Scroll Animation for Team Members
function checkScroll() {
    teamMembers.forEach(member => {
        const memberTop = member.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (memberTop < windowHeight * 0.85) {
            member.classList.add('visible');
        }
    });
}

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Image hover effect enhancement
teamMembers.forEach(member => {
    const image = member.querySelector('.member-image');
    const frame = member.querySelector('.image-frame');
    
    member.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'scale(1.05)';
        }
        if (frame) {
            frame.style.top = '-10px';
            frame.style.left = '-10px';
            frame.style.right = '10px';
            frame.style.bottom = '10px';
        }
    });
    
    member.addEventListener('mouseleave', () => {
        if (image) {
            image.style.transform = 'scale(1)';
        }
        if (frame) {
            frame.style.top = '-20px';
            frame.style.left = '-20px';
            frame.style.right = '20px';
            frame.style.bottom = '20px';
        }
    });
});

// Add parallax effect to floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.floating-om, .floating-diya, .floating-lotus');
    
    floatingElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Initialize animations on page load
window.addEventListener('DOMContentLoaded', () => {
    // Add delay to team members for sequential animation
    teamMembers.forEach((member, index) => {
        member.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // Initial check for elements in view
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // // Add loading animation to images
    // const images = document.querySelectorAll('.member-image');
    // images.forEach(img => {
    //     img.addEventListener('load', function() {
    //         this.style.opacity = '1';
    //         this.parentElement.classList.add('loaded');
    //     });
        
    //     // Set initial opacity
    //     img.style.opacity = '0';
    //     img.style.transition = 'opacity 0.5s ease';
    // });
});