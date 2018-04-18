let mousedown;
let mouseup;
if ('ontouchstart' in window) {
    mousedown = "touchstart"
    mouseup = "touchend"
} else {
    mousedown = "mousedown"
    mosueup = "mouseup"
}

//social panels onscroll pop-in================================================
const popInElements = document.querySelectorAll(".info-panel__long-text, .js-showcase-box1");
let triggerPointsArr = getElementOffsets(popInElements, .9);
const length = triggerPointsArr.length
//identifies where popInElements changes element-categories
//used to distinguish different pop-in behavior for different sections of the page
const break1 = 4; 
let removed = false;
// window.addEventListener("scroll", temp = function(){
//     if (window.pageYOffset > triggerPoint1) {
//         for (let i=0; i < longTextPanel.length; i++) {
//             longTextPanel[i].classList.add("js-longtext-in")
//             longTextPanel[i].parentNode.childNodes[1].classList.add("js-zpane-fadein");
//         }
//         window.removeEventListener("scroll", temp);
//     }
// });

window.addEventListener("scroll", temp = function(){
    for (let i=0; i < length; i++) {
        if (!removed && i < break1 && window.pageYOffset > triggerPointsArr[i]) {
            popInElements[i].parentNode.childNodes[3].classList.remove("js-diagonal-slide-down");
            popInElements[i].childNodes[1].classList.remove("js-top-image-transform");
            if (i === 3) {
                removed = true;
            }
        }
        if (i >= break1 && window.pageYOffset > triggerPointsArr[i]) {
            popInElements[i].classList.add("js-longtext-in")
            popInElements[i].parentNode.childNodes[1].classList.add("js-zpane-fadein");
        }
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
function getElementOffsets(element, delay = 1) {
    let arr = [];
    for (let i = 0; i < element.length; i++) {
        arr.push(element[i].getBoundingClientRect().top + window.pageYOffset - (window.innerHeight * delay));
    }
    return arr;
}



