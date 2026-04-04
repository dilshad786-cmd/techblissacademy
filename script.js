// === PRELOADER LOGIC (FIXED) ===
// This version strictly waits 3 seconds as soon as the HTML is ready, 
// without waiting for heavy images to finish downloading.
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0'; // Start fade out

            // Wait for the CSS fade transition to finish (0.5s), then hide it completely
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.remove('loading'); // Allow scrolling again
            }, 500);
        }
    }, 3000); // Strictly 3 seconds
});

// === FOUNDERS AUTO-SLIDER ===
const slides = document.querySelectorAll('.founder-slide');
let currentSlide = 0;

function nextSlide() {
    // Only run if there are slides present
    if (slides.length > 0) {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');

        // Move to next slide, loop back to 0 if at the end
        currentSlide = (currentSlide + 1) % slides.length;

        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }
}

// Change slide every 4 seconds
setInterval(nextSlide, 4000);

// === FOUNDER BOX CLICK SPLASH EFFECT ===
function triggerSplash() {
    const box = document.getElementById('founderBox');
    if (box) {
        // Remove class if it exists to allow re-triggering on rapid clicks
        box.classList.remove('splash-active');

        // Force a reflow (browser trick to restart animation)
        void box.offsetWidth;

        // Add class back to trigger the CSS animation
        box.classList.add('splash-active');
    }
}

// === CONTACT FORM SUBMISSION ===// === CONTACT FORM SUBMISSION ===
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message Sent successfully! We will get back to you soon.');
        this.reset(); // Clears the form after submission
    });
}