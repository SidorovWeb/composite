import $ from 'jquery'

$('.hamburger').click(function() {
  $(this).toggleClass('hamburger--open')
  $('.nav').toggleClass('open')
  $('.header').toggleClass('open')
})
