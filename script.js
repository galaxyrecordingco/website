document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Sticky Header Background Change on Scroll ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Dark/Light Theme Toggle ---
    const themeBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    
    // Check local storage
    const currentTheme = localStorage.getItem('galaxy-studio-theme');
    if (currentTheme) {
        htmlEl.setAttribute('data-theme', currentTheme);
    }

    themeBtn.addEventListener('click', () => {
        const theme = htmlEl.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('galaxy-studio-theme', newTheme);
    });

    // --- 3. Smooth Scrolling for Nav Links ---
    document.querySelectorAll('.main-nav a, .btn[href^="#"], .btn-text').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Adjust for sticky header height
                const headerHeight = header.offsetHeight;
                const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: elementTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 4. Booking Form Simulation ---
    const bookingForm = document.getElementById('bookingForm');
    if(bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = "Transmitting Request...";
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";

            // Simulate API interaction
            setTimeout(() => {
                alert("Session Request Received. A Galaxy studio manager will contact you shortly to confirm the dates.");
                bookingForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
            }, 1500);
        });
    }
});
