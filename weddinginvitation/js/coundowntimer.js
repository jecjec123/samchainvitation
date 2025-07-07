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