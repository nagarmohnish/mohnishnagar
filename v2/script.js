/* Swiss Minimal — v2
 * Minimal JS: footer year, mobile nav toggle, fade-in on scroll.
 */
(function () {
  "use strict";

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      if (open) {
        mobileNav.hidden = true;
        mobileNav.style.display = "none";
      } else {
        mobileNav.hidden = false;
        mobileNav.style.display = "flex";
      }
    });
    // Close on nav-link click
    mobileNav.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
        mobileNav.style.display = "none";
      }
    });
  }

  // Fade-in on scroll (intersection observer)
  var targets = document.querySelectorAll(
    ".section__head, .hero__title, .hero__sub, .hero__actions, .hero__stats, " +
    ".about-grid, .timeline__item, .skills-col, .project, .more-projects, " +
    ".contact-card"
  );

  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  targets.forEach(function (el) { el.classList.add("reveal"); });

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  targets.forEach(function (el) { io.observe(el); });
})();
