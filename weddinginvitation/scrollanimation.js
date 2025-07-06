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
