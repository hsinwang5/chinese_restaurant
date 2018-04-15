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

//iced milk frosties advert behavior=========================================
const linkButtons = document.querySelectorAll(".js-button-press");

for (let i = 0; i < linkButtons.length; i++) {
    linkButtons[i].addEventListener(mousedown, function(){
        this.classList.add("js-pressed")
    });
    linkButtons[i].addEventListener(mouseup, function(){
        this.classList.remove("js-pressed")
    });
}

//showcase panels behavior===================================================
const showcaseBox1 = document.querySelectorAll(".js-showcase-box1");
const showcaseBox2 = document.querySelectorAll(".js-showcase-box2");

for (let i = 0; i < showcaseBox1.length; i++) {
    showcaseBox1[i].addEventListener("mouseenter", function(){
        this.parentNode.childNodes[3].classList.add("showcase-box2-transform-down");
        this.childNodes[1].classList.add("showcase-box1-image-transform");
    });
    showcaseBox1[i].addEventListener("mouseleave", function(){
        this.parentNode.childNodes[3].classList.remove("showcase-box2-transform-down");
        this.childNodes[1].classList.remove("showcase-box1-image-transform");
    });
    showcaseBox2[i].addEventListener("mouseenter", function(){
        this.classList.add("showcase-box2-transform-up");
        this.childNodes[1].classList.add("showcase-box2-image-transform");
    });
    showcaseBox2[i].addEventListener("mouseleave", function(){
        this.classList.remove("showcase-box2-transform-up");
        this.childNodes[1].classList.remove("showcase-box2-image-transform");
    });
}



