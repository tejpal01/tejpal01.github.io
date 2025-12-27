// ===== Theme Toggle =====
const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
icon.className = savedTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';

toggle.addEventListener('click', () => {
  const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  icon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
});

// ===== Reveal Animations =====
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
