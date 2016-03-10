
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {
            $('.nav').addClass('nav-scrolled');
        }
        else {
            $('.nav').removeClass('nav-scrolled');
        }
    });
});
