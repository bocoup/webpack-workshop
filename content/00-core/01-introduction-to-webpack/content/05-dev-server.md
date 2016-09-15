class: center, middle
# Dev Server

???

Section 5

---

# Webpack Dev Server

* Will watch input files for changes
* Will cause a rebuild to happen when changes happen
* Handles serving the "web application" for us

???

Webpack dev server is a great addition to the ecosystem.  It allows us to watch
our source code for changes, rebuild, and see those changes in the browser.

---

# Installing webpack-dev-server

```shell
npm install --save-dev webpack-dev-server
```

### package.json - `npm run dev`
```json
{
  "scripts": {
    "build": "webpack && cp -R index.html img styles dist"
    "dev": "webpack-dev-server"
  }
}
```

???

Here is how we setup webpack-dev-server.  We need to `npm install` it just like we did with webpack, and setup a `script` to run it in the package.json.

---

# Configuring dev server

### Command line arguments:
```shell
webpack-dev-server --port 3000 --host 0.0.0.0
```

### -or- in your `webpack.config.js`

```js
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  // ... the rest of the normal configuration stuff
};
```

???

Webpack dev server has quite a few options that are documented on the website, for the purpose of our exercise, we shouldn't need these, but we would like to show you how anyway.

In our example slide here, `host` and `port` are reconfigured to listen on port 3000, and allow outside connections (the default only listens on localhost).

We can either pass these options as command line arguments, or, we can set some values on the `devServer` property of our webpack config.
