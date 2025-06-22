// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Modal functionality
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

document.querySelectorAll('.close').forEach(span => {
  span.addEventListener('click', () => {
    const modalId = span.getAttribute('data-close');
    document.getElementById(modalId).style.display = 'none';
  });
});

// Close modal when clicking outside modal-content
window.addEventListener('click', event => {
  document.querySelectorAll('.modal').forEach(modal => {
    if(event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
