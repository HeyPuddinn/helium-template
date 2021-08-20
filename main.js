$(document).ready(function(){
    // navbar-toggling
    $('#navbars-toggler').click(function(){
        $('.nav-collapse').toggleClass('showNav');
    });

    //scrolling navbar
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >= 10){
            $('.nav-wrapper').removeClass('container');
            $('.nav-wrapper').addClass('showNavbars');
            $('.nav-link').addClass('showCollapse');

        } else{
            $('.nav-wrapper').addClass('container');
            $('.nav-wrapper').removeClass('showNavbars');
            $('.nav-link').removeClass('showCollapse');

        }
    });
    
})

