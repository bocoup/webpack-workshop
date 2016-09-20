class: center, middle
# Exercise Time!
Illustration: The app running?
???

Section 4

Throught the exercises in this course we build upon our previous work to improve our bundling for our application.  Our application is a meme generator that our JavaScript team had written in the days before module bundlers.

---

# A built exercise

This first exercise will end up with a distribution folder like:

- dist
  - img/
  - styles/
  - index.html
  - main.js

???

The goal of each exercise in this course is to create a folder you could publish to a server. Given that at the end of each exercise you can run a local server with a tool like `serve` in the built folder to see what it'd be like published.

---

# Pre-Exercise Recap
* We will use CommonJS **`module.exports`** to export.
* We will use **`require`** to import. (`./` for relative path)
* Create `package.json` - **`npm init --yes`**
* Install Webpack - **`npm install --save-dev webpack`**
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

???

Just to recap the last section very quickly
- `module.exports` exports things in commonjs
- `require` requires other modules, you need to use a relative path
- `npm init` will create a package.json for us
- `npm install` with the save dev option will install webpack
- ... and the basic webpack.config.js will contain a context, entry and output options

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
* Write package.json `scripts` to build: run webpack and copy the non-js files
>  **`"build": "webpack && cp -R index.html img styles dist"`**
* **`npm run build`** then **`cd dist`** and **`serve`**
> Test output bundle

???

We expect this exercise to take around 5 to 10 minutes

Before you get to working on the first goal run a webserver in the exercise folder to see what the app does, and get used to using serve.

After that move through these steps to convert this project to webpack, run it, and see the output.

For now, we will need to manually copy a few of the "additional files" since webpack will only be packing our JavaScript, our goal by the end of this core chapter will be to remove all these copied assets.

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
you could have exported `drawMeme`, but either way, you'll want to `require` the canvas and jquery files from `main.js`

We also replaced the 3 script tags in our HTML with our output bundle, and have given ourselves our first `build` command in package.json

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

which looks like this.

Any questions about anything we've covered so far before we move on to adding the development server?
