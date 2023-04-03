document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 700});
ScrollReveal().reveal('.card-banner-one', { delay: 900});
ScrollReveal().reveal('.card-banner-two', { delay: 1000});