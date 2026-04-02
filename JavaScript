document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Theme Toggle (Dark/Light Mode) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check local storage for user preference
    const savedTheme = localStorage.getItem('galaxy-theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('galaxy-theme', newTheme);
    });

    // --- 2. Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Account for sticky header offset
                const headerOffset = document.querySelector('.site-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 3. Form Submission Handler (Mock logic) ---
    const bookingForm = document.getElementById('booking-form');
    if(bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            // Visual feedback for conversion
            btn.innerText = "Transmitting...";
            btn.style.backgroundColor = "#45a29e";
            btn.disabled = true;

            // Simulate API call delay
            setTimeout(() => {
                alert("Transmission successful! The Galaxy Recording Co. team will contact you shortly.");
                bookingForm.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = "";
                btn.disabled = false;
            }, 1500);
        });
    }

    // --- 4. Exit Intent Popup Logic (Optional hook) ---
    let exitIntentTriggered = false;
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !exitIntentTriggered) {
            exitIntentTriggered = true;
            // You can initialize a modal here for "Free Consultation Offer"
            console.log("Exit intent triggered. Display modal here.");
        }
    });
});
