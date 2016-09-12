class: center, middle
# Exercise Time!

???

Section 4

---

# Pre-Exercise Recap
* We will use CommonJS `module.exports` and `require` to import and export.
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
* Run **`serve`** in the exercise and open a browser to **`localhost:3000`**
* Create a package.json with **`npm init --yes`**
* Install webpack in the exercise folder with  
  **`npm install --save-dev webpack`**
* Convert **`main.js`** and **`canvas.js`** to use CommonJS module syntax (**`require`** and **`module.exports`**)
* Create a basic webpack config to bundle our demo application to a **`dist/main.js`**.
* Alter the **`index.html`** to point at **`main.js`** as its only **`<script>`** tag
* Write package.json script to build webpack and copy files with  
  **`webpack && cp -R index.html img styles dist`**
* Run a build and run serve in dist

???

We expect this exercise to take around 5 to 10 minutes

Before you get to working on the first goal run a webserver in the exercise and see what the app does.

After that move through these steps to convert this project to webpack, run it, and see the output.

For now, we need to manually copy a few of the "additional files" since webpack will only be packing our JavaScript, our goal by the end of this core chapter will be to remove all these copied assets.

---

# Exercise 01 Answer Overview

**`main.js`**

```js
var drawMeme = require('./canvas').drawMeme;
var jQuery = require('../vendor/jquery-3.1.0');
```

**`canvas.js`**

```js
module.exports = {
  drawMeme: drawMeme,
};
```

**`index.html`**

```html
<script src="main.js"></script>
```

**`package.json`**

```json
"scripts": {
  "build": "webpack && cp -R index.html img styles dist"
}
```

