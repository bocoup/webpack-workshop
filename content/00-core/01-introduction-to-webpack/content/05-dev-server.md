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
    "build": "webpack",
    "dev": "webpack-dev-server"
  }
}
```

???

Here is how we setup webpack-dev-server.  We need to `npm install` it just like we did with webpack, and setup a `script` to run it in the package.json.

---

# Common Options
The most common options you might need to specify with webpack-dev-server are host and port:

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

Webpack dev server has quite a few options that are documented on the website, but the most common and important ones will be `host` and `port`.  Here is an example of how you can configure dev-server to listen on a different host and port.
