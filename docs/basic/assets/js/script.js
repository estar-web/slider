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

//スライダー
var mySwiper = new Swiper('.p-mv-swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }
});