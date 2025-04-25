$(document).ready(function () {
            
          // Toggle .sub_menu when clicking .menu_mobile li a
          $('.menu_mobile li a').on('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
        
            // Toggle the nearest .sub_menu within the same list item
            $(this).siblings('.sub_menu').slideToggle();
        
            // Optionally close other open submenus (if required)
            // $('.menu_mobile .sub_menu').not($(this).siblings('.sub_menu')).slideUp();
          });
                
})