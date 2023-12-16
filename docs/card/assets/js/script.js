var $header = jQuery('#js-header');

// navigation
jQuery('#js-toggle').on('click', function (e) {
  e.preventDefault();
  $header.toggleClass('add-active');
});

jQuery('.js-navLink, #js-overlay').on('click', function (e) {
  e.preventDefault();
  $header.removeClass('add-active');
});

var pcWidth = window.matchMedia('screen and (min-width: 769px)');
function checkBreakPoint() {
  if (pcWidth.matches) {
    $header.removeClass('add-active');
  }
}
pcWidth.addListener(checkBreakPoint);
checkBreakPoint();

var mySwiper = new Swiper('.p-mv-swiper', {

  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 28,
  initialSlide: 1,

  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 25,
      initialSlide: 1,
    }
  },
});