// Form Validation 

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
      let isValid = true;

      // Validate Name
      const name = document.getElementById('name').value.trim();
      if (name === '') {
          isValid = false;
          alert('Please enter your Name.');
      }

      // Validate Contact Number
      const contactNumber = document.getElementById('contactNumber').value.trim();
      if (contactNumber === '') {
          isValid = false;
          alert('Please enter your Contact Number.');
      }

      // Validate Email
      const email = document.getElementById('email').value.trim();
      if (email === '') {
          isValid = false;
          alert('Please enter your Email.');
      } else if (!isValidEmail(email)) {
          isValid = false;
          alert('Please enter a valid Email.');
      }

      // Validate Message
      const message = document.getElementById('message').value.trim();
      if (message === '') {
          isValid = false;
          alert('Please enter your Message.');
      }

      if (!isValid) {
          event.preventDefault(); 
      } else {
        alert("Thank you for subscribing! We're thrilled to have you as part of our hub.")
      }
  });

  function isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
  }
});


//TOggle Function
const themeToggleButton = document.querySelector('.theme-toggle');
    const navbar = document.querySelector('.navbar');
    
    themeToggleButton.addEventListener('click', () => {
      const body = document.body;
      
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');
      
      navbar.classList.toggle('navbar-dark');
      navbar.classList.toggle('navbar-light');
      
      // Update button text based on the current theme
      if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Light Mode';
      } else {
        themeToggleButton.textContent = 'Dark Mode';
      }
    });


 //Sticky script
 document.getElementById("messenger-popover-trigger").addEventListener("click", function() {
  var content = document.getElementById("messenger-popover-content");
  content.style.display = "block";
});

document.getElementById("close-popover").addEventListener("click", function() {
  var content = document.getElementById("messenger-popover-content");
  content.style.display = "none";
});

