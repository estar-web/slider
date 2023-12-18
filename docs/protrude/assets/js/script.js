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
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // スマホ表示のオプション
  spaceBetween: 20,
  width: 275,

  breakpoints: {
    // PC表示のオプション
    767: {
      spaceBetween: 40,
      width: 400,
    }
  },
});
