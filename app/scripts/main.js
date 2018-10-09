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

  // loadedSection04()
  loadedSection07()

  AOS.init({
    once: true,
    offset: 0,
    duration: 500,
    easing: 'ease-in'
  })
})

function loadedSection04() {

  $('.section-04 select').selectize({
    onChange: function() {
      calcCarFee()
    }
  })

  calcCarFee()
}

function loadedSection07() {

  $('.section-07 .slick').slick({
    dots: false,
    arrows: false,
    swipe: false,
    draggable: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '30%',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '20%'
        }
      }, {
        breakpoint: 600,
        settings: {
          centerMode: false
        }
      }
    ]
  })

  let slickPrevLink = document.querySelector('.section-07 .icon-arrow-left')
  slickPrevLink.addEventListener('click', function() {
    onSlidesPrev()
  })

  let slickNextLink = document.querySelector('.section-07 .icon-arrow-right')
  slickNextLink.addEventListener('click', function() {
    onSlidesNext()
  })

  let progressBar = document.querySelector('.section-07 .progress-bar')
  progressBar.percentWidth = 0
  setInterval(function() {

    if(progressBar.percentWidth === 100) {
      onSlidesNext()
    }

    progressBar.percentWidth += 0.5
    progressBar.style.width = `${progressBar.percentWidth}%`
  }, 25)

  let buttons = document.querySelectorAll('.section-07 .dot button')
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      let url = button.dataset.modalImageUrl
      let image = document.querySelector('.modal-image .image-detail')
      image.style.backgroundImage = `url(${url})`

      let touchDevice = document.querySelector('.touch-device')
      if(touchDevice === null) {
        uiKit.Modal.show('.modal-image')
      }
      else {
        setTimeout(function() {
          uiKit.Modal.show('.modal-image')
        }, 500)
      }
    })
  })
}

function calcCarFee() {
  let value = 0
  let selects = document.querySelectorAll('.section-04 .show select')
  selects.forEach(function(select) {
    value += parseInt(select.value)
  })

  let valueElement = document.querySelector('.section-04 .block-info .value')
  valueElement.innerHTML = value.toFixed(2);
}

function onSlidesPrev() {
  let progressBar = document.querySelector('.section-07 .progress-bar')
  progressBar.percentWidth = 0
  progressBar.style.width = 0;

  $('.section-07 .slick').slick('slickPrev')
}

function onSlidesNext() {
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
