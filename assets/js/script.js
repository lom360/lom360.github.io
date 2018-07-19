var navOffset = $('nav').offset().top;

$(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    checkOffset(scrollPos);
});

function checkOffset(scrollPos){
    if (scrollPos >= navOffset) {
        addNavFeatures();
    } else {
        removeNavFeatures();
    }
}

function addNavFeatures() {
    $('nav').addClass('sticky');
    $('.nav-container').addClass('nav-background').fadeIn();
}

function removeNavFeatures() {
    $('nav').removeClass('sticky');
    $('.nav-container').removeClass('nav-background');
}