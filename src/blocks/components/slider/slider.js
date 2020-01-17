import Swiper from 'swiper'

var swiper = new Swiper('.my-swiper-container', {
  pagination: {
    el: '.my-swiper-pagination'
  },
  autoplay: true,
  delay: 3000,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 1000,
  virtualTranslate: true
})
