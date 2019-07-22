/*==========================================
|   |   |   |   Preloader   |   |   |   |               
==========================================*/

//This is to make sure the whole side is loaded
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader')
    .delay(350)
    .fadeOut();
});
