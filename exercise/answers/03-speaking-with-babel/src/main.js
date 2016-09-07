import jQuery from '../vendor/jquery-3.1.0';

import {drawMeme} from './canvas';

jQuery($ => {
  let currentImage = $('.image-selector img')[0];
  let currentText = "Hello, world!";

  drawMeme(currentImage, currentText);

  $('.select-image').click(ev => {
    ev.preventDefault();
    currentImage = $('img', ev.currentTarget)[0];
    drawMeme(currentImage, currentText);
  });

  $('.edit-subtitle').on('keyup input', ev => {
    currentText = ev.target.value;
    drawMeme(currentImage, currentText);
  });
});
