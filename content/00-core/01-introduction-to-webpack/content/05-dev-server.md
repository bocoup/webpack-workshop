class: center, middle
name: ch1-sec5
# Dev Server
Illustate me?
???

Section 5

---

# Webpack Dev Server

`webpack-dev-server` is a module that can:

* watch input files for changes
* cause a rebuild to happen when input files are changed
* serve the "web application" for us

???

Webpack dev server is a great addition to the ecosystem.  It allows us to watch
our source code for changes, rebuild automatically, and see those changes in the browser.

It also acts as webserver for us while developing, hosting static content like images and html alongside the built output bundle.

---

# Installing webpack-dev-server

Inside of your project directory (`exercise`), run:

```shell
npm install --save-dev webpack-dev-server
```

### package.json `dev` Script

```json
{
  "scripts": {
    "build": "webpack && cp -R index.html img styles dist",
    "dev": "webpack-dev-server"
  }
}
```

`npm run dev` will run `webpack-dev-server`

???

Here is how we setup webpack-dev-server.  We need to `npm install` it just like we did with webpack, and setup a `script` to run it in the package.json.

---

# Configuring dev server

### Option 1: Command line arguments

```shell
webpack-dev-server --port 3000 --host 0.0.0.0
```

### Option 2: Configuration file

`webpack-dev-server` will pick up configuration in `webpack.config.js`:

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

-------

Does anyone have any questions before we try adding dev server to our meme generator?
