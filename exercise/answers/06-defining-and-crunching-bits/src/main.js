import './styles/all.css';

import jQuery from '../vendor/jquery-3.1.0';

import {drawMeme} from './canvas';
import * as memes from './memes';

if (process.env.NODE_ENV !== 'production') {
  console.log('running in development');
}
else {
  console.log('running in production');
}

jQuery($ => {
  const memeKeys = Object.keys(memes);

  $('.select-image img').each((index, img) => {
    $(img).attr('src', memes[memeKeys[index]]);
  });

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
