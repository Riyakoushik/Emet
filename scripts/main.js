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
  const img1 = document.getElementById('showcase-image-1');
  const img2 = document.getElementById('showcase-image-2');
  const label = document.getElementById('showcase-label');

  if (tabLinks.length > 0 && img1 && img2) {
    tabLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        // Update active tab button
        tabLinks.forEach(item => item.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');

        const newSrc = link.getAttribute('data-image');
        const newText = link.textContent.replace(/[👤📖🔄🛡️]\s+/g, '').toUpperCase();
        
        // Determine which image is currently active and swap
        const activeImg = img1.classList.contains('active') ? img1 : img2;
        const nextImg = activeImg === img1 ? img2 : img1;

        if (newSrc && activeImg.src.indexOf(newSrc) === -1) {
          nextImg.src = newSrc;
          
          // Wait for a tiny tick to ensure src is set before transition
          requestAnimationFrame(() => {
            activeImg.classList.remove('active');
            nextImg.classList.add('active');
            if (label) label.textContent = newText;
          });
        }
      });
    });
  }

});
