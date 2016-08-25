var remark = require('remark');

var context = require.context('!!raw-loader!../content', true, /\d+[\w-]+\.md$/);

document.querySelector('#source').innerText = context.keys().map(function(key) {
  return context(key);
}).join('\n\n');

var slideshow = remark.create();
