var canvas = new fabric.Canvas('canvas');

var subtitle = new fabric.Text('Hello, world', {
  fontFamily: '"Droid Serif", helvetica',
  fontSize: 24,
  fontWeight: 400,
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

export function addBorder() {
  canvas.add(border);
}

export function addSubtitle() {
  canvas.add(subtitle);
  subtitle.centerH();
}

export function updateSubtitle(value) {
  subtitle.setText(value);
  subtitle.centerH();
} 

var imgInstance;

export function replaceImage(img) {
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

