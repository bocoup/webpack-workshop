class: center, middle
# Exercise Time!

???

Section 4

---

# Pre-Exercise Recap
* We will use CommonJS `module.exports` to export.
* We will use `require` to import.
* Install Webpack - `npm install --save-dev webpack`
* Basic Webpack configuration

```js
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'main.js',
  },
};
```

---

# A built exercise

The goal of each exercise in this course is to create a folder you could publish to a server. Given that at the end of each exercise you can run a local server with a tool like `serve` in the built folder to see what it'd be like published.

This first exercise will end up with a distribution folder like:

- dist
  - img
  - styles
  - index.html
  - main.js

---

# Exercise 01 - My First App

* Install serve with **`npm install -g serve`**
* Run **`serve`** in the exercise folder and open a browser to **`localhost:3000`**
> Examine the application before making changes
* Create a package.json: **`npm init --yes`**
* Install webpack:
  **`npm install --save-dev webpack`**
* Convert **`main.js`** and **`canvas.js`** to use CommonJS syntax (**`require`** and **`module.exports`**)
* Create a basic webpack config to bundle our demo application to a **`dist/main.js`**.
* Alter the **`index.html`** to point at **`main.js`** as its only **`<script>`** tag
* Write package.json script to build: run webpack and copy the non-js files
>  **`"build": "webpack && cp -R index.html img styles dist"`**
* **`npm run build`** then **`cd dist`** and **`serve`**
> Test output bundle

???

We expect this exercise to take around 5 to 10 minutes

Before you get to working on the first goal run a webserver in the exercise and see what the app does.

After that move through these steps to convert this project to webpack, run it, and see the output.

For now, we need to manually copy a few of the "additional files" since webpack will only be packing our JavaScript, our goal by the end of this core chapter will be to remove all these copied assets.

---

# Exercise 01 Answer Overview

**`main.js`**: Require the drawMeme and jQuery, instead of relying on global scope
```js
var drawMeme = require('./canvas').drawMeme;
var jQuery = require('../vendor/jquery-3.1.0');
```

**`canvas.js`**: Added an export to the bottom

```js
module.exports = {
  drawMeme: drawMeme,
};
```

**`index.html`**: Replaced three script tags with

```html
<script src="main.js"></script>
```

**`package.json`**: Created with `npm init`, and added this script

```json
"scripts": {
  "build": "webpack && cp -R index.html img styles dist"
}
```

???

Let's go over each of the changes we made.  There are a couple of variations on how
you could have exported `drawMeme`, but either way, you'll want to `require` the canvas.js and jquery files from `main.js` now, replace the 3 scripts we were loading
before with our output bundle, and have given ourselves our first `build process`

The only thing left is the basic webpack configuration...

---

# Exercise 01 Answer Overview (2)

**`webpack.config.js`**: Basic setup:
```js
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'main.js',
  },
};
```

???

Which was entirely unmodified from the recap slide.

Any questions about anything we've covered so far before we move on to adding the development server?
