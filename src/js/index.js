document.addEventListener("DOMContentLoaded", () => {
  // ===== Hamburger / Mobile Nav =====
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main-nav");

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ===== Scroll Spy — highlight active nav link =====
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".header__nav-link");

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const active = document.querySelector(
            `.header__nav-link[href="#${entry.target.id}"]`,
          );
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
  );

  sections.forEach((sec) => spyObserver.observe(sec));

  // ===== Fade-in on scroll =====
  const fadeEls = document.querySelectorAll(".animate-fade");

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("is-visible"), i * 70);
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
  );

  fadeEls.forEach((el) => fadeObserver.observe(el));

  // ===== Header shadow on scroll =====
  const header = document.querySelector(".header");
  window.addEventListener(
    "scroll",
    () => {
      header.style.boxShadow =
        window.scrollY > 20
          ? "0 4px 20px rgba(26,58,92,0.15)"
          : "0 2px 10px rgba(26,58,92,0.09)";
    },
    { passive: true },
  );

  // ===== Scroll to Top button =====
  const sttBtn = document.createElement("button");
  sttBtn.className = "scroll-to-top";
  sttBtn.setAttribute("aria-label", "Scroll to top");
  sttBtn.innerHTML = "&#8679;"; // ↑
  document.body.appendChild(sttBtn);

  window.addEventListener(
    "scroll",
    () => {
      sttBtn.classList.toggle("is-visible", window.scrollY > 400);
    },
    { passive: true },
  );

  sttBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== Hero photo: show placeholder until image loads =====
  const heroPhoto = document.querySelector(".hero__photo");
  const heroPlaceholder = document.querySelector(".hero__photo-placeholder");

  if (heroPhoto && heroPlaceholder) {
    if (heroPhoto.complete && heroPhoto.naturalWidth > 0) {
      heroPlaceholder.style.display = "none";
    } else {
      heroPhoto.addEventListener("load", () => {
        heroPlaceholder.style.display = "none";
      });
    }
  }
});
