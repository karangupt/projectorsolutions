// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Mobile dropdown toggle (tap to expand on small screens)
document.querySelectorAll('.has-dropdown > a').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 720) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

// Close mobile nav after clicking a link
document.querySelectorAll('.main-nav a:not(.has-dropdown > a)').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});

// Simple contact form handler -> opens WhatsApp with prefilled message
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(quoteForm);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const location = data.get('location') || '';
    const message = data.get('message') || '';

    const text = `Hi, I'm ${name} (${phone}). Location: ${location}. ${message}`;
    const url = `https://wa.me/919819952683?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });
}
