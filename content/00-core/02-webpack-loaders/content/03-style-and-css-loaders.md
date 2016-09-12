# `style-loader` and `css-loader`

- `css-loader` handles `@import` and `url()`
- `style-loader` adds `<style>` tags to the DOM at runtime

???

The style and css loaders a perfect example of letting one loader consume another loaders output.

`css-loader` creates a js script that evaluates the css, translates @import and urls to requires, and returns an object that has a `toString` method, allowing `style-loader` to parse the return from `css-loader` and create a module that adds a `<style>` tag to the DOM.

The result in the end, is that `require('style.css')` will allow our css to become a part of webpack's output chunks, and be stored in our `dist/` folder.

---
# Installing style and css loader.

```shell
npm install style-loader css-loader --save-dev
```

???

These loaders are also predictably named on npm, and we save them to our dev dependencies.

---

# Importing your style with JS

- `src/`
  - `main.js`
- `styles/`
  - `all.css`
- `webpack.config.js`

???

Loading your style files means you can load it as a module.

Let's say you have an app structure like this:

---

# Importing your style with JS

### webpack.config.js
```js
module.exports = {
  // ...
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
```

???

...and your `webpack.config.js` is set to use the `style-loader`:


--

### src/main.js
```js
require('../styles/all.css');
```

???
Now you can import that module with your `src/main.js`:

Done! This will add a style tag to your document, directly from your JS bundle.

---

# What is css-loader doing?

CSS:
```css
@import 'reset.css';

.image { background: url('image.png'); }
/* more css */
```
Becomes (roughly):
```js
module.exports = require('./reset.css') + '\n\n'
  + '.image { background: url("' + require('./image.png') + '"); }\n'
  + '/* more css */';
```


???

Using the `css-loader` in this way, you can also count on webpack to bundle your css dependencies through `@import` lines.

This line will be handled like a require and will inject the contents of `require('reset.css')` in the eventual output chunks.

`css-loader` also lets `url('image.png')` be required. This lets webpack handle images and other files to include them in the build and transform them like any other module built with webpack.

---

# Why no `.css` file?

```
Hash: 9acbf8845506cd7f4e3b
Version: webpack 1.13.2
Time: 1356ms
                               Asset     Size  Chunks             Chunk Names
cbbb18816b6ef832d2498a285503e663.jpg  33.3 kB          [emitted]
864ebd1e430c50612eac9ebd4db1faf8.jpg  88.7 kB          [emitted]
f3db6422367750ca9c3711498d83e0f2.jpg  89.2 kB          [emitted]
                             main.js   310 kB       0  [emitted]  main
```

???

Note that unlike `file-loader` which emitted the assests, `css-loader` exports a module!

This means that the `.css` code is embedded inside of our `.js` code now!  We will be able to remove the `<link>` tag from our HTML, and `style-loader` will inject it for us
at runtime!
