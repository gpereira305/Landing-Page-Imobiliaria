$(document).ready(() => {

//  Open nav menu
    $('.mobile-burger').click(() => {
        $('.navbar').animate({
            width: 'toggle'
        });
    })


    /// AUTO CLOSE NAVBAR FUNCTION
    const closeNav = $('.navbar');
    $('.navbar').click(() => {
        closeNav.animate({
            width: 'toggle'
        })
    })



    //  SMOOTH SCROLLING USING NAV MENU
    $('a[href*="#"]').on('click', function (e) {
        $('html,body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 100,
            },
            750
        );
        e.preventDefault();
    });

  ///     OPEN CONTACT MODAL
    openWindow();
    closeWindow();

    function openWindow() {
        $('#contact').click(function (e) {
          e.stopPropagation();
          $('#contact-us-form').fadeIn();

          closeNav.animate({
            width: 'toggle'
        })
        });
      }

       // HIDES THE POPUP
  function closeWindow() {
    const el = $('.close-btn');
    el.click(function () {
      $('#contact-us-form').fadeOut();
  
    });

    //  Evita bug do popup não sumir
    $('#contact-us-form').click(function (e) {
      e.stopPropagation();
    });
  }



})