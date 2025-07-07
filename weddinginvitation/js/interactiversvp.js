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