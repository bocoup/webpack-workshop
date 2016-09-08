var canvas = require('./canvas');
var jQuery = require('../vendor/jquery-3.1.0');

var drawMeme = canvas.drawMeme;

jQuery(function($) {
  var currentImage = $('.image-selector img')[0];
  var currentText = "Hello, world!";

  canvas.drawMeme(currentImage, currentText);

  $('.select-image').click(function(ev) {
    ev.preventDefault();
    currentImage = $('img', this)[0];
    drawMeme(currentImage, currentText);
  });

  $('.edit-subtitle').on('keyup input', function(ev) {
    currentText = ev.target.value;
    drawMeme(currentImage, currentText);
  });
});
