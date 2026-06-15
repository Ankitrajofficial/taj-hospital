// ===== Mobile nav toggle =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

// Close mobile menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ===== Animated counters (stats + achievements) =====
const fmt = (n, decimal) => decimal
  ? n.toFixed(1)
  : Math.round(n).toLocaleString('en-IN');

const counters = document.querySelectorAll('.stat__num, .achieve__num');
const statIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const isDecimal = !Number.isInteger(target);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = fmt(target * eased, isDecimal);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(target, isDecimal);
    }
    requestAnimationFrame(tick);
    statIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => statIO.observe(el));

// ===== FAQ accordion (one open at a time) =====
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) faqItems.forEach(o => { if (o !== item) o.open = false; });
  });
});

// ===== Back to top =====
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 600);
}, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== Scroll-spy: highlight active nav link =====
const navLinks = [...nav.querySelectorAll('a')];
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);
const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle(
      'active', a.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

// ===== Enquiry form (front-end only) =====
const form = document.getElementById('enquiryForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').trim();
  const phone = (data.get('phone') || '').trim();

  if (!name || !phone) {
    status.textContent = 'Please enter your name and phone number.';
    status.className = 'form-status err';
    return;
  }

  const department = (data.get('department') || '').trim();
  const date = (data.get('date') || '').trim();
  const time = (data.get('time') || '').trim();
  const message = (data.get('message') || '').trim();

  // Build a pre-filled WhatsApp appointment request and open the hospital's chat.
  const enc = encodeURIComponent;
  const text =
    `Hello Taj Hospital, I'd like to book an appointment.%0A` +
    `*Name:* ${enc(name)}%0A` +
    `*Phone:* ${enc(phone)}%0A` +
    `*Department:* ${enc(department)}` +
    (date ? `%0A*Preferred date:* ${enc(date)}` : '') +
    (time ? `%0A*Preferred time:* ${enc(time)}` : '') +
    (message ? `%0A*Note:* ${enc(message)}` : '');

  const waURL = `https://wa.me/919931452682?text=${text}`;
  window.open(waURL, '_blank', 'noopener');

  status.textContent = 'Opening WhatsApp to confirm your appointment… If it does not open, call 099314 52682.';
  status.className = 'form-status ok';
  form.reset();
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
