$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >  190){
            $('header').addClass('scrolled');
        } else{
            $('header').removeClass('scrolled');
        }
    });
});