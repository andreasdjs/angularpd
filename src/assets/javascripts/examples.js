webPdExamples = {
  
  init: function() {
    // starting in iOS9, audio will only be unmuted if the context is created on "touchend".
    // see : https://github.com/sebpiq/WebPd/issues/81  
    var is_iOS = /iPad|iPhone|iPod/.test(navigator.platform)
      , eventType = is_iOS ? 'touchend' : 'click'
  },

  patchLoaded: function(mainStr) {
    console.log("Patch loaded.");
    $('#svg').html(pdfu.renderSvg(pdfu.parse(mainStr), {svgFile: false, ratio: 1.5}))
    console.log("SVG rendered.");
  }

}