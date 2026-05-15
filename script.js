const currentYear = document.querySelector("#currentYear");
const backToTop = document.querySelector("#backToTop");
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector("#navbarContent");
const profilePhoto = document.querySelector("#profilePhoto");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (profilePhoto) {
  profilePhoto.addEventListener("error", () => {
    profilePhoto.parentElement.classList.add("has-error");
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

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const collapse = bootstrap.Collapse.getInstance(navbarCollapse);

      if (collapse) {
        collapse.hide();
      }
    }
  });
});

if (window.bootstrap) {
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#mainNav",
    offset: 90
  });

  scrollSpy.refresh();
}
