class: center, middle
name: ch1.3-ex2

# Exercise 06 - Production

---

# Recap - Uglify and Define

- `Uglify` and `Define` plugins are built-in (provided by webpack)

--

## Uglify

- Runs `uglify` on output
- Smaller output than running `uglify` separately
- warnings can be turned off in config with `{compress: {warnings: false}}`

--

## Define

- Defines constant values
- Those values can resolve tests to be always true or always false
- Paired with Uglify, code under if/else blocks that are always false are removed from output

--

_Define makes code never run, Uglify makes code never download_

---

# Exercise 06 - Production

### Goals

- **require webpack**: Add new `require` statement at top of config
- **Add plugin configuration** for `UglifyJsPlugin` and `DefinePlugin`
- **Restart `dev`** server if running
- (Notice how much longer it takes now?)
- **Create a production config**: Add configuration for `ExtractText`, `Uglify` and `Define`
- **Remove** `ExtractText`, `Uglify` and `Define` from (dev) `webpack.config.js`
- **Update `build` script** in `package.json` to use

    ```shell
    webpack --config webpack.config.production.js
    ```
- Note that the "debug mode" console log in our main.js doesn't exist in the `dist` output

---

# Exercise 06 - Answer Overview

**`webpack.config.js`**

```js
plugins: [
  new HtmlPlugin(/* options */),
],
```

--

**`webpack.config.production.js`**
```js
plugins: [
  new ExtractTextPlugin('[contenthash].css'),
  new HtmlPlugin(/* options */),
  new webpack.optimize.UglifyJsPlugin(/* options */),
  new webpack.DefinePlugin(/* options */),
],
```

--

**`package.json`**
```json
"build": "webpack --config webpack.config.production.js",
```

---

# Exercise 06 - Answer Overview (cont.)

**`main.js`**
```js
if (process.env.NODE_ENV !== 'production') {
  console.log('in development mode');
}
else {
  console.log('in production mode');
}
```
