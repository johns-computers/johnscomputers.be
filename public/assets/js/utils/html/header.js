const overlay = document.querySelector(".header-resp-menu-overlay");

document.getElementById('header-resp-menu').addEventListener("click", () => {
  overlay.classList.add("header-resp-menu-overlay--active");
});

document.querySelector(".header-resp-menu-close").addEventListener("click", () => {
  overlay.classList.remove("header-resp-menu-overlay--active");
});