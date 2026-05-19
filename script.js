// ============================================
// SCROLL EFFECTS — progress + nav hide-on-scroll
// ============================================
const scrollProgress = document.getElementById('scrollProgress');
const nav = document.getElementById('nav');
const navAnchors = document.querySelectorAll('[data-nav]');
const sections = document.querySelectorAll('.section');

let lastScrollY = 0;
let navHidden = false;

function updateScrollEffects() {
  const y = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight > 0) {
    scrollProgress.style.width = Math.min(y / docHeight, 1) * 100 + '%';
  }

  if (y > 150) {
    if (y > lastScrollY + 5 && !navHidden) {
      nav.classList.add('hidden');
      navHidden = true;
    } else if (y < lastScrollY - 5 && navHidden) {
      nav.classList.remove('hidden');
      navHidden = false;
    }
  } else {
    nav.classList.remove('hidden');
    navHidden = false;
  }
  lastScrollY = y;

  let current = '';
  sections.forEach(sec => {
    if (y >= sec.offsetTop - 200) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateScrollEffects, { passive: true });

// Native smooth scroll for in-page anchors
document.documentElement.style.scrollBehavior = 'smooth';
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    closeMobileNav();
  });
});

// ============================================
// REVEAL OBSERVER
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-reveal], [data-fade-up]').forEach(el => revealObserver.observe(el));

const groupObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.querySelectorAll('[data-reveal], [data-fade-up]');
      children.forEach((child, i) => {
        setTimeout(() => child.classList.add('visible'), i * 80);
      });
      groupObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('[data-reveal-group]').forEach(g => groupObserver.observe(g));

// ============================================
// MOBILE NAV
// ============================================
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileNav.classList.toggle('open');
});

function closeMobileNav() {
  navToggle.classList.remove('active');
  mobileNav.classList.remove('open');
}

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

// ============================================
// TIMELINE DOT ACTIVATION
// ============================================
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const dot = entry.target.querySelector('.tl-dot');
      if (!dot) return;
      if (entry.isIntersecting) {
        dot.style.borderColor = 'var(--steel)';
        dot.style.background = 'var(--steel)';
        dot.style.boxShadow = '0 0 12px rgba(70, 130, 180, 0.4)';
      } else {
        dot.style.borderColor = '';
        dot.style.background = '';
        dot.style.boxShadow = '';
      }
    });
  }, { threshold: 0.3, rootMargin: '0px 0px -25% 0px' });

  document.querySelectorAll('.tl-item').forEach(r => tlObserver.observe(r));
}
