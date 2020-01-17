import $ from 'jquery'
import './import/polyfill'
import './import/modules'
import './import/components'
import './import/sticky.js'

import LazyLoad from 'vanilla-lazyload'
import objectFitImages from 'object-fit-images'

import svg4everybody from 'svg4everybody'
import pagepiling from '../../node_modules/pagepiling.js/dist/jquery.pagepiling.min.js'

$(document).ready(function() {
  svg4everybody()

  const someImages = document.querySelectorAll('img.img--poly')
  objectFitImages(someImages)

  if (document.querySelector('#pagepiling')) {
    $('#pagepiling').pagepiling({
      direction: 'vertical',
      verticalCentered: true,
      loopBottom: true,
      loopTop: true,
      css3: true,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 10,
      keyboardScrolling: true,
      scrollingSpeed: 1000,
      navigation: false,
      easing: 'swing',

      afterLoad: function(anchorLink, index) {
        if (index != 1) {
          $('.footer').addClass('opacity')
        } else {
          $('.footer').removeClass('opacity')
        }
      }
    })
  }

  $('img, a').on('dragstart', function(event) {
    event.preventDefault()
  })
  const myLazyLoad = new LazyLoad({
    elements_selector: '.lazy'
  })
})

$('.slowly').on('click', function(event) {
  $('.slowly')
    .parent()
    .removeClass('active')
  $(this)
    .parent()
    .addClass('active')
  event.preventDefault()
  var id = $(this).attr('href')
  let top = $(id).offset().top
  $('body,html').animate({ scrollTop: top }, 600)
})

$('.kitchen-form__tab').on('click', function() {
  const material = $(this).data('material')
  const color = $(this).data('color')
  $('.card-sidebar__link--material').attr('href', `.${material}`)
  $('.card-sidebar__link--color').attr('href', `.${color}`)
})

function popup() {
  $('.overlay').toggleClass('active')
  $('.popup').toggleClass('active')
  $('.page-product-card').toggleClass('active')
}

$('.kitchen-form__btn').on('click', popup)
$('.overlay').on('click', popup)
$('.popup-content__icon').on('click', popup)
