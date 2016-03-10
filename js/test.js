
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            $('.nav').addClass('nav-scrolled');
        }
        else {
            $('.nav').removeClass('nav-scrolled');
        }
    });
});
