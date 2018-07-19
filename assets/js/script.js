// var navBar = document.querySelector("nav");
// var scrollPosition = 0;

// window.addEventListener('scroll', function (e) {
//     scrollPosition = window.scrollY;
//     checkTickTock(scrollPosition);
// });

// function checkTickTock(scrollPosition){
//     if(scrollPosition >= 75) {
//         addNavColor(scrollPosition);
//     } else {
//         removeNavColor(scrollPosition);
//     }
// }

// function addNavColor() {
//     navBar.classList.add("sticky");
// }

// function removeNavColor() {
//     navBar.classList.remove("sticky");
// }

var navOffset = $('nav').offset().top;

$(window).scroll(function(){
    var scrollPos = $(window).scrollTop();

    if(scrollPos >= navOffset) {
        $('nav').addClass('sticky');
        $('.nav-container').addClass('nav-background').fadeIn();
    } else {
        $('nav').removeClass('sticky');
        $('.nav-container').removeClass('nav-background');        
    }
});

