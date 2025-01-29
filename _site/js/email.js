const btn = document.getElementById('submit');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Change the button text while sending
    btn.value = 'Sending...';

    // Replace these values with your actual Email.js service and template IDs
    const serviceID = 'default_service';
    const templateID = 'template_2arolkq';

    // Use emailjs.sendForm to send the form data
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            // To clear the form after successful submission
            const inputs = document.querySelectorAll('#Full-name, #email, #Phone-Number, #item, #message');
            inputs.forEach(input => {
                input.value = '';
            });

            // Show success message
            successMessage.innerText = 'Successfully send';

            // Hide the success message after a few seconds (adjust the timeout as needed)
            setTimeout(() => {
                successMessage.innerText = '';
            }, 5000);

            // Restore the button text
            btn.value = 'Submit';
        }, (err) => {
            // Handle errors
            errorMessage.innerText = 'Try again';
            console.error(JSON.stringify(err));

            // Hide the error message after a few seconds (adjust the timeout as needed)
            setTimeout(() => {
                errorMessage.innerText = '';
            }, 5000);

            // Restore the button text
            btn.value = 'Submit';
        });
});

function submitForm(event) {
    event.preventDefault();

    var emailField = document.getElementById('newsletter-email');
    var email = emailField.value;
    var responseDiv = document.getElementById('newsletter-response');
    
    var formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('b_70db33e24d11e2ebd2fb1c218_49353124b6', ''); // This is the hidden field to prevent bot signups

    fetch('https://github.us22.list-manage.com/subscribe/post?u=70db33e24d11e2ebd2fb1c218&id=49353124b6&f_id=008fd0e1f0', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(function(response) {
        showMessage('Thank you for subscribing!');
        emailField.value = ''; // Clear the email field
    }).catch(function(error) {
        showMessage('An error occurred. Please try again.');
    });
}

function showMessage(message) {
    var responseDiv = document.getElementById('newsletter-response');
    responseDiv.innerText = message;
    responseDiv.style.display = 'block';
    
    // Hide the message after 5 seconds
    setTimeout(function() {
        responseDiv.style.display = 'none';
    }, 5000);
}