document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const navItems = document.querySelector(".nav-items");

    mobileMenuIcon.addEventListener("click", function () {
      navItems.classList.toggle("show");
    });
  });
