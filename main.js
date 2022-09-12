let hamburger = document.querySelector(".hamburger");
let humImg = document.querySelector(".hamburger img");
let menu = document.querySelector(".slider");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        humImg.src = "images/icon-close.svg";
    } else {
        humImg.src = "images/icon-hamburger.svg";
    }
});