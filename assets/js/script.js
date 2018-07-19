var navOffset = $('nav').offset().top;

// After the annomynous function that there are extra paranthesis'
// That's there so it can execute right away. We want to do that
// so that way when we refresh the page no matter the scroll position
// the nav background will apply appropriately.
$(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    checkOffset(scrollPos);
}());

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