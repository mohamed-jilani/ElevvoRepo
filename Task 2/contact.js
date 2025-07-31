document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    clearErrors();
    
    if (validateForm()) {
      // Show loading state
      const submitBtn = form.querySelector('.submit-btn');
      const originalBtnText = submitBtn.querySelector('.btn-text').textContent;
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = 'Sending...';
      
      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        form.reset();
        showSuccess("Thank you! Your message has been sent successfully. We'll get back to you soon.");
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = originalBtnText;
      }, 1500);
    }
  });

  function validateForm() {
    let isValid = true;

    // Name validation
    const fullName = document.getElementById('fullName');
    if (fullName.value.trim() === '') {
      showError(fullName, 'Please enter your full name');
      isValid = false;
    } else if (fullName.value.trim().length < 3) {
      showError(fullName, 'Name must be at least 3 characters');
      isValid = false;
    }

    // Email validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
      showError(email, 'Please enter your email address');
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      showError(email, 'Please enter a valid email address');
      isValid = false;
    }

    // Message validation
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
      showError(message, 'Please enter your message');
      isValid = false;
    } else if (message.value.trim().length < 20) {
      showError(message, 'Message should be at least 20 characters');
      isValid = false;
    }

    return isValid;
  }

  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    
    input.classList.add('error');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }

  function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => {
      error.style.display = 'none';
    });
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.classList.remove('error');
    });
  }

  function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  }
});