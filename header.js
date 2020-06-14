document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    if (window.innerWidth > 815 && window.scrollY > 10) {
      document.getElementById("navbar-container").style.height = "14vh";
    } else if (window.innerWidth > 815 && window.scrollY <= 10) {
      document.getElementById("navbar-container").style.height = "16vh";
    } else if (window.innerWidth < 815 && window.scrollY > 10) {
      document.getElementById("navbar-container").style.height = "14vh";
    } else if (window.innerWidth < 815 && window.scrollY <= 10) {
      document.getElementById("navbar-container").style.height = "14vh";
    }
  });
});
