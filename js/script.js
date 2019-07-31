/*==========================================
|   |   |   |   Preloader   |   |   |   |               
==========================================*/

//This is to make sure the whole side is loaded
$(window).on('load', function() {
  $('#status').fadeOut('slow');
  $('#preloader')
    .delay(350)
    .fadeOut('slow');
});

/*==========================================
|   |   |   |   Team   |   |   |   |               
==========================================*/
$(function() {
  $('#team-memebers').owlCarousel({
    items: 2,
    // margin: 15,
    // center: true,
    // padding: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ]
  });
});

/*==========================================
|   |   |   |   Progress Bars   |   |   |   |               
==========================================*/
$(function() {
  $('#progress-elements').waypoint(
    function() {
      $('.progress-bar').each(function() {
        $(this).animate(
          {
            width: $(this).attr('aria-valuenow') + '%'
          },
          800
        );
      });
      this.destroy();
    },
    { offset: 'bottom-in-view' }
  );
});
