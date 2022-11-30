$(document.body).on('click', '#navbar-toggler', (event) => {
    $('#navbar_resp').toggleClass('visible')
    $('#logo').toggleClass('hidden')
    $('#nav_home_btn').toggleClass('hidden')
    $('#navbar-toggler').toggleClass('absolute')
})

$(function() {
    let header = $('.navbar');
    let hederHeight = header.height(); 
    let firstBlock = $( '#firstBlock' ).height()
     
    $(window).scroll(function() {
      if($(this).scrollTop() > firstBlock) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' 
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 
       })
      }
    });
   });

