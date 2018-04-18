let mousedown;
let mouseup;
if ('ontouchstart' in window) {
    mousedown = "touchstart"
    mouseup = "touchend"
} else {
    mousedown = "mousedown"
    mosueup = "mouseup"
}

// const text1 = document.querySelector(".splash-image__text1");
// const trigger = text1.getBoundingClientRect().y;
// window.addEventListener("scroll", function(){
//     if (text.scrollTop > trigger) {
//         console.log("triggerd!!");
//     }
// });

//social panels onscroll pop-in================================================
const socialBar = document.querySelector(".js-trigger");
const longTextPanel = document.querySelectorAll(".info-panel__long-text");
let triggerPoint = getElementOffset(socialBar);

window.addEventListener("scroll", x418201825855 = function(){
    if (window.pageYOffset > triggerPoint) {
        for (let i=0; i < longTextPanel.length; i++) {
            longTextPanel[i].classList.add("js-longtext-in")
            longTextPanel[i].parentNode.childNodes[1].classList.add("js-zpane-fadein");
        }
        window.removeEventListener("scroll", x418201825855);
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
        // this.parentNode.childNodes[3].classList.remove("js-diagonal-slide-up");
        // this.parentNode.childNodes[3].childNodes[1].classList.remove("js-bottom-image-transform");
        // this.parentNode.childNodes[3].childNodes[3].classList.remove("js-text-slide-bot");
        this.parentNode.childNodes[3].classList.add("js-diagonal-slide-down");
        this.childNodes[1].classList.add("js-top-image-transform");
        this.childNodes[3].classList.add("js-text-slide");
    }, true);
    showcaseBox1[i].addEventListener("mouseleave", function(){
        this.parentNode.childNodes[3].classList.remove("js-diagonal-slide-down");
        this.childNodes[1].classList.remove("js-top-image-transform");
        this.childNodes[3].classList.remove("js-text-slide");
    }, true);
    showcaseBox2[i].addEventListener("mouseenter", function(){
        // this.classList.remove("js-diagonal-slide-down");
        // this.parentNode.childNodes[1].childNodes[1].classList.remove("js-top-image-transform");
        // this.parentNode.childNodes[1].childNodes[3].classList.remove("js-text-slide");
        this.classList.add("js-diagonal-slide-up");
        this.childNodes[1].classList.add("js-bottom-image-transform");
        this.childNodes[3].classList.add("js-text-slide-bot");
    }, true);
    showcaseBox2[i].addEventListener("mouseleave", function(){
        this.classList.remove("js-diagonal-slide-up");
        this.childNodes[1].classList.remove("js-bottom-image-transform");
        this.childNodes[3].classList.remove("js-text-slide-bot");
    }, true);
}

//function definitions========================================================
function getElementOffset(element) {
    return socialBar.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight * .80);
}

// function setScrollTrigger(element, runOnce, func) {
//     let offset = getElementOffset(element);
//     window.addEventListener("scroll", temp=function(){
//         if (window.pageYOffset > offset) {
//             func();
//             if (runOnce) {
//                 window.removeEventListener("scroll", temp);
//             }
//         }
//     });
// }



