document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500});
ScrollReveal().reveal('.card-banner-one', { delay: 500});
ScrollReveal().reveal('.card-banner-two', { delay: 500});

/* Contador de likes*/
const likeBtn = document.querySelector(".like_btn");
let likeIcon = document.querySelector("#icon");
let count = document.querySelector("#count")

let clicked = false;

likeBtn.addEventListener("click", () => {
    if (!clicked) {
        clicked = true
        likeIcon.innerHTML = '<i class="fas fa-thumbs-up"></i>'
    } else {
        clicked = false;
        likeIcon.innerHTML =    '<i class="fas fa-thumbs-up"></i>'
    }
});

let counter = 0;

function countingClicks() {
    document.getElementById("counting").innerHTML = ++counter;   
}
