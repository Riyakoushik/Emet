// Emet Landing Page – Main Scripts

document.addEventListener('DOMContentLoaded', () => {

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Floating navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 100);
  });

  // Tab switching for showcase section
  const tabLinks = document.querySelectorAll('.tab-link');
  const showcaseImage = document.getElementById('showcase-main-image');

  if (tabLinks.length > 0 && showcaseImage) {
    tabLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        // Update active tab
        tabLinks.forEach(item => item.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');

        // Crossfade to new image
        showcaseImage.style.transition = 'opacity 0.3s ease';
        showcaseImage.style.opacity = '0';

        setTimeout(() => {
          const newSrc = link.getAttribute('data-image');
          if (newSrc) {
            showcaseImage.src = newSrc;
          }
          showcaseImage.style.opacity = '1';
        }, 300);
      });
    });
  }
});
