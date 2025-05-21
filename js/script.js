// toggle icon navbar

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// Scroll Sections Active Links
window.addEventListener('scroll', () => {
  const top = window.scrollY;
  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
  // Sticky navbar
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Remove toggle icon and navbar when click navbar link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js
const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Developer', 'AI Developer', 'Data Analyst'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});