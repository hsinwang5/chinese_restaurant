let mousedown;
let mouseup;
if ("ontouchstart" in window) {
  mousedown = "touchstart";
  mouseup = "touchend";
} else {
  mousedown = "mousedown";
  mosueup = "mouseup";
}

//social panels onscroll pop-in================================================
const popInElements = document.querySelectorAll(
  ".info-panel__long-text, .js-showcase-box1"
);
let triggerPointsArr = getElementOffsets(popInElements, 0.9);
const length = triggerPointsArr.length;
// identifies where popInElements changes element-categories
// used to distinguish different pop-in behavior for different sections of the page
const break1 = 4;
let removed = false;

window.addEventListener(
  "scroll",
  (temp = function() {
    for (let i = 0; i < length; i++) {
      if (!removed && i < break1 && window.pageYOffset > triggerPointsArr[i]) {
        popInElements[i].parentNode.childNodes[3].classList.remove(
          "js-diagonal-slide-down"
        );
        popInElements[i].childNodes[1].classList.remove(
          "js-top-image-transform"
        );
        if (i === 3) {
          removed = true;
        }
      }
      if (i >= break1 && window.pageYOffset > triggerPointsArr[i]) {
        popInElements[i].classList.add("js-longtext-in");
        popInElements[i].parentNode.childNodes[1].classList.add(
          "js-zpane-fadein"
        );
      }
    }
  })
);

//snowing behavior
const snowflakes = document.querySelectorAll(".js-snow");
let loopCount = 0;

setInterval(function() {
  let randomTime = randomInt(700);
  // snowflakes[looper].classList.remove("js-falling-snow");
  letItSnow(loopCount, randomTime);
  modifyLoopCount();
}, 700);

//875

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
  showcaseBox1[i].addEventListener(
    "mouseenter",
    function() {
      this.parentNode.childNodes[3].classList.add("js-diagonal-slide-down");
      this.childNodes[1].classList.add("js-top-image-transform");
      this.childNodes[3].classList.add("js-text-slide");
    },
    true
  );
  showcaseBox1[i].addEventListener(
    "mouseleave",
    function() {
      this.parentNode.childNodes[3].classList.remove("js-diagonal-slide-down");
      this.childNodes[1].classList.remove("js-top-image-transform");
      this.childNodes[3].classList.remove("js-text-slide");
    },
    true
  );
  showcaseBox2[i].addEventListener(
    "mouseenter",
    function() {
      this.classList.add("js-diagonal-slide-up");
      this.childNodes[1].classList.add("js-bottom-image-transform");
      this.childNodes[3].classList.add("js-text-slide-bot");
    },
    true
  );
  showcaseBox2[i].addEventListener(
    "mouseleave",
    function() {
      this.classList.remove("js-diagonal-slide-up");
      this.childNodes[1].classList.remove("js-bottom-image-transform");
      this.childNodes[3].classList.remove("js-text-slide-bot");
    },
    true
  );
}

//function definitions========================================================
function getElementOffsets(element, delay) {
  let arr = [];
  for (let i = 0; i < element.length; i++) {
    arr.push(
      element[i].getBoundingClientRect().top +
        window.pageYOffset -
        window.innerHeight * delay
    );
  }
  return arr;
}
function letItSnow(val, rand) {
  setTimeout(function() {
    let temp = randomInt(91) - 1;
    snowflakes[val].style.left = temp + "%";
    snowflakes[val].classList.add("js-falling-snow");
  }, rand);
}
function modifyLoopCount() {
  loopCount += 1;
  if (loopCount === snowflakes.length) {
    loopCount = 0;
  }
}
function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function randomFloat(max, digits) {
  return Number((Math.random() * max).toFixed(1));
}

//*******************************************************************************

// let scrollTriggerArr = [];

// function addScrollTrigger(obj) {
//     let offset = getOffset(obj.element, .9);
//     if (window.pageYOffset > offset) {
//         if(obj.mode === "add") {
//             obj.class.forEach(function(element){
//                 obj.target.classList.add(element);
//             });
//         } else {
//             obj.class.forEach(function(element){
//                 obj.target.classList.remove(element);
//             });
//         }
//     }
// }

// function pushObj(obj) {
//     scrollTriggerArr.push(obj);
// }

// function executeTriggers(scrollTriggerArr) {
//     window.addEventListener("scroll", temp = function(){
//         scrollTriggerArr.forEach(function(element){
//             addScrollTrigger(element);
//         });
//     });
// }

// const test = document.querySelectorAll(".info-panel__long-text");

// function getOffset(element, delay) {
//     return element.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight * delay);
// }

// pushObj({
//     element: test[0],
//     target: test[0],
//     class: "js-longtext-in"
// });

// pushObj({
//     element: test[1],
//     target: test[1],
//     class: "js-longtext-in"
// });

// executeTriggers(scrollTriggerArr);

//*********************************************************************************

// Promises
// Const and Let
// Arrow Functions
// Spread Operator
// Object Spread
// Super keyword
// Exports
