// import Inputmask from '../../../../node_modules/maskedinput/index.js'
// import validate from 'jquery-validation'
// import $ from 'jquery'

// // console.log(inputmask)
// var im = new Inputmask('8 999 999 99-99')
// im.mask('#telFF')

// //  plugin jq validate
// $(function() {
//   $('#ajax-contact-form').validate({
//     errorPlacement: function(error, element) {
//       if (element.attr('name') == 'checkbox') {
//         error.insertAfter(element.parent())
//       } else {
//         error.insertAfter(element)
//       }
//       return true
//     },
//     ignore: ':disabled',
//     errorClass: 'invalid',
//     validClass: 'success',
//     // errorElement: false,
//     highlight: function(element, errorClass, validClass) {
//       $(element)
//         .parent()
//         .addClass(errorClass)
//         .removeClass(validClass)
//     },
//     unhighlight: function(element, errorClass, validClass) {
//       $(element)
//         .parent()
//         .removeClass(errorClass)
//         .addClass(validClass)
//     },
//     rules: {
//       checkboxFF: {
//         required: true
//       },
//       nameFF: {
//         required: true,
//         minlength: 3
//       },
//       emailFF: {
//         required: true,
//         email: true
//       },
//       telFF: {
//         required: true
//       },
//       textareaFF: {
//         required: false
//       }
//     },
//     messages: {
//       nameFF: {
//         required: false,
//         minlength: 'Не менее 3 символов'
//       },
//       emailFF: {
//         required: false,
//         email: 'адрес электронной почты должен быть в формате name@domain.com'
//       },
//       telFF: {
//         required: false
//       },
//       checkboxFF: {
//         required: false
//       }
//     },
//     submitHandler: function(form, e) {
//       var http = new XMLHttpRequest(),
//         f = form
//       e.preventDefault()
//       http.open('POST', 'contact.php', true)
//       http.onreadystatechange = function() {
//         if (http.readyState == 4 && http.status == 200) {
//           alert(http.responseText)
//           if (http.responseText.indexOf(f.nameFF.value) == 0) {
//             // очистить поля формы, если в ответе первым словом будет имя отправителя (name)
//             $('#ajax-contact-form').trigger('reset')
//             $('.form-group').removeClass('success')
//             $('.form-group').removeClass('focus')
//           }
//         }
//       }
//       http.onerror = function() {
//         alert('Ошибка, попробуйте еще раз')
//       }
//       http.send(new FormData(f))
//     }
//   })
// })

// $('.form__label-check').click(function() {
//   $('#checkboxFF-error').remove()
// })
