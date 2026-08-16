/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1200);

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }

});


/* Close menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";

  });

});


/* =========================
   CONTACT BUTTON
========================= */

const contactButton = document.getElementById("contactBtn");

contactButton.addEventListener("click", () => {

  alert(
    "Hello Yusuf! 👋\n\nThanks for visiting my website! 🚀"
  );

});


/* =========================
   BACK TO TOP
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {

  observer.observe(element);

});


/* =========================
   THEME BUTTON
========================= */

const themeBtn = document.getElementById("themeBtn");

let lightMode = false;

themeBtn.addEventListener("click", () => {

  lightMode = !lightMode;

  if (lightMode) {

    document.documentElement.style.setProperty(
      "--bg",
      "#eef4ff"
    );

    document.documentElement.style.setProperty(
      "--bg2",
      "#ffffff"
    );

    document.documentElement.style.setProperty(
      "--text",
      "#07101f"
    );

    document.documentElement.style.setProperty(
      "--muted",
      "#526078"
    );

    themeBtn.textContent = "🌙";

  } else {

    document.documentElement.style.setProperty(
      "--bg",
      "#050816"
    );

    document.documentElement.style.setProperty(
      "--bg2",
      "#080d1f"
    );

    document.documentElement.style.setProperty(
      "--text",
      "#ffffff"
    );

    document.documentElement.style.setProperty(
      "--muted",
      "#9ba3b8"
    );

    themeBtn.textContent = "☀️";

  }

});
