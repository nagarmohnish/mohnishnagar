// ============================================
// LOADER
// ============================================
const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loaderFill');
let loadProg = 0;

const loadTick = setInterval(() => {
  loadProg += Math.random() * 20 + 12;
  if (loadProg >= 100) {
    loadProg = 100;
    clearInterval(loadTick);
    loaderFill.style.width = '100%';
    setTimeout(() => {
      loader.classList.add('done');
      initReveals();
      animateSkillBars();
    }, 500);
  }
  loaderFill.style.width = loadProg + '%';
}, 100);

// ============================================
// SMOOTH SCROLL
// ============================================
let scrollTarget = 0;
let scrollCurrent = 0;
let smoothEnabled = true;
const scrollLerp = 0.09;
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = 'ontouchstart' in window;
let wrapper = null;

if (!prefersReduced && !isTouchDevice) {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  wrapper = document.createElement('div');
  wrapper.id = 'smoothWrapper';
  wrapper.style.cssText = 'will-change: transform;';

  const fixedSelectors = ['.loader', '.noise', '.cursor-ring', '.scroll-progress', '.nav', '.mobile-nav'];
  const fixedEls = fixedSelectors.map(s => document.querySelector(s)).filter(Boolean);

  while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild);
  }
  document.body.appendChild(wrapper);
  fixedEls.forEach(el => document.body.appendChild(el));

  window.addEventListener('wheel', (e) => {
    if (!smoothEnabled) return;
    scrollTarget += e.deltaY;
    scrollTarget = Math.max(0, Math.min(scrollTarget, wrapper.scrollHeight - window.innerHeight));
  }, { passive: true });

  function smoothRaf() {
    scrollCurrent += (scrollTarget - scrollCurrent) * scrollLerp;
    wrapper.style.transform = `translate3d(0, ${-scrollCurrent}px, 0)`;
    updateScrollEffects(scrollCurrent);
    requestAnimationFrame(smoothRaf);
  }
  requestAnimationFrame(smoothRaf);

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) scrollTarget = target.offsetTop - 80;
      closeMobileNav();
    });
  });

} else {
  document.documentElement.style.scrollBehavior = 'smooth';
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      closeMobileNav();
    });
  });
  window.addEventListener('scroll', () => updateScrollEffects(window.scrollY));
}

// ============================================
// SCROLL EFFECTS
// ============================================
const scrollProgress = document.getElementById('scrollProgress');
let lastScrollY = 0;
let navHidden = false;
const nav = document.getElementById('nav');

function updateScrollEffects(y) {
  const docHeight = (wrapper ? wrapper.scrollHeight : document.documentElement.scrollHeight) - window.innerHeight;
  if (docHeight > 0) {
    scrollProgress.style.width = Math.min(y / docHeight, 1) * 100 + '%';
  }

  // Nav auto-hide
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

  updateActiveNav(y);
}

// Active nav
const navAnchors = document.querySelectorAll('[data-nav]');
const sections = document.querySelectorAll('.section');

function updateActiveNav(y) {
  let current = '';
  sections.forEach(sec => {
    if (y >= sec.offsetTop - 200) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

// ============================================
// CURSOR
// ============================================
const cursorRing = document.getElementById('cursorRing');
let cX = 0, cY = 0, mX = 0, mY = 0;
let cursorVisible = false;

if (!isTouchDevice) {
  document.addEventListener('mousemove', (e) => {
    mX = e.clientX;
    mY = e.clientY;
    if (!cursorVisible) {
      cursorVisible = true;
      cursorRing.classList.add('visible');
    }
  });

  function animateCursor() {
    cX += (mX - cX) * 0.2;
    cY += (mY - cY) * 0.2;
    cursorRing.style.left = cX + 'px';
    cursorRing.style.top = cY + 'px';
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  const hoverTargets = 'a, button, .project-card, .bento-card, .tl-card, .skill-chip, .contact-link';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
  });
}

// ============================================
// REVEALS
// ============================================
function initReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('[data-reveal], [data-fade-up]').forEach(el => observer.observe(el));

  // Staggered group reveals
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
}

// ============================================
// SKILL BAR ANIMATION
// ============================================
function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.getPropertyValue('--fill');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

// ============================================
// MOBILE NAV
// ============================================
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileNav.classList.toggle('open');
  smoothEnabled = !mobileNav.classList.contains('open');
});

function closeMobileNav() {
  navToggle.classList.remove('active');
  mobileNav.classList.remove('open');
  smoothEnabled = true;
}

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

// ============================================
// TIMELINE DOT ACTIVATION
// ============================================
if (!prefersReduced) {
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const dot = entry.target.querySelector('.tl-dot');
      if (dot) {
        if (entry.isIntersecting) {
          dot.style.borderColor = 'var(--steel)';
          dot.style.background = 'var(--steel)';
          dot.style.boxShadow = '0 0 12px rgba(70, 130, 180, 0.4)';
        } else {
          dot.style.borderColor = '';
          dot.style.background = '';
          dot.style.boxShadow = '';
        }
      }
    });
  }, { threshold: 0.3, rootMargin: '0px 0px -25% 0px' });

  document.querySelectorAll('.tl-item').forEach(r => tlObserver.observe(r));
}

// ============================================
// BENTO CARD TILT (subtle on hover)
// ============================================
if (!isTouchDevice) {
  document.querySelectorAll('.bento-card, .project-card--featured').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-2px) perspective(600px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
