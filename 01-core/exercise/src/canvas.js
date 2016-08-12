var canvas = new fabric.Canvas('canvas');

var subtitle = new fabric.Text('Hello, world', {
  fontFamily: '"Helvetica Neue", helvetica',
  fontSize: 24,
  fill: '#fff',
  top: 520,
  selectable: false
});

var border = new fabric.Rect({
  color: '#000',
  width: 716,
  height: 596,
  left: 2,
  top: 2,
  selectable: false
});

function addBorder() {
  canvas.add(border);
}

function addSubtitle() {
  canvas.add(subtitle);
  subtitle.centerH();
}

function updateSubtitle(value) {
  subtitle.setText(value);
  subtitle.centerH();
} 

var imgInstance;

function replaceImage(img) {
  canvas.remove(imgInstance);

  imgInstance = new fabric.Image(img, {
    left: 60,
    top: 60,
    width: 600,
    height: 450,
    selectable: false
  });
  canvas.add(imgInstance);
}

