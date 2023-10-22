document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const telephoneInput = form.querySelector('input[type="telephone"]');
    const nameInput = form.querySelector('input[type="name"]');
    const questionInput = form.querySelector('input[type="question"]');

    form.addEventListener('submit', function (e) {
        let isValid = true;

        // Validate Email Address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Invalid Email Address');
            isValid = false;
        }

        // Validate Password
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            alert('Password must be at least 8 characters containing both letters and numbers');
            isValid = false;
        }

        // Validate Telephone Number
        const telephonePattern = /^\+62\d{10}$/;
        if (!telephonePattern.test(telephoneInput.value)) {
            if (!telephoneInput.value.includes('+62')) {
                alert('Telephone number must start with +62');
            } else if (telephoneInput.value.length < 13) {
                alert('Telephone number must be at least 13 characters');
            }
            isValid = false;
        }

        // Validate Full Name
        if (nameInput.value.trim() === '') {
            alert('Full Name is required');
            isValid = false;
        }

        // You can add more specific validation for the question field if needed.

        if (!isValid) {
            e.preventDefault(); // Prevent form submission
        }
    });
});
