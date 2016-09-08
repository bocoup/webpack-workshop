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

# Exercise 01 - My First App

### Goals:
* Install webpack in the exercise folder
* Convert `main.js` and `canvas.js` to use CommonJS module syntax (`require` and `module.exports`)
* Create a basic webpack config to bundle our demo application to a `dist/main.js`.
* Alter the `index.html` to point at `main.js` as its only `<script>` tag

### If you need a simple webserver, use `serve` from npm:

```shell
npm install -g serve
```

???

We expect this exercise to take around 5 to 10 minutes

Before you get to working on the first goal run a webserver in the exercise and see what the app does.

TK Add var to for-in statement in canvas.js

TK Write a story about why we need to copy files and give the answer to the copy file problem

TK Slide(s) on what the result should look like.
