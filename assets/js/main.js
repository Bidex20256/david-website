/**
 * DAVIDJAMES Portfolio — Main JavaScript
 */

(function () {
  "use strict";

  const THEME_KEY = "davidjames-theme";

  /* ——— Theme Toggle ——— */
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);

    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ——— Mobile Navigation ——— */
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");
    const header = document.querySelector(".site-header");
    const links = document.querySelectorAll(".nav-link");

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        menu.classList.toggle("open");
        const expanded = toggle.classList.contains("open");
        toggle.setAttribute("aria-expanded", expanded);
      });

      links.forEach((link) => {
        link.addEventListener("click", () => {
          toggle.classList.remove("open");
          menu.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    if (header) {
      window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
      });
      header.classList.toggle("scrolled", window.scrollY > 20);
    }

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  }

  /* ——— Custom Cursor ——— */
  function initCursor() {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isSmall = window.innerWidth <= 768;
    if (isTouch || isSmall) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add("custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverTargets = "a, button, .btn, .project-card, .blog-card, .testimonial-card, .card, .social-link, .skill-item, input, textarea";
    document.querySelectorAll(hoverTargets).forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
    });
  }

  /* ——— Contact Form (Web3Forms → Gmail) ——— */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const messageEl = document.getElementById("form-message");
    const submitBtn = form.querySelector('button[type="submit"]');
    const config = window.CONTACT_FORM_CONFIG || {};
    const accessKey = config.accessKey || "";

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const msg = form.querySelector("#message");
      let valid = true;

      [name, email, msg].forEach((field) => {
        field.classList.remove("error-field");
        if (!field.value.trim()) {
          field.classList.add("error-field");
          valid = false;
        }
      });

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value && !emailPattern.test(email.value)) {
        email.classList.add("error-field");
        valid = false;
      }

      if (!messageEl) return;

      messageEl.className = "form-message";

      if (!valid) {
        messageEl.textContent = "Please fill in all fields with a valid email address.";
        messageEl.classList.add("error");
        return;
      }

      if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
        messageEl.textContent =
          "Email is not configured yet. Add your Web3Forms access key in assets/js/contact-config.js (see CONTACT-SETUP.md).";
        messageEl.classList.add("error");
        return;
      }

      const defaultLabel = submitBtn ? submitBtn.textContent : "Send";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      messageEl.textContent = "Sending your message…";
      messageEl.classList.add("loading");

      try {
        const body = new FormData();
        body.append("access_key", accessKey);
        body.append("name", name.value.trim());
        body.append("email", email.value.trim());
        body.append("message", msg.value.trim());
        body.append("subject", config.subject || "Portfolio contact form");
        body.append("from_name", "DAVIDJAMES Portfolio");
        body.append("botcheck", "");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body,
        });

        const data = await response.json();

        if (data.success) {
          messageEl.textContent =
            "Thank you, " +
            name.value.trim() +
            "! Your message was sent. DAVIDJAMES will get back to you soon.";
          messageEl.className = "form-message success";
          form.reset();
        } else {
          throw new Error(data.message || "Unable to send message.");
        }
      } catch (err) {
        messageEl.textContent =
          "Could not send your message. Please try again or email davidjames@email.com directly.";
        messageEl.className = "form-message error";
        console.error("Contact form error:", err);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = defaultLabel;
        }
      }
    });
  }

  /* ——— Scroll reveal (light) ——— */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNav();
    initCursor();
    initContactForm();
    initReveal();
  });
})();
