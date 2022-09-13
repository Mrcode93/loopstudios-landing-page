let hamburger = document.querySelector(".hamburger");
let humImg = document.querySelector(".hamburger img");
let menu = document.querySelector(".slider");
let links = document.querySelectorAll("a");

links.forEach((e) => {
    e.addEventListener("click", (link) => {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            humImg.src = "images/icon-hamburger.svg";
        }
    });
});

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        humImg.src = "images/icon-close.svg";
    } else {
        humImg.src = "images/icon-hamburger.svg";
    }
});