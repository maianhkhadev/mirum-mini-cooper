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

  loadedSection03()
  loadedSection07()

  AOS.init({
    once: true,
    offset: 0,
    duration: 500,
    easing: 'ease-in'
  })
})

function loadedSection03() {
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
}

function loadedSection07() {

  $('.section-07 #tab-content-01 .slick').slick({
    dots: false,
    arrows: false,
    swipe: false,
    draggable: false,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('.section-07 #tab-content-02 .slick').slick({
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

  let tab = document.querySelector('.section-07 .tab:nth-child(2)')
  tab.addEventListener('tab.change', function(e) {
    let tabContent = document.querySelector('.section-07 .tab .show')
    onSlidesNext(`#${tabContent.id}`)
  })

  onTabLoaded('#tab-content-01')
  onTabLoaded('#tab-content-02')

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

function onTabLoaded(tabId) {
  let slickPrevLink = document.querySelector(`.section-07 ${tabId} .icon-arrow-left`)
  slickPrevLink.addEventListener('click', function() {
    onSlidesPrev(tabId)
  })

  let slickNextLink = document.querySelector(`.section-07 ${tabId} .icon-arrow-right`)
  slickNextLink.addEventListener('click', function() {
    onSlidesNext(tabId)
  })

  let progressBar = document.querySelector(`.section-07 ${tabId} .progress-bar`)
  progressBar.percentWidth = 0
  setInterval(function() {

    if(progressBar.percentWidth === 100) {
      onSlidesNext(tabId)
    }

    progressBar.percentWidth += 0.5
    progressBar.style.width = `${progressBar.percentWidth}%`
  }, 25)
}

function onSlidesPrev(tabId) {
  let progressBar = document.querySelector(`.section-07 ${tabId} .progress-bar`)
  progressBar.percentWidth = 0
  progressBar.style.width = 0;

  $(`.section-07 ${tabId} .slick`).slick('slickPrev')
}

function onSlidesNext(tabId) {
  let progressBar = document.querySelector(`.section-07 ${tabId} .progress-bar`)
  progressBar.percentWidth = 0
  progressBar.style.width = 0;

  $(`.section-07 ${tabId} .slick`).slick('slickNext')
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
