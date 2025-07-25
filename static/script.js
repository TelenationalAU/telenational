// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize expertise calculator
    initializeExpertiseCalculator();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize scroll animations
    initializeScrollAnimations();
});

// Expertise Calculator Functionality
function initializeExpertiseCalculator() {
    const expertiseItems = document.querySelectorAll('.expertise-item');
    const totalYearsElement = document.querySelector('.total-years');
    const selectionDetails = document.querySelector('.selection-details');
    const emptyState = document.querySelector('.empty-state');
    const countNumber = document.querySelector('.count-number');
    const breakdownList = document.querySelector('.breakdown-list');
    
    let selectedExpertise = {};
    
    const expertiseData = {
        corporate: { years: 30, label: "Corporate Travel", description: "Strategic corporate travel management" },
        retail: { years: 25, label: "Retail Travel", description: "Consumer-focused travel services" },
        group: { years: 28, label: "Group Travel", description: "Large-scale group coordination" },
        airline: { years: 20, label: "Airline Operations", description: "Deep airline industry knowledge" },
        tours: { years: 22, label: "Escorted Tours", description: "Guided tour operations with cultural expertise" },
        cruise: { years: 35, label: "Cruise Logistics", description: "Comprehensive cruise operations management" }
    };
    
    expertiseItems.forEach(item => {
        item.addEventListener('click', function() {
            const area = this.dataset.area;
            const years = parseInt(this.dataset.years);
            
            // Toggle selection
            if (selectedExpertise[area]) {
                delete selectedExpertise[area];
                this.classList.remove('selected');
            } else {
                selectedExpertise[area] = years;
                this.classList.add('selected');
            }
            
            updateCalculatorDisplay();
        });
    });
    
    function updateCalculatorDisplay() {
        const totalYears = Object.values(selectedExpertise).reduce((sum, years) => sum + years, 0);
        const selectedCount = Object.keys(selectedExpertise).length;
        
        // Update total years with animation
        totalYearsElement.style.transform = 'scale(0.8)';
        totalYearsElement.style.opacity = '0';
        
        setTimeout(() => {
            totalYearsElement.textContent = totalYears;
            totalYearsElement.style.transform = 'scale(1)';
            totalYearsElement.style.opacity = '1';
        }, 150);
        
        // Update count
        countNumber.textContent = selectedCount;
        
        // Update breakdown
        breakdownList.innerHTML = '';
        Object.entries(selectedExpertise).forEach(([area, years]) => {
            const item = document.createElement('div');
            item.className = 'breakdown-item';
            
            const labelSpan = document.createElement('span');
            labelSpan.textContent = expertiseData[area].label;
            
            const yearsSpan = document.createElement('span');
            yearsSpan.className = 'breakdown-years';
            yearsSpan.textContent = `${years} years`;
            
            item.appendChild(labelSpan);
            item.appendChild(yearsSpan);
            breakdownList.appendChild(item);
        });
        
        // Show/hide sections
        if (totalYears > 0) {
            selectionDetails.classList.remove('hidden');
            emptyState.style.display = 'none';
        } else {
            selectionDetails.classList.add('hidden');
            emptyState.style.display = 'block';
        }
    }
}

// Contact Form Functionality with Web3Forms
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        // Basic validation
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            showToast('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Hide form and show success message
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
                
                // Reinitialize icons for the success message
                setTimeout(() => {
                    lucide.createIcons();
                }, 100);
            } else {
                throw new Error(result.message || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showToast('There was an error sending your message. Please try again.', 'error');
            
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Reset form function
function resetForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');
    
    form.reset();
    form.style.display = 'flex';
    successMessage.classList.add('hidden');
}

// Utility Functions
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastMessage.textContent = message;
    
    // Update icon based on type
    if (type === 'error') {
        toastIcon.innerHTML = '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>';
        toastIcon.style.color = '#ef4444';
    } else {
        toastIcon.innerHTML = '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>';
        toastIcon.style.color = '#10b981';
    }
    
    // Show toast
    toast.classList.remove('hidden');
    toast.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 5000);
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.journey-card, .expertise-card, .profile-card, .cruise-logo');
    animateElements.forEach(el => observer.observe(el));
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add scroll effect to hero section
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset / heroSection.offsetHeight;
    
    if (scrolled < 1) {
        const heroBackground = document.querySelector('.hero-background');
        heroBackground.style.transform = `translateY(${scrolled * 30}%)`;
        heroBackground.style.opacity = 0.4 - (scrolled * 0.2);
    }
});

// Add loading animation for cruise logos
document.addEventListener('DOMContentLoaded', function() {
    const cruiseLogos = document.querySelectorAll('.cruise-logo img');
    
    cruiseLogos.forEach((img, index) => {
        img.addEventListener('load', function() {
            setTimeout(() => {
                this.parentElement.style.opacity = '1';
                this.parentElement.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        // Set initial state
        img.parentElement.style.opacity = '0';
        img.parentElement.style.transform = 'translateY(20px)';
        img.parentElement.style.transition = 'all 0.5s ease';
    });
});

// Add hover effects for expertise calculator
document.addEventListener('DOMContentLoaded', function() {
    const expertiseItems = document.querySelectorAll('.expertise-item');
    
    expertiseItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add ripple effect to buttons
function addRippleEffect(button) {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Initialize ripple effect on buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.hero-button, .submit-button');
    buttons.forEach(addRippleEffect);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .hero-button, .submit-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);