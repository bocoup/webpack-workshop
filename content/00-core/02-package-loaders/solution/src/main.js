var canvas = require('./canvas');
var jQuery = require('../vendor/jquery-3.1.0');

var { addBorder, addSubtitle, replaceImage, updateSubtitle } = canvas;

jQuery(function($) {
  addBorder();
  addSubtitle();

  var imgInstance;

  $('.select-image').click(function(ev) {
    ev.preventDefault();
    var img = $('img', this)[0];

    replaceImage(img);
  });

  $('.edit-subtitle').on('keyup', function(ev) {
    updateSubtitle(ev.target.value);
  });
});
