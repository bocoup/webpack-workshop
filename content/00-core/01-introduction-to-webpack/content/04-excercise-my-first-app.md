class: center, middle
# Excercise Time!

???

Section 4

---

# Pre-Excercise Recap
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

# Excercise 01 - My First App

### Goals:
* Install webpack in the excercise folder
* Convert `main.js` and `canvas.js` to use CommonJS module syntax (`require` and `module.exports`)
* Create a basic webpack config to bundle our demo application to a `dist/main.js`.
* Alter the `index.html` to point at `dist/main.js` as its only `<script>` tag

### If you need a simple webserver, use `serve` from npm:

```shell
npm install -g serve
```

???

We expect this excercise to take around 5 to 10 minutes
