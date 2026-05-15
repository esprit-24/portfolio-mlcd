const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const currentYear = document.querySelector("#currentYear");
const backToTop = document.querySelector("#backToTop");
const sections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".nav-links a");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("is-visible");
    } else {
      backToTop.classList.remove("is-visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function updateActiveMenuLink() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  menuLinks.forEach((link) => {
    link.classList.remove("is-active");

    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("is-active");
    }
  });
}

window.addEventListener("scroll", updateActiveMenuLink);
updateActiveMenuLink();
