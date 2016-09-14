# Exercise 04 - Building styles

### Recap

- css-loader transforms css into javascript that require's @imports and urls
- style-loader evaluates the javascript from css-loader and places it in a style tag

### Goals

- Install **`style-loader`** and **`css-loader`**
- Configure **`.css`** to be loaded by style and css loader
- Restart dev server if it was already running
- Move **`styles`** folder into `src`
- **`require()`** the css file
- Move `.image-selector` and `.select-image` classes into another file
- **`@import`** that file
- Remove the **`styles`** part of the `cp` command in the build script
- Run a build and notice the lack of a `.css` file output

---

# Exercise 04 - Answer Overview

**`webpack.config.js`**

```js
module: {
  loaders: [
    // other loaders
    {
      test: /\.(css)$/,
      loader: 'style-loader!css-loader',
    },
  ],
},
```

**`main.js`**

```js
require('./styles/all.css');
```

**`all.css`**

```css
@import 'image-select.css';
```
