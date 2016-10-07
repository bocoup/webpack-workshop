class: center, middle
name: ch1-ex1
# Exercise Time!
Illustration: The app running?

???

Section 4

---

# Bundling a Meme-Generating App

All of the exercises in this workshop build upon each other, improving the bundling for our application.

The application involved is a _meme generator_, built by our JavaScript team in the days before module bundlers.

???

Throughout the exercises in this course we build upon our previous work to improve our bundling for our application.  Our application is a meme generator that our JavaScript team had written in the days before module bundlers.

---

# Exercise Prep

You only perform these steps once!

### 1. Install `serve`

Install the `serve` module (basic webserver for viewing the app) globally:

`npm install -g serve`

### 2. Initialize the Project and Install webpack

1. `cd` to the `exercise` directory
2. `npm init --yes` to create an initial `package.json`
3. `npm install --save-dev webpack` to install webpack

???


These steps will only need to be taken once today to prepare your working directory (the `exercise` directory in this repository).

- `npm init` will create a package.json for us
- `npm install` with the save dev option will install webpack

---

# Exercise

The first exercise will get webpack going using a basic configuration. It will result in a distribution folder structure like this:

```
└── dist
    ├── img
    ├── index.html
    ├── main.js
    └── styles
```

???

The goal of each exercise in this course is to create a folder you could publish to a server. Given that at the end of each exercise you can run a local server with a tool like `serve` in the built (i.e. output) folder to see what it'd be like published.

---

# Pre-Exercise Recap

* To prepare modules for use with webpack, we'll use CommonJS syntax (**`module.exports`** to export).
* We will use **`require`** to import. (`./` for relative path)

### Recap of Basic Webpack Configuration

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
- ... and the basic webpack.config.js will contain a context, entry and output options

---

# Exercise 01 - My First App

1. **Preview the application**: From your project directory, run `serve` and open a browser to `localhost:8080`
2. **Prepare modules for webpack**: Convert `main.js` and `canvas.js` to CommonJS syntax (use `require` and `module.exports`)
3. **Alter `index.html`**: `index.html` should reference only `main.js` from its `<script>` tag
4. **Configure webpack**: Create a basic configuration in `webpack.config.js` to bundle the application and output it to `dist/main.js`
5. **Set up `build`**: Add a `build` script to the `package.json`'s `scripts` field. The script should run webpack _and_ copy non-JS files to the distribution directory:

    `"build": "webpack && cp -R index.html img styles dist"`

6. **Build with webpack**! `npm run build`
7. **Test** the output bundle: `cd dist; serve` (Remember, webpack-built output is in `dist`)

???

We expect this exercise to take around 5 to 10 minutes

Before you get to working on the first goal run a webserver in the exercise folder to see what the app does, and get used to using serve.

After that move through these steps to convert this project to webpack, run it, and see the output.

For now, we will need to manually copy a few of the "additional files" since webpack will only be packing our JavaScript, our goal by the end of this core chapter will be to remove all these copied assets.

---

# Exercise 1 Answer: Prepare Modules

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

???

Let's go over each of the changes we made.  There are a couple of variations on how
you could have exported `drawMeme`, but either way, you'll want to `require` the canvas and jquery files from `main.js`

---
# Exercise 1 Answer: Alter `index.html`

**`index.html`**: Replaced three script tags with

```html
<script src="main.js"></script>
```

???

We also replaced the 3 script tags in our HTML with our output bundle

---
# Exercise 1 Answer: Set up `build` Script

**`package.json`**: Created with `npm init`, and added this script

```json
"scripts": {
  "build": "webpack && cp -R index.html img styles dist"
}
```

???

... and have given ourselves our first `build` command in package.json

The only thing left is the basic webpack configuration

---

# Exercise 1 Answer: Webpack configuration

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
