
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form Handling
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.querySelector('.submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            submitButton.disabled = true;

            try {

                const formData = new FormData(contactForm);
                const formDataObject = Object.fromEntries(formData);
                
                contactForm.reset();
            } catch (error) {
                showMessage('Sorry, there was an error. Please try again.', 'error');
                console.error('Form submission error:', error);
            } finally {
                submitButton.disabled = false;
            }
        });
    }
});


