/*==========================================
|   |   |   |   Preloader   |   |   |   |               
==========================================*/

//This is to make sure the whole side is loaded
$(window).on('load', function () {
  $('#status').fadeOut('slow');
  $('#preloader')
    .delay(350)
    .fadeOut('slow');
});

/*==========================================
|   |   |   |   Team   |   |   |   |               
==========================================*/
$(function () {
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
$(function () {
  $('#progress-elements').waypoint(
    function () {
      $('.progress-bar').each(function () {
        $(this).animate({
            width: $(this).attr('aria-valuenow') + '%'
          },
          800
        );
      });
      this.destroy();
    }, {
      offset: 'bottom-in-view'
    }
  );
});

/*==========================================
|   |   |   |   Responsive Tabs   |   |   |   |               
==========================================*/
$(function () {
  $('#projects-tabs').responsiveTabs({
    // startCollapsed: 'accordion',
    animation: 'slide'
  });
});

/*==========================================
|   |   |   |   Portfolio   |   |   |   |               
==========================================*/
$(window).on('load', function () {

  // Inisiliaze Isotope
  $("#isotope-container").isotope({
    // options
  });

  // Filter item on button click
  $('#isotope-filters').on('click', 'button', function () {

    // get filter value
    var filterValue = $(this).attr('data-filter');

    // fillter portfolio
    $('#isotope-container').isotope({
      filter: filterValue
    });

    // active button
    $('#isotope-filters').find('.active').removeClass('active')
    $(this).addClass('active');

  });
});


/*==========================================
|   |   |   |   Mginfic-poppup  |   |   |   |               
==========================================*/
$(function () {
  $('#portfolio-wraper').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    showCloseBtn: 'false'
    // other options
  });
});