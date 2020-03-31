$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
// //  ------
//  Carosel
//  ------//

$('.carousel').carousel({
    interval: 500
  })