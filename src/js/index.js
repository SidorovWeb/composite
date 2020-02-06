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

  if (document.querySelector('#map')) {
    ymaps.ready(function() {
      var myMap = new ymaps.Map(
          'map',
          {
            center: [55.751969, 37.545294],
            zoom: 15,
            controls: [
              'zoomControl',
              // 'searchControl',
              'typeSelector',
              'fullscreenControl',
              'routeButtonControl'
            ]
          },
          {
            searchControlProvider: 'yandex#search'
          }
        ),
        //  myMap.behaviors.disable('scrollZoom'),
        // Создаём макет содержимого.
        // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        //   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        // ),
        myPlacemark = new ymaps.Placemark(
          myMap.getCenter(),
          {
            // hintContent: 'Собственный значок метки',
            balloonContent: 'Краснопресненская набережная, 14'
          },
          {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/svg/pin.svg',
            // Размеры метки.
            iconImageSize: [55, 52],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-28, -62]
          }
        )
      // myPlacemarkWithContent = new ymaps.Placemark(
      //   [55.661574, 37.573856],
      //   {
      //     hintContent: 'Собственный значок метки с контентом',
      //     balloonContent: 'А эта — новогодняя',
      //     iconContent: '12'
      //   },
      //   {
      //     // Опции.
      //     // Необходимо указать данный тип макета.
      //     iconLayout: 'default#imageWithContent',
      //     // Своё изображение иконки метки.
      //     iconImageHref: 'img/svg/pin.svg',
      //     // Размеры метки.
      //     iconImageSize: [55, 72],
      //     // Смещение левого верхнего угла иконки относительно
      //     // её "ножки" (точки привязки).
      //     iconImageOffset: [-28, -62],
      //     // Смещение слоя с содержимым относительно слоя с картинкой.
      //     iconContentOffset: [15, 15],
      //     // Макет содержимого.
      //     iconContentLayout: MyIconContentLayout
      //   }
      // )

      $('.contacts__btn').on('click', function() {
        var control = myMap.controls.get('routeButtonControl')

        // Зададим координаты пункта отправления с помощью геолокации.
        control.routePanel.geolocate('from')

        // Откроем панель для построения маршрутов.
        control.state.set('expanded', true)
      })

      myMap.geoObjects.add(myPlacemark)
      // myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent)
      myMap.behaviors.disable('scrollZoom')
    })
  }
})
