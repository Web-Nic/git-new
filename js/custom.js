$(document).ready(function() {

  "use strict";


/////////////////////////////////////////////////////////////////
// Accordeon
/////////////////////////////////////////////////////////////////

    var submenuToggle = $('.navbar__dropdown-toggle');
    var submenu = $('.navbar__dropdown-menu');

    $(submenuToggle).on('click', function() {
       $(this).toggleClass('active');
       $(submenu).not($(this).next()).slideUp(300);
       $(this).next().slideToggle(300);
    });


/////////////////////////////////////////////////////////////////
// Sidebar
/////////////////////////////////////////////////////////////////

    var sidebarToggle = $('.navbar__toggle');
    var sidebar = $('.l-sidebar');

    $(sidebarToggle).on('click', function() {
      $(sidebar).toggleClass('active');
    });

    if ($(window).width() < 1280) {
      $(document).mouseup(function (e) {
        if (sidebar.has(e.target).length === 0){
          $(sidebar).removeClass('active');
        }
      });
    }

});

