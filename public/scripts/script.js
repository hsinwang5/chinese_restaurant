const navLinks = document.querySelectorAll("nav a");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function(e) {
        this.parentNode.childNodes[3].classList.add("highlight-hover");
    });
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseout", function(e) {
        this.parentNode.childNodes[3].classList.remove("highlight-hover");
    });
}