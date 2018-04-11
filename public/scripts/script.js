const navLinks = document.querySelectorAll(".nav-item");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function(e) {
        console.log(this.childNodes[1]);
        this.childNodes[1].classList.add("highlight-hover");
    });
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseout", function(e) {
        this.childNodes[1].classList.remove("highlight-hover");
    });
}

//========================================================