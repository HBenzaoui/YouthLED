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
  $('#partners-list').owlCarousel({
    items: 6,
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
    {
      offset: 'bottom-in-view'
    }
  );
});

/*==========================================
|   |   |   |   Responsive Tabs   |   |   |   |               
==========================================*/
$(function() {
  $('#projects-tabs').responsiveTabs({
    // startCollapsed: 'accordion',
    animation: 'slide'
  });
});

/*==========================================
|   |   |   |   Portfolio   |   |   |   |               
==========================================*/
$(window).on('load', function() {
  // Inisiliaze Isotope
  $('#isotope-container').isotope({
    // options
  });

  // Filter item on button click
  $('#isotope-filters').on('click', 'button', function() {
    // get filter value
    var filterValue = $(this).attr('data-filter');

    // fillter portfolio
    $('#isotope-container').isotope({
      filter: filterValue
    });

    // active button
    $('#isotope-filters')
      .find('.active')
      .removeClass('active');
    $(this).addClass('active');
  });
});

/*==========================================
|   |   |   |   Mginfic-poppup  |   |   |   |               
==========================================*/
$(function() {
  $('#portfolio-wraper').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: 'mfp-fade',
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img')
          ? openerElement
          : openerElement.find('img');
      }
    }
  });
});

/*==========================================
|   |   |   |   Testtomonials  |   |   |   |               
==========================================*/
$(function() {
  $('#testimonial-slider').owlCarousel({
    items: 1,
    // margin: 15,
    // center: true,s
    // padding: 10,
    autoplay: false,
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
|   |   |   |   Stats   |   |   |   |               
==========================================*/
$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});

/*==========================================
|   |   |   |   Partners   |   |   |   |               
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
|   |   |   | Google Map |   |   |   |
==========================================*/
// Initialize and add the map
$(window).on('load', function() {
  // map vars
  var adrString =
    "105 Rue Didouche Mourad, Sidi M'Hamed 16000, Algiers, Algeria";
  var myLatLng = { lat: 36.763917, lng: 3.048688 };

  // 1. Render the map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng
  });
  // 2. The marker, positioned at myLatLng
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Click to show the address'
  });
  //3. Info WQindow
  var infowindow = new google.maps.InfoWindow({
    content: adrString
  });
  //Show info window when user click marker
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
});

/*==========================================
|   |   |   | Navigation |   |   |   |
==========================================*/

// Show and hide white navbar
$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      //Show white navbar
      // alert('Scorl > 50 and =' + $(window).scrollTop());
      $('nav').addClass('white-nav-top');
    } else {
      // alert('Scorl < 50 and =' + $(window).scrollTop());
      $('nav').removeClass('white-nav-top');
    }
  });
});
