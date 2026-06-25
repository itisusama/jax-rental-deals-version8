/* jaxrentaldeals — script.js */

// === MOBILE NAV ===
(function () {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-nav')) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    }
  });
})();

// === FAVORITE TOGGLE ===
document.querySelectorAll('.prop-fav').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('saved');
    btn.textContent = btn.classList.contains('saved') ? '♥' : '♡';
  });
});

// === NEIGHBORHOOD FILTER (index page) ===
(function () {
  const pills = document.querySelectorAll('.neighborhood-pill[data-filter]');
  const cards = document.querySelectorAll('.prop-card[data-neighborhood]');
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.dataset.filter;

      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.neighborhood === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
})();

// === CONTACT FORM ===
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message sent! ✓';
    btn.style.background = 'var(--palm)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send message';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3500);
  });
})();

// === SEARCH BAR ===
(function () {
  const form = document.querySelector('.searchbar');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = form.querySelector('input').value.trim();
    if (q) window.location.href = `properties.html?q=${encodeURIComponent(q)}`;
  });
})();
