document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const clickMeButton = document.getElementById('click-me');
    const clickCount = document.getElementById('click-count');
    let count = 0;

    // Form validation
    contactForm.addEventListener('submit', (e) => {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (!isValid) {
            e.preventDefault();
        }
    });

    // Interactive button
    clickMeButton.addEventListener('click', () => {
        count++;
        clickCount.textContent = `You have clicked the button ${count} times.`;
    });
});