document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('caForms');
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lasttname');
    const address = document.getElementById('address');
    const contactNumber = document.getElementById('contactnum');
    const emailAddress = document.getElementById('emailadd');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmpass');
    const acceptRadio = document.getElementById('acceptradio');
    const submitButton = document.getElementById('signupbtn');

    form.addEventListener('submit', function (event) {
        let isValid = true;

 
        if (firstName.value.trim() === '') {
            isValid = false;
            alert('Please enter your first name.');
        }

  
        if (lastName.value.trim() === '') {
            isValid = false;
            alert('Please enter your last name.');
        }

  
        if (address.value.trim() === '') {
            isValid = false;
            alert('Please enter your address.');
        }

       const contactNumberValue = contactNumber.value.trim();
        if (contactNumberValue === '') {
            isValid = false;
            alert('Please enter your contact number.');
        } else if (!isValidNumber(contactNumberValue)) {
            isValid = false;
            alert('Contact number should only contain numbers.');
        }

        if (emailAddress.value.trim() === '') {
            isValid = false;
            alert('Please enter your email address.');
        } else if (!isValidEmail(emailAddress.value)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

   
        const passwordValue = password.value.trim();
        if (passwordValue === '') {
            isValid = false;
            alert('Please enter a password.');
        } else if (!isValidPassword(passwordValue)) {
            isValid = false;
            alert('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
        } else if (passwordValue !== confirmPassword.value) {
            isValid = false;
            alert('Passwords do not match.');
        }
      
        if (!acceptRadio.checked) {
            isValid = false;
            alert('Please accept the newsletter to continue.');
        }

        if (!isValid) {

            event.preventDefault(); 

        }  else  {
      
            window.location.href = 'login.html';
          }
    });


    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    function isValidNumber(number) {
        const numberPattern = /^[0-9]+$/;
        return numberPattern.test(number);
    }
    
    function isValidPassword(password) {
        
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    }
});

