// Filter chips
document.querySelectorAll('.fc').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fc').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// License modal
let selectedPrice = 999;
let durMult = 1;

function openLicense(card) {
  const name = card.dataset.name;
  const meta = card.dataset.meta;
  const tags = card.querySelector('.mc-tags').innerHTML;

  document.getElementById('modal-title').textContent = name + ' — Choose License';
  document.getElementById('modal-glyph').textContent = card.querySelector('.mc-glyph').textContent;
  document.getElementById('modal-meta').textContent = meta;
  document.getElementById('modal-lic-tags').innerHTML = tags;

  // Reset
  document.querySelectorAll('.mlc').forEach(m => m.classList.remove('sel'));
  document.querySelectorAll('.mlc')[0].classList.add('sel');
  selectedPrice = 999;
  durMult = 1;
  document.getElementById('dur-label').style.display = 'none';
  document.getElementById('dur-row').style.display = 'none';
  document.querySelectorAll('.dur').forEach(d => d.classList.remove('sel'));
  document.querySelectorAll('.dur')[0].classList.add('sel');
  updateTotal();

  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function selectLic(el, type, price) {
  document.querySelectorAll('.mlc').forEach(m => m.classList.remove('sel'));
  el.classList.add('sel');
  selectedPrice = price;
  durMult = 1;

  const showDur = ['digital', 'broadcast', 'film'].includes(type);
  document.getElementById('dur-label').style.display = showDur ? 'block' : 'none';
  document.getElementById('dur-row').style.display = showDur ? 'flex' : 'none';
  if (showDur) {
    document.querySelectorAll('.dur').forEach(d => d.classList.remove('sel'));
    document.querySelectorAll('.dur')[0].classList.add('sel');
    durMult = 1;
  }
  updateTotal();
}

function selectDur(el, mult) {
  document.querySelectorAll('.dur').forEach(d => d.classList.remove('sel'));
  el.classList.add('sel');
  durMult = mult;
  updateTotal();
}

function updateTotal() {
  const total = Math.round(selectedPrice * durMult);
  document.getElementById('modal-total').textContent = '₹' + total.toLocaleString('en-IN');
}

// Waitlist form
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('waitlist-form').classList.add('hidden');
  document.getElementById('success-msg').classList.remove('hidden');
}

// Scroll fade-in
const fadeEls = document.querySelectorAll('.step-card, .lic-card, .ent-feat, .perk');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transition = `opacity 0.45s ease ${(i % 4) * 0.08}s, transform 0.45s ease ${(i % 4) * 0.08}s`;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  obs.observe(el);
});

// Nav active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'rgba(240,236,227,1)' : 'rgba(240,236,227,0.6)';
      });
    }
  });
}, { threshold: 0.4 }).observe;
