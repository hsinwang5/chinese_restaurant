let mousedown;
let mouseup;
if ('ontouchstart' in window) {
    mousedown = "touchstart"
    mouseup = "touchend"
} else {
    mousedown = "mousedown"
    mosueup = "mouseup"
}

const text = document.querySelector("html");
const text1 = document.querySelector(".splash-image__text1");
const trigger = text1.getBoundingClientRect().y;
window.addEventListener("scroll", function(){
    if (text.scrollTop > trigger) {
        console.log("triggerd!!");
    }
});

//Navbar behavior===========================================================
const navLinks = document.querySelectorAll(".js-nav-item");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function(e) {
        this.childNodes[1].classList.add("js-highlight-hover");
    });
    navLinks[i].addEventListener("mouseout", function(e) {
        this.childNodes[1].classList.remove("js-highlight-hover");
    });
}

//showcase panels behavior===================================================
const showcaseBox1 = document.querySelectorAll(".js-showcase-box1");
const showcaseBox2 = document.querySelectorAll(".js-showcase-box2");

for (let i = 0; i < showcaseBox1.length; i++) {
    showcaseBox1[i].addEventListener("mouseenter", function(){
        this.parentNode.childNodes[3].classList.add("js-diagonal-slide-down");
        this.childNodes[1].classList.add("js-top-image-transform");
    });
    showcaseBox1[i].addEventListener("mouseleave", function(){
        this.parentNode.childNodes[3].classList.remove("js-diagonal-slide-down");
        this.childNodes[1].classList.remove("js-top-image-transform");
    });
    showcaseBox2[i].addEventListener("mouseenter", function(){
        this.classList.add("js-diagonal-slide-up");
        this.childNodes[1].classList.add("js-bottom-image-transform");
    });
    showcaseBox2[i].addEventListener("mouseleave", function(){
        this.classList.remove("js-diagonal-slide-up");
        this.childNodes[1].classList.remove("js-bottom-image-transform");
    });
}



