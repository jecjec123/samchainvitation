// -- Form to google Spreadsheets --

document.addEventListener('DOMContentLoaded', () => {
  // -- Your existing scripts for Menu, Animations, Countdown, etc. --

  // --- SCRIPT FOR GOOGLE SHEETS FORM SUBMISSION ---
  const rsvpForm = document.getElementById('rsvp-form');
  const formStatus = document.getElementById('form-status');
  
  // ATTENTION: PASTE YOUR GOOGLE SCRIPT URL HERE
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzMQdocKChw0-otAZ5W_ca0Z3AgvmgLTC4vIYpkBGpLHycPhqskofR4XYaCE4B_glEM/exec';

  rsvpForm.addEventListener('submit', e => {
    e.preventDefault(); // Stop the default form submission
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Disable button to prevent double clicks
    submitButton.innerHTML = 'Sending...';

    fetch(scriptURL, { method: 'POST', body: new FormData(rsvpForm)})
      .then(response => {
        formStatus.innerHTML = "Thank you! Your RSVP has been sent.";
        formStatus.classList.add('text-sage-green-700');
        formStatus.classList.remove('text-red-600');
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send RSVP';
        rsvpForm.reset();
      })
      .catch(error => {
        formStatus.innerHTML = "Oops! There was a problem. Please try again.";
        formStatus.classList.add('text-red-600');
        formStatus.classList.remove('text-sage-green-700');
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send RSVP';
        console.error('Error!', error.message);
      });
  });
});
