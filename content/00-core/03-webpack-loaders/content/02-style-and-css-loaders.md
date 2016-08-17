# `style-loader` and `css-loader`

The style and css loaders are two iconic loaders demoing loaders working on each other's output.

- `css-loader` takes css as input and parses it for @import lines to let webpack track other css modules and urls as dependencies.
- `style-loader` takes the return from `css-loader` and create a module to add tags for the base css and its dependencies.

They should be both added as npm packages too:

```shell
npm install style-loader css-loader --save-dev
```

???

`css-loader` returns a js script that evaluates into an object that can be transformed by a call to its toString into a string containing css

---

# Importing your style with JS, part 1

Loading your style files means you can load it as a module.

Let's say you have an app strucutre like this:

- `src/`
  - `index.js`
- `styles/`
  - `index.css`
- `webpack.config.js`

---

# Importing your style with JS, part 2

...and your `webpack.config.js` is set to use the `style-loader`:

```js
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: 'dist/',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },
};
```

---

# Importing your style with JS, part 3

Now you can import that module with your `src/index.js`:

```js
require('./styles/index.css');
```

Done! This will add an style tag to your document, directly from your JS bundle.

---

# Modular css

Using the `css-loader` in this way, you can also count on webpack to bundle your css dependencies through `@import` lines.

```css
@import 'reset.css';
```

The line above will be parsed as a require and will load the contents `reset.css` in the css file with the import command.

---
