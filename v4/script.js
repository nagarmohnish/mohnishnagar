/* ==========================================================================
   Aurora Glass - v4 interactions
   ========================================================================== */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1. Reveal on scroll ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---- 2. Mouse spotlight ---- */
  const spotlight = document.querySelector('.spotlight');
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

  if (spotlight && !prefersReducedMotion && !isCoarsePointer) {
    let rafId = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let hasMoved = false;

    const update = () => {
      // ease toward target
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener(
      'mousemove',
      (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!hasMoved) {
          hasMoved = true;
          document.body.classList.add('spotlight-on');
        }
        if (rafId === null) update();
      },
      { passive: true }
    );

    window.addEventListener('mouseleave', () => {
      document.body.classList.remove('spotlight-on');
    });
  }

  /* ---- 3. Card tilt on mousemove ---- */
  if (!prefersReducedMotion && !isCoarsePointer) {
    const tilts = document.querySelectorAll('.tilt');
    const MAX_TILT = 3; // degrees

    tilts.forEach((card) => {
      let rect = null;
      let frame = null;

      const handleMove = (e) => {
        if (!rect) rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotY = ((x - cx) / cx) * MAX_TILT;
        const rotX = -((y - cy) / cy) * MAX_TILT;
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
        });
      };

      const reset = () => {
        rect = null;
        if (frame) cancelAnimationFrame(frame);
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
      };

      const refresh = () => { rect = card.getBoundingClientRect(); };

      card.addEventListener('mouseenter', refresh);
      card.addEventListener('mousemove', handleMove, { passive: true });
      card.addEventListener('mouseleave', reset);
    });

    // refresh rects on resize
    window.addEventListener('resize', () => {
      document.querySelectorAll('.tilt').forEach((c) => {
        c.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
      });
    }, { passive: true });
  }

  /* ---- 4. Year (footer fallback) - none needed but keep current year ---- */
  // (handled inline in HTML; left as a hook if needed.)

  /* ---- 5. Smooth scroll for nav anchors (with offset for fixed nav) ---- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });
})();
