var navOffset = $('nav').offset().top; // assigns nav position

// checkScroll() is called once so that way when page is refreshed
// the navFeatures will apply appropriately.
// So the following jQuery method is using the checkScroll argument
// to apply the function appropriately constantly.
checkScroll();
$(window).scroll(checkScroll);

function checkOffset(scrollPos){
    if (scrollPos >= navOffset) {
        addNavFeatures();
    } else {
        removeNavFeatures();
    }
}

// .sticky class applies position fixed to nav
// .nav-background class applies background-color
// They remain separate because when removing class
// if they are combined will remove the contents of
// the container altogether.
function addNavFeatures() {
    $('nav').addClass('sticky');
    $('.nav-container').addClass('nav-background').fadeIn();
}

function removeNavFeatures() {
    $('nav').removeClass('sticky');
    $('.nav-container').removeClass('nav-background');
}

function checkScroll() {
    var scrollPos = $(window).scrollTop();
    checkOffset(scrollPos);
}