var context = require.context(
  // Everything under content
  '!!raw-loader!../content',
  // recursive
  true,
  // Only match files that match 00-some-name.md
  /\d+[\w-]+\.md$/
);

module.exports = context.keys().map(function(key) {
  return context(key);
}).join('\n---\n\n');
