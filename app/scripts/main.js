document.addEventListener('DOMContentLoaded', function() {

  $('.section-01 .slick-01').slick({
    dots: true,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<img class="slick-prev" src="./images/icon-angle-arrow-up-black-64.png" alt=""/>',
    nextArrow: '<img class="slick-next" src="./images/icon-angle-arrow-down-black-64.png" alt=""/>',
    asNavFor: '.section-01 .slick-02',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          arrows: false,
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  })

  $('.section-01 .slick-02').slick({
    dots: false,
    arrows: false,
    fade: true,
    draggable: false,
    prevArrow: '<img class="slick-prev" src="./images/icon-angle-arrow-up-black-64.png" alt=""/>',
    nextArrow: '<img class="slick-next" src="./images/icon-angle-arrow-down-black-64.png" alt=""/>',
    asNavFor: '.section-01 .slick-01',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: true,
        }
      }
    ]
  })

  $('.section-03 .slick').slick({
    dots: false,
    arrows: false,
    variableWidth: true
  })

  $('.section-07 .slick').slick({
    dots: false,
    arrows: false,
    draggable: false
  })

  $('.section-04 select').selectize()

  let progressBar = document.querySelector('.section-07 .progress-bar')
  progressBar.percentWidth = 0
  setInterval(function() {

    if(progressBar.percentWidth === 100) {
      onSlidesMove()
    }

    progressBar.percentWidth += 0.5
    progressBar.style.width = `${progressBar.percentWidth}%`
  }, 25)

  let slideLinks = document.querySelectorAll('.section-07 .slide-link')
  slideLinks.forEach(function(slideLink) {
    slideLink.addEventListener('click', function(e) {
      e.preventDefault()

      slideLinks.forEach(function(element) {
        element.classList.remove('active')
      })
      slideLink.classList.add('active')

      onSlidesMove()
    })
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

  loadedSection07()

  AOS.init({
    offset: 0,
    duration: 500,
    easing: 'ease-in'
  })
})

function loadedSection07() {
  let dots = document.querySelectorAll('.section-07 [class*="dot-"]')
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      uiKit.Modal.show('.modal-video')
    })
  })
}

function onSlidesMove() {
  let progressBar = document.querySelector('.section-07 .progress-bar')
  progressBar.percentWidth = 0
  progressBar.style.width = 0;

  $('.section-07 .slick').slick('slickNext')
}

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
