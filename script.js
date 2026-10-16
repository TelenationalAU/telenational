// =====================================================
// TELENATIONAL WEBSITE
// JavaScript - CSP Preparation
// =====================================================

'use strict';

// =====================================================
// INITIALISE WEBSITE
// =====================================================

document.addEventListener('DOMContentLoaded', function () {

    // Initialise Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialise website features
    initializeContactForm();
    initializeScrollAnimations();
    initializeCruiseLogos();
    initializeRippleEffects();
    initializeButtons();

});


// =====================================================
// BUTTON HANDLING
// =====================================================

function initializeButtons() {

    // Handle buttons that scroll to the contact section
    const contactButtons = document.querySelectorAll(
        '.hero-banner-button, .hero-button'
    );

    contactButtons.forEach(function (button) {

        button.addEventListener('click', function () {
            scrollToContact();
        });

    });

    // Handle reset button
    const resetButtons = document.querySelectorAll(
        '.reset-button'
    );

    resetButtons.forEach(function (button) {

        button.addEventListener('click', function () {
            resetForm();
        });

    });

}


// =====================================================
// CONTACT FORM - WEB3FORMS
// =====================================================

function initializeContactForm() {

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');

    if (!form) {
        return;
    }

    form.addEventListener('submit', async function (e) {

        e.preventDefault();

        const formData = new FormData(form);

        // Basic validation
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name || !email || !message) {

            showToast(
                'Please fill in all required fields.',
                'error'
            );

            return;
        }

        if (!isValidEmail(email)) {

            showToast(
                'Please enter a valid email address.',
                'error'
            );

            return;
        }

        // Show loading state
        const submitButton = form.querySelector('.submit-button');

        if (!submitButton) {
            return;
        }

        const originalText = submitButton.textContent;

        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {

            // Submit form securely to Web3Forms
            const response = await fetch(
                'https://api.web3forms.com/submit',
                {
                    method: 'POST',
                    body: formData
                }
            );

            const result = await response.json();

            if (result.success) {

                // Hide form and display success message
                form.style.display = 'none';

                if (successMessage) {
                    successMessage.classList.remove('hidden');
                }

                // Refresh Lucide icons
                setTimeout(function () {

                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }

                }, 100);

            } else {

                throw new Error(
                    result.message || 'Form submission failed'
                );

            }

        } catch (error) {

            console.error(
                'Form submission error:',
                error
            );

            showToast(
                'There was an error sending your message. Please try again.',
                'error'
            );

            submitButton.textContent = originalText;
            submitButton.disabled = false;

        }

    });

}


// =====================================================
// RESET CONTACT FORM
// =====================================================

function resetForm() {

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');

    if (!form) {
        return;
    }

    form.reset();

    form.style.display = 'flex';

    // Restore the submit button after a successful submission
    const submitButton = form.querySelector('.submit-button');

    if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML =
            'Send Message <i data-lucide="send" class="button-icon"></i>';
    }

    if (successMessage) {
        successMessage.classList.add('hidden');
    }

    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

}


// =====================================================
// SCROLL TO CONTACT SECTION
// =====================================================

function scrollToContact() {

    const contactSection = document.getElementById('contact');

    if (contactSection) {

        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }

}


// =====================================================
// EMAIL VALIDATION
// =====================================================

function isValidEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);

}


// =====================================================
// TOAST NOTIFICATIONS
// =====================================================

function showToast(message, type = 'success') {

    const toast = document.getElementById('toast');

    if (!toast) {
        return;
    }

    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');

    if (toastMessage) {
        toastMessage.textContent = message;
    }

    if (toastIcon) {

        if (type === 'error') {

            toastIcon.innerHTML =
                '<circle cx="12" cy="12" r="10"/>' +
                '<line x1="15" y1="9" x2="9" y2="15"/>' +
                '<line x1="9" y1="9" x2="15" y2="15"/>';

            toastIcon.style.color = '#ef4444';

        } else {

            toastIcon.innerHTML =
                '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>' +
                '<polyline points="22,4 12,14.01 9,11.01"/>';

            toastIcon.style.color = '#10b981';

        }

    }

    toast.classList.remove('hidden');
    toast.classList.add('show');

    // Hide toast after five seconds
    setTimeout(function () {

        toast.classList.remove('show');

        setTimeout(function () {
            toast.classList.add('hidden');
        }, 300);

    }, 5000);

}


// =====================================================
// SCROLL ANIMATIONS
// =====================================================

function initializeScrollAnimations() {

    if (!('IntersectionObserver' in window)) {
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }

        });

    }, observerOptions);

    // Journey cards, profiles and cruise logos
    const animateElements = document.querySelectorAll(
        '.journey-card, .profile-card, .cruise-logo'
    );

    animateElements.forEach(function (element) {
        observer.observe(element);
    });

    // Expertise cards with staggered animation
    const expertiseCards = document.querySelectorAll(
        '.expertise-card'
    );

    expertiseCards.forEach(function (card, index) {

        const expertiseObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        setTimeout(function () {

                            entry.target.classList.add(
                                'animate-fadeInUp'
                            );

                        }, index * 100);

                        expertiseObserver.unobserve(entry.target);

                    }

                });

            },
            observerOptions
        );

        expertiseObserver.observe(card);

    });

}


// =====================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =====================================================

document.addEventListener('click', function (e) {

    const link = e.target.closest('a[href^="#"]');

    if (!link) {
        return;
    }

    const href = link.getAttribute('href');

    if (!href || href === '#') {
        return;
    }

    const target = document.getElementById(href.substring(1));

    if (target) {

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }

});


// =====================================================
// HERO SECTION SCROLL EFFECT
// =====================================================

window.addEventListener('scroll', function () {

    const heroSection = document.querySelector('.hero-section');
    const heroBackground = document.querySelector('.hero-background');

    if (!heroSection || !heroBackground) {
        return;
    }

    const heroHeight = heroSection.offsetHeight;

    if (!heroHeight) {
        return;
    }

    const scrolled = window.pageYOffset / heroHeight;

    if (scrolled < 1) {

        heroBackground.style.transform =
            `translateY(${scrolled * 30}%)`;

        heroBackground.style.opacity =
            0.4 - (scrolled * 0.2);

    }

});


// =====================================================
// CRUISE LOGO LOADING ANIMATIONS
// =====================================================

function initializeCruiseLogos() {

    const cruiseLogos = document.querySelectorAll(
        '.cruise-logo img'
    );

    cruiseLogos.forEach(function (img, index) {

        img.addEventListener('load', function () {

            setTimeout(function () {

                if (img.parentElement) {

                    img.parentElement.style.opacity = '1';

                    img.parentElement.style.transform =
                        'translateY(0)';

                }

            }, index * 100);

        });

        // Initial animation state
        if (img.parentElement) {

            img.parentElement.style.opacity = '0';

            img.parentElement.style.transform =
                'translateY(20px)';

            img.parentElement.style.transition =
                'all 0.5s ease';

        }

        // Handle images already loaded from browser cache
        if (img.complete && img.naturalWidth > 0) {

            setTimeout(function () {

                if (img.parentElement) {

                    img.parentElement.style.opacity = '1';

                    img.parentElement.style.transform =
                        'translateY(0)';

                }

            }, index * 100);

        }

    });

}


// =====================================================
// BUTTON RIPPLE EFFECTS
// =====================================================

function addRippleEffect(button) {

    button.addEventListener('click', function (e) {

        const ripple = document.createElement('span');

        const rect = button.getBoundingClientRect();

        const size = Math.max(
            rect.width,
            rect.height
        );

        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';

        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(function () {
            ripple.remove();
        }, 600);

    });

}


// =====================================================
// INITIALISE RIPPLE EFFECTS
// =====================================================

function initializeRippleEffects() {

    const buttons = document.querySelectorAll(
        '.hero-button, .submit-button'
    );

    buttons.forEach(function (button) {
        addRippleEffect(button);
    });

}


// =====================================================
// END OF SCRIPT
// =====================================================
