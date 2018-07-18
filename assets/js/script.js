var navBar = document.querySelector("nav");
var scrollPosition = 0;

window.addEventListener('scroll', function (e) {
    scrollPosition = window.scrollY;
    checkTickTock(scrollPosition);
});

function checkTickTock(scrollPosition){
    if(scrollPosition >= 30) {
        addNavColor(scrollPosition);
    } else {
        removeNavColor(scrollPosition);
    }
}

function addNavColor() {
    navBar.classList.add("sticky");
}

function removeNavColor() {
    navBar.classList.remove("sticky");
}