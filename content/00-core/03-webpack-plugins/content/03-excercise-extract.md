class: center, middle

# Exercise!

---

# Recap - CSS and HTML files

---

# Exercise 05 - Extract CSS & HTML File

- Install **`extract-text-webpack-plugin`** and **`html-webpack-plugin`**
- Configure those plugins in the webpack config
- Restart the dev server if its running
- Remove **`<link>`** and **`<script>`** tags in the html
- Refresh the browser window open to the dev server
- Notice the script is working thanks to HtmlWebpackPlugin
- Remove the `cp` command from the build script
- Run a build, you'll have a css file output this time
- Switch filenames to **`[hash]`** and **`[contenthash]`**
- Run another build, open the index.html in a text editor
- Notice `<link>` and `<script>` tags are added pointing to the right files

---

# Exercise 05 - Answer Overview

**`webpack.config.js`**

```js
module: {
  loaders: [
    // other loaders
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    },
  ],
},
plugins: [
  new ExtractTextPlugin('[contenthash].css'),
  new HtmlPlugin({
    template: 'index.html',
    filename: 'index.html',
  }),
],
```

**`package.json`**

```json
"scripts": {
  "build": "webpack",
```
