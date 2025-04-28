document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu_mobile li a');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const subMenu = this.parentElement.querySelector('.sub_menu');
      if (subMenu) {
        subMenu.classList.toggle('open');
      }
    });
  });
});