document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Signup form validation and submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullname = signupForm.fullname.value.trim();
            const email = signupForm.email.value.trim();
            const phone = signupForm.phone.value.trim();
            const password = signupForm.password.value;

            if (!fullname || !email || !phone || !password) {
                alert('Please fill in all fields.');
                return;
            }

            // Basic email format check
            const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Basic phone number check (digits only, length 10)
            const phonePattern = /^\\d{10}$/;
            if (!phonePattern.test(phone)) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }

            alert('Signup successful! (This is a demo, no data is sent.)');
            signupForm.reset();
        });
    }
});
