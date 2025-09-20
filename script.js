document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const hamburger = document.querySelector(".hamburger");
  const menuBar = document.querySelector(".menu-bar");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);

      sections.forEach(sec => {
        sec.classList.remove("active");
        if (sec.id === id) {
          sec.classList.add("active");
        }
      });

      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      menuBar.classList.remove("active");
    });
  });

  hamburger.addEventListener("click", () => {
    menuBar.classList.toggle("active");
  });
});
