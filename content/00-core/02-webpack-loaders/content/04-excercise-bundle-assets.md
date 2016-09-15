# Exercise 04 - Building styles

### Recap

- css-loader transforms css into javascript that require's @imports and urls
- style-loader evaluates the javascript from css-loader and places it in a style tag

### Goals

- Install **`style-loader`** and **`css-loader`**
- Configure **`.css`** to be loaded by style and css loader
- Restart dev server if it was already running
- Move **`styles`** folder into `src`
- **`require()`** the css file from `main.js`
- Remove the `<link>` tag from the `index.html`
- Remove the **`styles`** part of the `cp` command in the build script
- Clean `dist/`
- `npm run build` and try `serve` from `dist`

???

In this exercise, we want you to bundle the css with the javascript.  You'll need to install the loaders, configure them in webpack.config, and then update the source code to require the css.

You can also remove the link tag from the index.html and and remove another
thing from our copy command in the build script.

After you do that, make sure your output bundle still has the proper styles!

---

# Exercise 04 - Answer Overview

**`npm install --save-dev style-loader css-loader`**: installed our loaders

**`webpack.config.js`**: added a loader for `.css` files

```js
module: {
  loaders: [
    // other loaders
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    },
  ],
},
```

**`main.js`**: require the styles

```js
require('../styles/all.css');
```

**`index.html`**: remove the `<link>` tag

**`package.json`**: remove `styles` from the cp:
```
  "build": "webpack && cp -R index.html dist"
```

???

To recap what we did in this exercise, we installed our loaders, configured them in webpack.config, required the style from our script, removed the link from our html, and removed the styles from our build script since they are now bundled with our javascript.

We are very close to removing the copy command entirely, and having the whole application bundled with webpack.

In order to remove that last `.html` file, we will need to go into a new realm of webpackery, Plugins.

Before we go into that, let's recap what we learned about loaders so far.
