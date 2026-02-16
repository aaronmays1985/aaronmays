/* Shrink the header on scroll */
const header = document.querySelector('header > div');
const initialHeight = 120;

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

/* Make the logo grid expand when the button is clicked */
document.addEventListener('DOMContentLoaded', () => {
const logoGrid = document.querySelector('.logo-grid');
const expandButton = document.querySelector('.logo-button-expand');

if (!logoGrid || !expandButton) return;

expandButton.addEventListener('click', (e) => {
    e.preventDefault(); // stop "#" from jumping to top
    logoGrid.classList.add('expanded');
});
});
