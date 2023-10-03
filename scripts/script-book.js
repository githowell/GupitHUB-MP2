// Validation form for booking 

document.getElementById('bookingForm').addEventListener('submit', function (event) {
  // Get form elements
  var dateInput = document.getElementById('date');
  var timeRadioButtons = document.getElementsByName('time');


  // Initialize error message
  var errorMessage = '';

  // Check if date is selected
  if (!dateInput.value) {
      errorMessage += 'Please select a date.\n';
  }

  // Check if a time slot is selected
  var timeSelected = false;
  for (var i = 0; i < timeRadioButtons.length; i++) {
      if (timeRadioButtons[i].checked) {
          timeSelected = true;
          break;
      }
  }
  if (!timeSelected) {
      errorMessage += 'Please select a time slot.\n';
  }


  // If there are any errors, prevent form submission and display the error message
  if (errorMessage !== '') {
      event.preventDefault();
      alert(errorMessage);
  }
});



const timeDropDown = document.getElementById("chooseAmOrPM");
                const scheduleTable = document.getElementById("scheduleTable");
        
                timeDropDown.addEventListener("change", function() {
                    const selectedType = this.value;
        
                    if (selectedType === "AM" || selectedType === "PM") {
                        scheduleTable.style.display = "table";
                    } else {
                        scheduleTable.style.display = "none";
                    }
        
                    const rows = scheduleTable.querySelectorAll("tbody tr");
        
                    rows.forEach(row => {
                        const chooseTime = row.querySelector("td:nth-child(2)").textContent;
                        row.style.display = selectedType === "" || chooseTime === selectedType ? "" : "none";
                    });
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




//hero Photo Transition
    document.addEventListener('DOMContentLoaded', function() {
            const bookNowButton = document.querySelector('.btn-red');
            const hoverImage = document.querySelector('.hover-img');

            bookNowButton.addEventListener('mouseenter', function() {
                hoverImage.style.opacity = '1';
            });

            bookNowButton.addEventListener('mouseleave', function() {
                hoverImage.style.opacity = '0';
            });
        });

