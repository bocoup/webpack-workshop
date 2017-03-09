var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var subtitleStyles = {
  font: '24px "Helvetica Neue", helvetica',
  fillStyle: '#fff',
  textAlign: 'center',
  textBaseline: 'top',
};

var canvasImageCopy = new Image();
canvasImageCopy.onload = function() {
  context.drawImage(canvasImageCopy, 60, 60, 600, 450);
};

function drawMeme(image, text) {
  var width = canvas.getAttribute('width');
  var height = canvas.getAttribute('height');
  var borderPadding = 2;

  context.fillStyle = '#fff';
  context.fillRect(0, 0, width, height);

  context.fillStyle = '#000';
  context.fillRect(borderPadding, borderPadding, width-borderPadding*2, height-borderPadding*2);

  for (var key in subtitleStyles) {
    context[key] = subtitleStyles[key];
  }
  var measured = context.measureText(text);
  context.fillText(text, width / 2, height - 80);

  if (canvasImageCopy.src === image.src) {
    context.drawImage(canvasImageCopy, 60, 60, 600, 450);
  } else {
    canvasImageCopy.src = image.src;
  }
}

module.exports = {
  drawMeme: drawMeme,
};

