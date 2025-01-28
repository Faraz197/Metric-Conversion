// Navbar scripting

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");


menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


let jsArrow = document.querySelector(".bhindi");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

// End Navbar



