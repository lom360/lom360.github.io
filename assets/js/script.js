var navBar = document.querySelector("nav");
var scrollPosition = 0;

window.addEventListener('scroll', function (e) {
    scrollPosition = window.scrollY;
    checkTickTock(scrollPosition);
});

function checkTickTock(scrollPosition){
    if(scrollPosition >= 200) {
        addNavColor(scrollPosition);
    } else {
        removeNavColor(scrollPosition);
    }
}

function addNavColor() {
    navBar.classList.add("nav-color");
}

function removeNavColor() {
    navBar.classList.remove("nav-color");
}