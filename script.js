// REVEAL ANIMATIONS & PROGRESS BARS
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");

      // Animate progress bars
      const progressBars = entry.target.querySelectorAll('.progress-bar div');
      progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-width');
        bar.style.width = percent;
        const label = document.createElement('span');
        label.textContent = percent;
        bar.parentElement.appendChild(label);
      });
    }
  });
}, { threshold: 0.2 });
reveals.forEach(el => observer.observe(el));

document.querySelectorAll('.progress-bar').forEach(bar => {
  const value = bar.querySelector('div').getAttribute('data-width');
  const percent = document.createElement('span');
  percent.className = 'skill-percent';
  percent.innerText = value;
  bar.parentElement.insertBefore(percent, bar.nextSibling);
});


// DARK/LIGHT MODE TOGGLE
const themeIcon = document.getElementById('theme-icon');
themeIcon.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeIcon.classList.toggle('fa-moon');
  themeIcon.classList.toggle('fa-sun');
});

const typingText = document.getElementById("typing-text");
const phrases = [
  "Full Stack .NET Developer"
];
let i = 0, j = 0;
let currentPhrase = [], isDeleting = false;
function type() {
  if (i >= phrases.length) i = 0;
  let fullText = phrases[i];
  if (!isDeleting) {
    currentPhrase.push(fullText[j]);
    typingText.textContent = currentPhrase.join('');
    j++;
    if (j === fullText.length) { isDeleting = true; setTimeout(type, 1500); return; }
  } else {
    currentPhrase.pop();
    typingText.textContent = currentPhrase.join('');
    if (currentPhrase.length === 0) { isDeleting = false; i++; j = 0; }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
document.addEventListener("DOMContentLoaded", type);