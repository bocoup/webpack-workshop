name: ch1.2-sec3
# `style-loader` and `css-loader`

- `css-loader` parses CSS, handling `@import` and `url()` statements within CSS, as well
- `style-loader` dynamically adds `<style>` tags to the DOM at runtime

???

The style and css loaders are a perfect example of one loader consuming another loader's output.

`css-loader` will evaluate the CSS.  It translates `@import` and URLs to use `require`s and creates a module.  That module exports an object that has a `toString` method that outputs the css as a string!

`style-loader` can then use the module from `css-loader` and create a module that adds a `<style>` tag to the DOM.

The result in the end, is that `require('./style.css')` will allow our css to become a module in webpack's output chunks, and be stored in our `dist/` folder.

---

# How the CSS Loader Works

Let's say you have some CSS in `styles.css`:

```css
@import 'reset.css';

.image { background: url('image.png'); }
/* more css... */
```

And you `require` that CSS in a module:

```js
require('styles.css');
```

`css-loader` fulfills this `require` with (roughly):

```js
module.exports = require('./reset.css') + '\n\n'
  + '.image { background: url("' + require('./image.png') + '"); }\n'
  + '/* more css */';
```

Note how the `@import` and `url()` have been handled.

???

Using the `css-loader` in this way, you can also count on webpack to bundle your css dependencies through `@import` lines.

This line will be handled like a require and will inject the contents of `require('reset.css')` in the eventual output chunks.

`css-loader` also lets `url('image.png')` be required. This lets webpack handle images and other files to include them in the build and transform them like any other module built with webpack.

---
# How the Styles Loader Works

* `style-loader` injects CSS directly into the DOM
* No need for `<style>` tags in the HTML

???
* `style-loader` generates JavaScript that will inject the CSS it parses directly into the DOM dynamically at runtime
* This eliminates the need for `<style>` tags at all in the HTML
* The JavaScript returned by `style-loader` (within `main.js` in our case) will create `<style>` nodes and populate them with the CSS


---
# Installing the Loaders

```shell
npm install style-loader css-loader --save-dev
```

???

These loaders are also predictably named on npm, and we save them to our dev dependencies.

---

# Configuring the Loaders

### webpack.config.js
```js
module.exports = {
  // ...
  module: {
    loaders: [
      // file-loader here... ,
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
```

???

To use the loaders, we need to add another test and loader to our `module.loaders` in our webpack config.  Note that we use an exlamation point (bang) to separate and chain the loader output.  This style-bang-css means that style loader loads the output from css loader loading the file...

--

### src/main.js
```js
require('../styles/all.css');
```

???
Now you can import that module from your `src/main.js`:

Done! This will add a style tag to your document, directly from your JS bundle.

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

Note that unlike `file-loader` which emitted the assests, `css-loader` and `style-loader` export modules!

This means that the `.css` code is embedded inside of our `.js` code now!  We will be able to remove the `<link>` tag from our HTML, and `style-loader` will inject a `<style>` for us at runtime!

-------

Any questions before we try this out in our meme generator?
