$(document).ready(function(){

  $(window).scroll(function() {
    var showFixedNavBar = ($(document).scrollTop() > ($('#mainscreen').offset().top + $('#mainscreen').height()));
    // $('#fixed-nav').css('display', showFixedNavBar ? '' : 'none')

    if (showFixedNavBar) {
      $('#fixed-nav').css('display', '')      
    } else {
      $('#fixed-nav').css('display', 'none')
    }

  });

});
