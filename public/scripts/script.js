//Navbar behavior===========================================
const navLinks = document.querySelectorAll(".nav-item");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function(e) {
        this.childNodes[1].classList.add("highlight-hover");
    });
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseout", function(e) {
        this.childNodes[1].classList.remove("highlight-hover");
    });
}

//showcase panels behavior=================================
const showcaseBox1 = document.querySelectorAll(".showcase-box1");
const showcaseBox2 = document.querySelectorAll(".showcase-box2");

//upper diagonal
for (let i = 0; i < showcaseBox1.length; i++) {
    showcaseBox1[i].addEventListener("mouseenter", function(){
        this.parentNode.childNodes[3].classList.add("showcase-box2-transform-down");
        this.childNodes[1].classList.add("showcase-box1-image-transform");
    })
}
for (let i = 0; i < showcaseBox1.length; i++) {
    showcaseBox1[i].addEventListener("mouseleave", function(){
        this.parentNode.childNodes[3].classList.remove("showcase-box2-transform-down");
        this.childNodes[1].classList.remove("showcase-box1-image-transform");
    })
}

//lower diagonal
for (let i = 0; i < showcaseBox2.length; i++) {
    showcaseBox2[i].addEventListener("mouseenter", function(){
        this.classList.add("showcase-box2-transform-up");
        this.childNodes[1].classList.add("showcase-box2-image-transform");
    })
}
for (let i = 0; i < showcaseBox2.length; i++) {
    showcaseBox2[i].addEventListener("mouseleave", function(){
        this.classList.remove("showcase-box2-transform-up");
        this.childNodes[1].classList.remove("showcase-box2-image-transform");
    })
}


