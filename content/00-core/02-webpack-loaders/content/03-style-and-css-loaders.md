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
  - `index.js`
- `styles/`
  - `index.css`
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

### src/index.js
```js
require('../styles/index.css');
```

???
Now you can import that module with your `src/main.js`:

Done! This will add a style tag to your document, directly from your JS bundle.

---

# Modular css

```css
@import 'reset.css';
```

???

Using the `css-loader` in this way, you can also count on webpack to bundle your css dependencies through `@import` lines.

This line will be handled like a require and will inject the contents of `require('reset.css')` in the eventual output chunks.

--

## required urls

```css
.image {
  background: url('image.png');
}
```

???

`css-loader` also lets `url('image.png')` be required. This lets webpack handle images and other files to include them in the build and transform them like any other module built with webpack.
