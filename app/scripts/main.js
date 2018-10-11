document.addEventListener('DOMContentLoaded', function() {

  loadedSection01()
  loadedSection03()
  loadedSection06()
  loadedSection07()

  AOS.init({
    once: true,
    offset: 0,
    duration: 500,
    easing: 'ease-in'
  })
})

function loadedSection01() {

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
}

function loadedSection03() {

  $('.section-03 .slick-01').slick({
    fade: true,
    dots: true,
    arrows: true,
    prevArrow: '<img class="slick-prev" src="./images/icon-angle-arrow-left-black-64.png" alt=""/>',
    nextArrow: '<img class="slick-next" src="./images/icon-angle-arrow-right-black-64.png" alt=""/>',
    asNavFor: '.section-03 .slick-02'
  })

  $('.section-03 .slick-02').slick({
    dots: false,
    arrows: false,
    variableWidth: true,
    asNavFor: '.section-03 .slick-01'
  })

  $('.section-03 .slick-01').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    let popovers = document.querySelectorAll('.section-03 svg .popover')
    popovers.forEach(function(popover) {
      popover.classList.remove('show')
    })
  })

  $('.section-03 .slick-01').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    showLabels()
  })

  let dots = document.querySelectorAll('.section-03 svg .dot')
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      
      if(dot.classList.contains('dot-active') === false) {
        let slickIndex = dot.dataset.slickIndex
        $('.section-03 .slick-01').slick('slickGoTo', slickIndex)
      }

      setTimeout(function() {
        uiKit.Modal.show('.modal-video')
      }, 1000)
    })
  })

  let images = document.querySelectorAll('.section-03 .slick .slick-item img')
  images.forEach(function(image) {
    image.addEventListener('click', function() {

      let slickIndex = image.dataset.slickIndex
      $('.section-03 .slick-01').slick('slickGoTo', slickIndex)
    })
  })

  showLabels()
}

function loadedSection06() {
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
}

function loadedSection07() {

  $('.section-07 #tab-content-01 .slick').slick({
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

  $('.section-07 #tab-content-02 .slick').slick({
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

function showLabels() {
  let popovers = document.querySelectorAll('.section-03 svg .popover')
  popovers.forEach(function(popover) {
    popover.classList.add('show')
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
