
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 600) {
            $('.nav').addClass('nav-scrolled');
        }
        else {
            $('.nav').removeClass('nav-scrolled');
        }
    });
});
