

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



    document.addEventListener('DOMContentLoaded', function() {
        const barberButtons = document.querySelectorAll('.barber-button');
    
        barberButtons.forEach(button => {
            button.addEventListener('click', function() {
                const barberName = button.textContent;
                const modalId = button.getAttribute('data-bs-target');
                const modal = document.querySelector(modalId);
                const barberModalLabel = modal.querySelector('.modal-title');
                const barberModalBody = modal.querySelector('.modal-body');
                
            });
        });
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

