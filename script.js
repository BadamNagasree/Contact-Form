document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  
  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  document.getElementById('successMessage').textContent = '';
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

 
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address.';
    isValid = false;
  }

  if (phone && !/^\d{7,15}$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'Enter a valid phone number.';
    isValid = false;
  }

  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('successMessage').style.color = '#28BE2B';
    document.getElementById('successMessage').textContent = 'Message submitted successfully!';
    this.reset();
  }
});
