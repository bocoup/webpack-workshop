class: center, middle
# html-webpack-plugin

# Can I have html as my entry?

???
We might find ourselves if we can have html as an entry in webpack.  The answer to this will probably always be no.

However, the common use case can be fulfilled with a plugin.

`html-webpack-plugin` renders a given template and inserts `<script>` and `<link>` tags for webpack output js and css files. This provides a great way to define the shape of html your app needs to boot into and connect the js and css files that you may need to otherwise.
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
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
};
```
???

The simplest html plugin use needs to refer to a template and output filename.

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

This lets you create builds with cache busting and per version file names. The only file that would change instead of be a new filename is index.html.

You can now deploy on top of a previous deploy without interrupting users using the last version. Users on the last version (until they refresh the page) can still load images for example, getting the right image even if the updated image is different for the same original file path because the old version and the new version will have different paths.

This also works for the js and css. As soon as the user loads the html file the rest of the use of that page can work as long as the files of that version persist on the server.
