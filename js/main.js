$(document).ready(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".main-reviews__pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".main-text__button_slider--next",
      prevEl: ".main-text__button_slider--prev",
    },
  });
  var modalMenu = $("[data-toggle=menu]");
  var closeModalMenu = $("[data-toggle=menu]");
  modalMenu.on("click", openMenu);

  function openMenu() {
    var menuOverlay = $(".main-salon_list");
    menuOverlay.addClass(".main-salon_list--visible");
  }
});
