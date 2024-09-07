const navLinks = document.querySelectorAll('.nav-links > li');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        const dropdown = link.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    });

    link.addEventListener('mouseout', () => {
        const dropdown = link.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const slideElements = document.querySelectorAll('.slide-in');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active'); rt
          } else {
              entry.target.classList.remove('active'); 
          }
      });
  }, {
      threshold: 0.1 
  });

  slideElements.forEach(slide => {
      observer.observe(slide);
  });
});
