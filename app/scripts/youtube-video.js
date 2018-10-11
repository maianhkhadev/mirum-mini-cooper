document.addEventListener('DOMContentLoaded', function() {
  var tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  let modal = document.querySelector('.modal-video')
  modal.addEventListener('modal.shown', function() {
    window.youtube.playVideo()
  })
  modal.addEventListener('modal.hidden', function() {
    window.youtube.stopVideo()
  })

  window.addEventListener('resize', function() {

    setTimeout(function() {
      let width = modal.clientWidth
      window.youtube.loadVideoById('0nN10kXNiIY')
      window.youtube.setSize(width, width * 0.5625)
      window.youtube.stopVideo()
    }, 1000)
  })


})

function onYouTubeIframeAPIReady() {
  let modal = document.querySelector('.modal-video')
  let width = modal.clientWidth

  window.youtube = new YT.Player('player', {
    width: width,
    height: width * 0.5625,
    videoId: '0nN10kXNiIY',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

function onPlayerReady(event) {

}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    setTimeout(function() {
      uiKit.Modal.hide('.modal-video')
    }, 600)
  }
}
