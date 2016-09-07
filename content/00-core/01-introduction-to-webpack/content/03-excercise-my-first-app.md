# Pre-Excercise Recap
* Add in recap steps needed to get to excercise?
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
* Use `require` instead of globals for canvas functions in `main.js`
* Create a basic webpack config to bundle our demo application to a `dist/` folder.
