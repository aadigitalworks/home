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