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
