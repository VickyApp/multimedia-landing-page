const humbergerMenu = document.querySelector(".humberger-menu");
const humbergerSpan = document.querySelectorAll(".humberger-menu span");
const menuNavbar = document.querySelector("ul");
const mainBlur = document.querySelector("main");

humbergerMenu.addEventListener("click", function(i) {
    for (let i = 0; i < 3; i++) {
        humbergerSpan[i].classList.toggle("open-menu");
    }

    menuNavbar.classList.toggle("buka-tutup");

    mainBlur.classList.toggle("buka-tutup");
})


var myNav = document.querySelector('nav');
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

const changeArticle = document.querySelector(".change-article");
const nextArticle = document.querySelector('.next-article');

changeArticle.addEventListener('click', function() {
    nextArticle.classList.toggle("open-article");
    if (nextArticle.classList.contains("open-article")) {
        changeArticle.innerHTML = "Tutup";
    } else {
        changeArticle.innerHTML = "Selanjutnya";

    }
})

const getImgGallery = document.querySelector("#img-g1");
const popupGallery1 = document.querySelector(".img-popup")

getImgGallery.addEventListener("click", function() {
    popupGallery1.classList.toggle("img-popup-click")
})