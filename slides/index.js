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
  });
}
