// Waitlist form submission
function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('waitlist-form');
  const success = document.getElementById('success-msg');
  form.classList.add('hidden');
  success.classList.remove('hidden');
  // In production: POST form data to your backend / Airtable / Notion API here
}

// Smooth nav active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'rgba(240,236,227,1)'
          : 'rgba(240,236,227,0.6)';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Fade in on scroll
const fadeEls = document.querySelectorAll('.step-card, .lic-card, .ent-feat, .perk');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  fadeObserver.observe(el);
});
