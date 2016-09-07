import '../styles/main.css';

import { addBorder, addSubtitle, replaceImage, updateSubtitle } from './canvas.js';
import jQuery from 'jquery';

jQuery(function($) {
  addBorder();
  addSubtitle();

  $('.select-image').click(function(ev) {
    ev.preventDefault();
    var img = $('img', this)[0];

    replaceImage(img);
  });

  $('.edit-subtitle').on('keyup', function(ev) {
    updateSubtitle(ev.target.value);
  });
});
