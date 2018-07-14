var navBar = document.querySelector(".test");
var navIsTop = true;
var last_known_scroll_position = 0;
var ticking = false;

function navBackground(scroll_pos) {
    if(scroll_pos >= 200) {
        navBar.style.backgroundColor = "green";
    } else if(scroll_pos < 200) {
        navBar.style.backgroundColor = "none";
    }
}

window.addEventListener('scroll', function (e) {

    last_known_scroll_position = window.scrollY;

    if (!ticking) {

        window.requestAnimationFrame(function () {
            navBackground(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;

    }

});