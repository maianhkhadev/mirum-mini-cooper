document.addEventListener('DOMContentLoaded', function() {

  $('.section-01 .slick').slick({
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true
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
  let color = document.querySelector('.section-06 .block-colors figure')
  color.classList.add('active')

  let colors = document.querySelectorAll('.section-06 .block-colors figure')
  dots.forEach(function(dot) {
  })

  AOS.init()
})
