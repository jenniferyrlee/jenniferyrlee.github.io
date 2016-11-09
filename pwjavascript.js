$(document).ready(function(){

  $(window).scroll(function() {
    var showFixedNavBar = ($(document).scrollTop() >= ($('#mainscreen').offset().top + $('#mainscreen').height()));
    // $('#fixed-nav').css('display', showFixedNavBar ? '' : 'none')

    if (showFixedNavBar) {
      $('#fixed-nav:hidden').slideDown();   
    } else {
      $('#fixed-nav:visible').slideUp();
    }

  });





// Smooth scroll between divs

$('a.smoothscroll').on('click', function(event) {
    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();

        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 700);
    }
});





 
});



