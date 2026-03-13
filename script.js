// ============================================
// LOADER
// ============================================
const loader = document.getElementById('loader');
const loaderLine = document.getElementById('loaderLine');
let loadProg = 0;

const loadTick = setInterval(() => {
  loadProg += Math.random() * 30 + 15;
  if (loadProg >= 100) {
    loadProg = 100;
    clearInterval(loadTick);
    loaderLine.style.width = '200px';
    setTimeout(() => {
      loader.classList.add('done');
      beginEntrance();
    }, 500);
  }
  loaderLine.style.width = (loadProg / 100) * 200 + 'px';
}, 120);

// ============================================
// LENIS SMOOTH SCROLL
// ============================================
// Lightweight custom smooth scroll (no external lib)
let lenisTarget = 0;
let lenisCurrent = 0;
let lenisEnabled = true;
const lenisLerp = 0.08;

// Check for reduced motion or touch device
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = 'ontouchstart' in window;

if (!prefersReduced && !isTouchDevice) {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.body.style.height = 'auto';

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.id = 'smoothWrapper';
  wrapper.style.cssText = 'will-change: transform;';

  // Move all body children into wrapper (except fixed elements)
  const fixedEls = [
    document.querySelector('.loader'),
    document.querySelector('.noise'),
    document.querySelector('.cursor-glow'),
    document.querySelector('.cursor-dot'),
    document.querySelector('.scroll-progress'),
    document.querySelector('.nav'),
    document.querySelector('.mobile-nav')
  ];

  while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild);
  }

  // Put fixed elements back to body, wrapper into body
  document.body.appendChild(wrapper);
  fixedEls.forEach(el => { if (el) document.body.appendChild(el); });

  window.addEventListener('wheel', (e) => {
    if (!lenisEnabled) return;
    lenisTarget += e.deltaY;
    lenisTarget = Math.max(0, Math.min(lenisTarget, wrapper.scrollHeight - window.innerHeight));
  }, { passive: true });

  // Touch support for smooth scroll
  let touchStart = 0;
  window.addEventListener('touchstart', (e) => { touchStart = e.touches[0].clientY; });
  window.addEventListener('touchmove', (e) => {
    const delta = touchStart - e.touches[0].clientY;
    touchStart = e.touches[0].clientY;
    lenisTarget += delta;
    lenisTarget = Math.max(0, Math.min(lenisTarget, wrapper.scrollHeight - window.innerHeight));
  }, { passive: true });

  function lenisRaf() {
    lenisCurrent += (lenisTarget - lenisCurrent) * lenisLerp;
    wrapper.style.transform = `translate3d(0, ${-lenisCurrent}px, 0)`;

    // Update scroll-dependent effects
    updateScrollEffects(lenisCurrent);

    requestAnimationFrame(lenisRaf);
  }
  requestAnimationFrame(lenisRaf);

  // Handle anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        lenisTarget = target.offsetTop - 80;
      }
      // Close mobile menu if open
      document.getElementById('mobileNav').classList.remove('open');
      document.getElementById('navToggle').classList.remove('active');
      lenisEnabled = true;
    });
  });

} else {
  // Fallback: native smooth scroll
  document.documentElement.style.scrollBehavior = 'smooth';

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Use native scroll position for effects
  window.addEventListener('scroll', () => {
    updateScrollEffects(window.scrollY);
  });
}

// ============================================
// SCROLL-DEPENDENT EFFECTS
// ============================================
function updateScrollEffects(scrollY) {
  // Scroll progress bar
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const prog = Math.min(scrollY / docHeight, 1);
  document.getElementById('scrollProgress').style.width = (prog * 100) + '%';

  // Background color shift based on visible section
  const sections = document.querySelectorAll('[data-color]');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const top = section.offsetTop - scrollY;
    const bottom = top + section.offsetHeight;
    const mid = window.innerHeight / 2;

    if (top < mid && bottom > mid) {
      const color = section.getAttribute('data-color');
      document.body.className = '';
      if (color === 'warm') document.body.classList.add('section--warm');
      else if (color === 'cool') document.body.classList.add('section--cool');
    }
  });

  // Parallax on hero blobs
  if (scrollY < window.innerHeight * 1.5) {
    const blob1 = document.querySelector('.hero-blob--1');
    const blob2 = document.querySelector('.hero-blob--2');
    if (blob1) blob1.style.transform = `translate(${scrollY * -0.02}px, ${scrollY * 0.04}px)`;
    if (blob2) blob2.style.transform = `translate(${scrollY * 0.03}px, ${scrollY * -0.02}px)`;
  }
}

// ============================================
// CURSOR — glow + dot
// ============================================
const cursorGlow = document.getElementById('cursorGlow');
const cursorDot = document.getElementById('cursorDot');
let glowX = 0, glowY = 0;
let dotX = 0, dotY = 0;
let mX = 0, mY = 0;
let cursorActive = false;

document.addEventListener('mousemove', (e) => {
  mX = e.clientX;
  mY = e.clientY;
  if (!cursorActive) {
    cursorActive = true;
    cursorGlow.classList.add('visible');
    cursorDot.classList.add('visible');
  }
});

function animateCursor() {
  // Glow — very slow follow
  glowX += (mX - glowX) * 0.06;
  glowY += (mY - glowY) * 0.06;
  cursorGlow.style.left = glowX + 'px';
  cursorGlow.style.top = glowY + 'px';

  // Dot — snappy
  dotX += (mX - dotX) * 0.5;
  dotY += (mY - dotY) * 0.5;
  cursorDot.style.left = dotX + 'px';
  cursorDot.style.top = dotY + 'px';

  requestAnimationFrame(animateCursor);
}
requestAnimationFrame(animateCursor);

// Hover expansion
const hoverEls = 'a, button, .contact-link, .skill-float, .role-feature, .fact';
document.querySelectorAll(hoverEls).forEach(el => {
  el.addEventListener('mouseenter', () => cursorDot.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursorDot.classList.remove('hovering'));
});

// ============================================
// CHARACTER-BY-CHARACTER REVEAL
// ============================================
function splitChars(el) {
  const text = el.textContent;
  el.textContent = '';
  el.setAttribute('aria-label', text);
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.classList.add('char');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.transitionDelay = (i * 0.035) + 's';
    el.appendChild(span);
  });
}

// Split all [data-chars] elements
document.querySelectorAll('[data-chars]').forEach(splitChars);

// ============================================
// INTERSECTION OBSERVER — REVEALS
// ============================================
function beginEntrance() {
  // Standard reveals
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });

  // Character reveals — observe parent, reveal children
  const charObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.char').forEach(c => c.classList.add('visible'));
        charObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe hero name lines and role titles
  document.querySelectorAll('.hero-name-line, .role-title, .contact-heading').forEach(el => {
    charObserver.observe(el);
  });
}

// If Lenis is disabled and loader finishes, we need an alternate observation root
// The IntersectionObserver uses viewport by default, which works for both modes.

// ============================================
// NAVIGATION
// ============================================
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileNav.classList.toggle('open');
  if (mobileNav.classList.contains('open')) {
    lenisEnabled = false;
  } else {
    lenisEnabled = true;
  }
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    mobileNav.classList.remove('open');
    lenisEnabled = true;
  });
});

// ============================================
// TEXT SCRAMBLE on hover (role titles)
// ============================================
const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

document.querySelectorAll('.role-title [data-chars]').forEach(el => {
  const originalChars = Array.from(el.querySelectorAll('.char'));
  const originalText = originalChars.map(c => c.textContent === '\u00A0' ? ' ' : c.textContent);

  el.addEventListener('mouseenter', () => {
    let iteration = 0;
    const interval = setInterval(() => {
      originalChars.forEach((charEl, i) => {
        if (originalText[i] === ' ') return;
        if (i < iteration) {
          charEl.textContent = originalText[i];
        } else {
          charEl.textContent = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
      });
      iteration += 0.5;
      if (iteration >= originalText.length) {
        clearInterval(interval);
        originalChars.forEach((charEl, i) => {
          charEl.textContent = originalText[i] === ' ' ? '\u00A0' : originalText[i];
        });
      }
    }, 30);
  });
});

// ============================================
// HOVER GLOW on roles — color bleeds in
// ============================================
document.querySelectorAll('.role').forEach(role => {
  role.addEventListener('mouseenter', () => {
    const color = role.getAttribute('data-color');
    if (color === 'warm') {
      cursorGlow.style.background = 'radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 70%)';
    } else if (color === 'cool') {
      cursorGlow.style.background = 'radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 70%)';
    } else {
      cursorGlow.style.background = 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)';
    }
  });

  role.addEventListener('mouseleave', () => {
    cursorGlow.style.background = 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)';
  });
});

// ============================================
// SKILL FLOAT — subtle drift on scroll
// ============================================
if (!isTouchDevice) {
  document.addEventListener('mousemove', (e) => {
    const skills = document.querySelectorAll('.skill-float');
    const cx = e.clientX / window.innerWidth - 0.5;
    const cy = e.clientY / window.innerHeight - 0.5;

    skills.forEach((skill, i) => {
      const depth = (i % 3 + 1) * 0.5;
      const offsetX = cx * 15 * depth;
      const offsetY = cy * 10 * depth;
      skill.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
}
