class: center, middle

# Exercise 06 - Production

---

# Recap - Uglify and Define

- Uglify and Define plugins provided by webpack

## Uglify

- Runs uglify on output
- Smaller output than running uglify separately
- warnings can be turned off with `{compress: {warnings: false}}`

## Define

- Defines constant values
- Those values can resolve tests to be always true or always false
- Paired with Uglify, code under if/else blocks that are always false are removed from Output
- Define makes code never run, Uglify makes code never download

---

# Exercise 06 - Production

- require **`webpack`** at the beginning of the config
- Add **`UglifyJs`** and **`Define`** plugins
- Restart the dev server if running
- Notice how much longer it takes now?
- Make a second production config with ExtractText, Uglify, and Define
- Remove ExtractText, Uglify, and Define from **`webpack.config.js`**
- Update the npm build script to use  
  **`webpack --config webpack.config.production.js`**
- Add a **`if () {} else {}`** block in `main.js` to demonstrate DefinePlugin  
  (it could for example change the images available or just console.log)
- Check out different of your `if/else` block causes between a development build and a production build

---

# Exercise 06 - Answer Overview

**`webpack.config.js`**

```js
plugins: [
  new HtmlPlugin(/* options */),
],
```

**`webpack.config.production.js`**
```js
plugins: [
  new ExtractTextPlugin('[contenthash].css'),
  new HtmlPlugin(/* options */),
  new webpack.optimize.UglifyJsPlugin(/* options */),
  new webpack.DefinePlugin(/* options */),
],
```

**`package.json`**
```json
"build": "webpack --config webpack.config.production.js",
```

---

# Exercise 06 - Answer Overview

**`main.js`**
```js
if (process.env.NODE_ENV !== 'production') {
  console.log('in development mode');
}
else {
  console.log('in production mode');
}
```
