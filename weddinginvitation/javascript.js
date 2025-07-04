const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

const openMenu = () => {
  mobileMenu.classList.remove('invisible', 'opacity-0');
  document.body.style.overflow = 'hidden';
  
  // Staggered animation for links
  mobileLinks.forEach((link, index) => {
    // Reset state before animating
    link.classList.remove('opacity-100', 'translate-y-0');
    link.classList.add('opacity-0', 'translate-y-4');
    
    setTimeout(() => {
      link.classList.add('transition-all', 'duration-300', 'ease-in-out');
      link.classList.add('opacity-100', 'translate-y-0');
    }, (index + 1) * 100); // 100ms delay between each link
  });
};

const closeMenu = () => {
  mobileMenu.classList.add('opacity-0');
  setTimeout(() => {
    mobileMenu.classList.add('invisible');
  }, 300); // Wait for transition to finish before hiding
  document.body.style.overflow = 'auto';
};

menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

  // --- Scroll Animation Logic ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animate only once
        }
    });
  }, {
    threshold: 0.2 // Trigger when 10% of the element is visible
  });

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach((el) => observer.observe(el));

  // --- ATTENTION: New JavaScript for Countdown Timer ---
  document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    const countdownDate = new Date("December 18, 2025 00:00:00").getTime();

    // Update the count down every 1 second
    const countdownInterval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the count down date
      const distance = countdownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Display the result in the elements
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
      
      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").classList.add("hidden");
        document.getElementById("countdown-expired").classList.remove("hidden");
      }
    }, 1000);
  });

  // --- New JavaScript for Interactive RSVP Cards ---
document.addEventListener('DOMContentLoaded', () => {
  const rsvpOptions = document.querySelectorAll('.rsvp-option');
  
  rsvpOptions.forEach(option => {
    option.addEventListener('click', () => {
      // First, reset all options to their default style
      rsvpOptions.forEach(opt => {
        opt.classList.remove('bg-sage-green-100', 'border-sage-green-500');
        opt.classList.add('bg-white', 'border-gray-300');
        opt.querySelector('span:last-child').classList.remove('text-sage-green-900');
        opt.querySelector('span:last-child').classList.add('text-gray-700');
      });

      // Then, apply the "selected" style to the clicked option
      option.classList.add('bg-sage-green-100', 'border-sage-green-500');
      option.classList.remove('bg-white', 'border-gray-300');
      option.querySelector('span:last-child').classList.add('text-sage-green-900');
      option.querySelector('span:last-child').classList.remove('text-gray-700');
      
      // Programmatically check the hidden radio button inside
      const radioInput = option.querySelector('input[type="radio"]');
      if (radioInput) {
        radioInput.checked = true;
      }
    });
  });
});

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

// --- JavaScript for Hashtag Copy Button ---
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-btn');
  const hashtagText = document.getElementById('hashtag');
  const copySuccessMsg = document.getElementById('copy-success');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      // Copy the text to the clipboard
      navigator.clipboard.writeText(hashtagText.innerText).then(() => {
        // Show success message
        copySuccessMsg.classList.remove('opacity-0');
        // Hide success message after 2 seconds
        setTimeout(() => {
          copySuccessMsg.classList.add('opacity-0');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }
});
