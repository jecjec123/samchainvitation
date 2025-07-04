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

