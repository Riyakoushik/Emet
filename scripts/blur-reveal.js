/**
 * Blur Reveal Effect - Vanilla JS Implementation
 * Replicates the Spell UI @spell/blur-reveal effect.
 */

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.blur-reveal');

  revealElements.forEach((el) => {
    const text = el.textContent.trim();
    const duration = el.dataset.duration || 0.6;
    const stagger = el.dataset.stagger || 0.02;
    const baseDelay = parseFloat(el.dataset.delay || 0);

    // Clear and build spans
    el.textContent = '';
    
    // Split into words first to handle line breaks better
    const words = text.split(' ');
    
    let charIndex = 0;
    words.forEach((word, wordIdx) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.whiteSpace = 'nowrap';
      wordSpan.style.display = 'inline-block';

      word.split('').forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.className = 'blur-reveal-char';
        charSpan.style.transitionDuration = `${duration}s`;
        charSpan.style.transitionDelay = `${baseDelay + charIndex * stagger}s`;
        wordSpan.appendChild(charSpan);
        charIndex++;
      });

      el.appendChild(wordSpan);

      // Add space between words
      if (wordIdx < words.length - 1) {
        const space = document.createTextNode('\u00A0');
        el.appendChild(space);
      }
    });

    // Trigger animation
    requestAnimationFrame(() => {
      el.querySelectorAll('.blur-reveal-char').forEach(span => {
        span.classList.add('visible');
      });
    });
  });
});
