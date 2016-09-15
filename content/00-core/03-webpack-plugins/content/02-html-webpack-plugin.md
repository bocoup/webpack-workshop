class: center, middle
# html-webpack-plugin

# Can I have html as my entry?

???
We might find ourselves asking if we can have html as an entry in webpack. The answer to this is no.

However, the common use case can be fulfilled with a plugin.

`html-webpack-plugin` renders a given template and inserts `<script>` and `<link>` tags for js and css assets.

This provides a great way to define the shape of html your app needs to boot into, then connect that HTML to the necessary js and css files automatically.  It also provides the last thing we need to remove the copy from our meme generator.
---

# Simplest config

```shell
npm install --save-dev html-webpack-plugin
```

```javascript
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    // extract text,
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
};
```
???

To configure the html plugin we need to refer to a template and output filename.

With only these simple lines of configuration, we can remove the copy command from our build, and the link and script tags will now be added to our html automatically, so we can remove the `<script>` tag from that html as well.

---

# Now we can hash!

```javascript
module.exports = {
  // ...
  output: {
    // ...
    filename: '[hash].js',
  },
  plugins: [
    new ExtractTextPlugin('[contenthash].css'),
    new HtmlPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
};
```

???

Now that we have webpack generating an `index.html` in our `dist` folder, we can take advantage of using the `hash` output features for other output chunks like javascript, and css.

This lets you create builds with cache busting and per-version file names. The only file that would not be hashed in this example is your `index.html`.

You can now deploy on top of a previous deploy without interrupting users using the last version. Users on the last version (until they refresh the page) can still load images for example, getting the right image even if the updated image is different for the same original file path because the old version and the new version will have different output paths.

This also works for the javascript and css. As soon as the user loads the page it will continue to work as long as the hashed files of that version persist on the server.

----

Are there any questions about Extract Text or Html plugins before we implement them in our meme generator?
