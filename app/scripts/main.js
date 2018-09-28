document.addEventListener('DOMContentLoaded', function() {

  $('.section-01 .slick-01').slick({
    dots: true,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<img class="slick-prev" src="./images/icon-angle-arrow-up-black-64.png" alt=""/>',
    nextArrow: '<img class="slick-next" src="./images/icon-angle-arrow-down-black-64.png" alt=""/>',
    asNavFor: '.section-01 .slick-02'
  })

  $('.section-01 .slick-02').slick({
    dots: false,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.section-01 .slick-01'
  })

  $('.section-03 .slick').slick({
    dots: false,
    arrows: false,
    variableWidth: true
  })

  let dots = document.querySelectorAll('.section-03 svg .dot')
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {

      let popovers = document.querySelectorAll('.section-03 svg .popover')
      popovers.forEach(function(popover) {
        popover.classList.remove('show')
      })

      let popover = dot.previousElementSibling
      popover.classList.add('show')
    })
  })

  // Set active color
  let color = document.querySelector('.section-06 .block-colors .color')
  color.classList.add('active')

  let colors = document.querySelectorAll('.section-06 .block-colors .color')
  colors.forEach(function(color) {
    color.addEventListener('click', function() {

      let imCarUrl = color.dataset.imCarUrl
      beforeSelectCarColor()
      onSelectCarColor(imCarUrl)
      color.classList.add('active')
    })
  })

  AOS.init()
})

function beforeSelectCarColor() {
  let colors = document.querySelectorAll('.section-06 .block-colors .color')
  colors.forEach(function(color) {
    color.classList.remove('active')
  })
}

function onSelectCarColor(imCarUrl) {
  let imCar = document.querySelector('.section-06 .im-car')

  if(imCar === null) {
    return
  }

  imCar.setAttribute('src', imCarUrl)
}
