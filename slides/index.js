var remark = require('remark');
var slideshow = remark.create();

var slides = require('./slide-source');
// Ensure the rendered slides match the source in this script.
slideshow.loadFromString(slides);
if (module.hot) {
  // Hot replace any changes.
  module.hot.accept('./slide-source', function() {
    var slides = require('./slide-source');
    slideshow.loadFromString(slides);
    var thisSlide = slideshow.getCurrentSlideIndex() + 1;

    // Go to first slide, unless first slide, then go to second
    slideshow.gotoSlide(thisSlide === 1 ? 2 : 1);
    slideshow.gotoSlide(thisSlide);
  });
}
