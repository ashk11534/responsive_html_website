var h = document.getElementById("clickable-hamburger");
var i = document.getElementById("hamburger-1");
h.onclick = function clicked() {
    i.classList.toggle("visible-hamburger");
};