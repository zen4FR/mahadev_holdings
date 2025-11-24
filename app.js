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
// -----------------------
// SERVICES UI INTERACTIONS
// -----------------------

document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    // Add click handlers to service items
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            showServiceDetails(serviceType);
        });
        
        // Add keyboard accessibility
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const serviceType = this.getAttribute('data-service');
                showServiceDetails(serviceType);
            }
        });
        
        // Make service items focusable
        item.setAttribute('tabindex', '0');
    });
    
    // Service details function
    function showServiceDetails(serviceType) {
        const serviceNames = {
            'temple': 'Temple Services',
            'priest': 'Priest Services', 
            'pujas': 'Daily Pujas',
            'festivals': 'Festivals',
            'rituals': 'Rituals',
            'youth': 'Youth Programs',
            'kids': 'Kids Activities',
            'seniors': 'Senior Devotees'
        };
        
        const serviceName = serviceNames[serviceType] || 'Service';
        alert(`You selected: ${serviceName}\n\nThis feature will be implemented soon with detailed information and booking options!`);
    }
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service items for animation
    serviceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});
// -----------------------
// CONTACT FORM FUNCTIONALITY
// -----------------------

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Form submission handler
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData);
            
            // Basic validation
            if (validateForm(formObject)) {
                // Show loading state
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // This is where you'll make your backend API call
                    submitToBackend(formObject)
                        .then(response => {
                            showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
                            contactForm.reset();
                        })
                        .catch(error => {
                            showMessage('Failed to send message. Please try again.', 'error');
                        })
                        .finally(() => {
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                        });
                }, 1500);
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
    
    // Form validation function
    function validateForm(data) {
        let isValid = true;
        
        // Name validation
        if (!data.name.trim()) {
            showFieldError('name', 'Name is required');
            isValid = false;
        }
        
        // Email validation
        if (!data.email.trim()) {
            showFieldError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(data.email)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Message validation
        if (!data.message.trim()) {
            showFieldError('message', 'Message is required');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Field validation
    function validateField(field) {
        const value = field.value.trim();
        
        switch(field.id) {
            case 'name':
                if (!value) {
                    showFieldError(field, 'Name is required');
                } else {
                    clearFieldError(field);
                }
                break;
                
            case 'email':
                if (!value) {
                    showFieldError(field, 'Email is required');
                } else if (!isValidEmail(value)) {
                    showFieldError(field, 'Please enter a valid email address');
                } else {
                    clearFieldError(field);
                }
                break;
                
            case 'message':
                if (!value) {
                    showFieldError(field, 'Message is required');
                } else {
                    clearFieldError(field);
                }
                break;
        }
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show field error
    function showFieldError(fieldId, message) {
        const field = typeof fieldId === 'string' ? document.getElementById(fieldId) : fieldId;
        const formGroup = field.closest('.form-group');
        
        // Remove existing error
        const existingError = formGroup.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = '#ff0844';
        errorElement.style.fontSize = '0.9rem';
        errorElement.style.marginTop = '5px';
        
        formGroup.appendChild(errorElement);
        field.style.borderColor = '#ff0844';
    }
    
    // Clear field error
    function clearFieldError(field) {
        const formGroup = field.closest('.form-group');
        const existingError = formGroup.querySelector('.field-error');
        
        if (existingError) {
            existingError.remove();
        }
        
        field.style.borderColor = '#e0e0e0';
    }
    
    // Show message (success/error)
    function showMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        messageElement.style.padding = '15px';
        messageElement.style.borderRadius = '10px';
        messageElement.style.marginBottom = '20px';
        messageElement.style.textAlign = 'center';
        messageElement.style.fontWeight = 'bold';
        
        if (type === 'success') {
            messageElement.style.background = '#d4edda';
            messageElement.style.color = '#155724';
            messageElement.style.border = '1px solid #c3e6cb';
        } else {
            messageElement.style.background = '#f8d7da';
            messageElement.style.color = '#721c24';
            messageElement.style.border = '1px solid #f5c6cb';
        }
        
        // Insert message at top of form
        const form = document.getElementById('contactForm');
        form.insertBefore(messageElement, form.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
    
    // Backend submission function (REPLACE WITH YOUR ACTUAL BACKEND URL)
    async function submitToBackend(formData) {
        // This is where you'll connect to your backend
        // Example using Fetch API:
        
        /*
        const response = await fetch('YOUR_BACKEND_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return await response.json();
        */
        
        // For now, we'll simulate a successful response
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: 'Form submitted successfully' });
            }, 1000);
        });
    }
});
// -----------------------
// PRIEST REGISTRATION FUNCTIONALITY
// -----------------------

document.addEventListener('DOMContentLoaded', function() {
    const priestRegisterBtn = document.querySelector('.priest-register-btn');
    
    if (priestRegisterBtn) {
        priestRegisterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show registration modal or redirect to registration page
            showPriestRegistrationModal();
        });
        
        // Add hover effects to image placeholder
        const imagePlaceholder = document.querySelector('.priest-image-placeholder');
        
        if (imagePlaceholder) {
            // Click to upload image (future functionality)
            imagePlaceholder.addEventListener('click', function() {
                showImageUploadHint();
            });
            
            // Drag and drop support (future functionality)
            imagePlaceholder.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.style.background = 'rgba(255, 255, 255, 0.2)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.7)';
            });
            
            imagePlaceholder.addEventListener('dragleave', function() {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            });
            
            imagePlaceholder.addEventListener('drop', function(e) {
                e.preventDefault();
                this.style.background = 'rgba(255, 255, 255, 0.1)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                showImageUploadHint();
            });
        }
    }
    
    // Priest registration modal
    function showPriestRegistrationModal() {
        // You can replace this with an actual modal or redirect
        const modalContent = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            ">
                <div style="
                    background: white;
                    padding: 40px;
                    border-radius: 20px;
                    text-align: center;
                    max-width: 500px;
                    width: 90%;
                ">
                    <h2 style="color: #1a2a6c; margin-bottom: 20px;">Priest Registration</h2>
                    <p style="color: #666; margin-bottom: 30px; line-height: 1.6;">
                        Thank you for your interest in joining Purohit Baaje! Our priest registration portal is coming soon.
                        We'll notify you when it's ready.
                    </p>
                    <button onclick="closeModal()" style="
                        background: linear-gradient(45deg, #1a2a6c, #b21f1f);
                        color: white;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">Got It!</button>
                </div>
            </div>
        `;
        
        const modal = document.createElement('div');
        modal.innerHTML = modalContent;
        modal.id = 'priestRegistrationModal';
        document.body.appendChild(modal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Image upload hint
    function showImageUploadHint() {
        alert('Image upload functionality will be available in the priest registration form! 📸\n\nYou\'ll be able to upload your profile photo, certificates, and other documents.');
    }
});

// Close modal function (needs to be global)
function closeModal() {
    const modal = document.getElementById('priestRegistrationModal');
    if (modal) {
        modal.remove();
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const priestSection = document.querySelector('.priest-register-section');
    
    if (priestSection) {
        // Add floating animation to the om symbol only
        const placeholderIcon = document.querySelector('.placeholder-icon');
        if (placeholderIcon) {
            setInterval(() => {
                placeholderIcon.style.transform = 'translateY(-5px)';
                setTimeout(() => {
                    placeholderIcon.style.transform = 'translateY(0px)';
                }, 1000);
            }, 2000);
        }
    }
});
