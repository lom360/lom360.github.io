var navBar = document.querySelector(".test");
var last_known_scroll_position = 0;
var ticking = false;

// function navBackground(scroll_pos) {
    
// }

window.addEventListener('scroll', function (e) {

    last_known_scroll_position = window.scrollY;

    if (!ticking) {

        window.requestAnimationFrame(function () {
            console.log(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;

    }

});