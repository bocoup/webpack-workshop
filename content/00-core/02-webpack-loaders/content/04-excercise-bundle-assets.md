name: ch1.2-ex2
# Exercise 04 - Building styles

### Recap

- `css-loader` transforms CSS into JavaScript that `require`s `@import`s and `url`s
- `style-loader` evaluates the JavaScript from `css-loader` and places it in a `style` tag

### Goals

- Install **`style-loader`** and **`css-loader`**
- Configure **`.css`** to be loaded by `style-` and `css-loader`
- Restart `dev` server script if it was already running
- Move **`styles`** folder into `src`
- **`require()`** the css file from `main.js`
- Remove the `<link>` tag from `index.html`
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

### Install the Loaders

**`npm install --save-dev style-loader css-loader`**

### Add Configuration

**`webpack.config.js`**: add a loader for `.css` files

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

???

To recap what we did in this exercise, we installed our loaders, configured them in webpack.config...

---

# Exercise 04 - Answer Overview (cont.)

### Require the Styles

In `main.js`:

```js
require('../styles/all.css');
```


### Remove `<link>`

**`index.html`**: edit to remove the `<link>` tag


### Update `build` script

Updated `package.json` `build` script (`styles` removed from `cp`):

```js
"build": "webpack && cp -R index.html dist"
```

???
required the style from our script, removed the link from our html, and removed the styles from our build script since they are now bundled with our javascript.

We are very close to removing the copy command entirely, and having the whole application bundled with webpack.

In order to remove that last `.html` file, we will need to go into a new realm of webpackery, Plugins.

Before we go into that, let's recap what we learned about loaders so far.
