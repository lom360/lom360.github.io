var navBar = document.querySelector(".test");
var last_known_scroll_position = 0;
var tickTock = false;

function addNavColor() {
    navBar.classList.add("nav-color");
}

function removeNavColor() {
    navBar.classList.remove("nav-color");
}

window.addEventListener('scroll', function (e) {

    last_known_scroll_position = window.scrollY;
    checkTickTock(last_known_scroll_position);
    if (tickTock) {
        window.requestAnimationFrame(function () {
            addNavColor(last_known_scroll_position);
        });
    }else {
        window.requestAnimationFrame(function () {
            removeNavColor(last_known_scroll_position);
        });
    }
});

function checkTickTock(scroll_pos){
    if(scroll_pos >= 200) {
        tickTock = true;
    } else {
        tickTock = false;
    }
}