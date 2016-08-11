jQuery(function($) {
  var canvas = new fabric.Canvas('canvas');

  var border = new fabric.Rect({
    color: '#000',
    width: 596,
    height: 496,
    left: 2,
    top: 2,
    selectable: false
  });
  canvas.add(border);

  var subtitle = new fabric.Text('Hello, world', {
    fontFamily: '"Helvetica Neue", helvetica',
    fontSize: 20,
    fill: '#fff',
    top: 420
  });
  canvas.add(subtitle);
  subtitle.centerH();

  var imgInstance;

  $('.select-image').click(function(ev) {
    ev.preventDefault();
    var img = $('img', this)[0];

    canvas.remove(imgInstance);

    imgInstance = new fabric.Image(img, {
      left: 100,
      top: 100,
      width: 400,
      height: 300
    });
    canvas.add(imgInstance);
  });

  $('.edit-subtitle').on('keyup', function(ev) {
    subtitle.setText(ev.target.value);
    subtitle.centerH();
  });
});
