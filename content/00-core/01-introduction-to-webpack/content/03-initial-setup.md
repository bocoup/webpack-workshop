# Installing webpack

* Install node & npm
* Create an npm package.json if needed
>  `npm init --yes`
* Install webpack
>  `npm install --save-dev webpack`

???
We've talked a little about how webpack works, but lets talk about how to install it.

Webpack installation is done through npm, install the `webpack` package.

---

# Using webpack

```shell
export PATH=node_modules/.bin:$PATH
webpack
```

### or package.json - `npm run build`

```json
"scripts": {
  "build": "webpack"
}
```

### or combined with grunt, gulp, or broccoli

???

When working on node projects, it often helps to add the `node_modules/.bin` to your shells `PATH`.

You can also define a script in your `package.json` that creates an `npm run` command.

Webpack can be used as its own tool creating a standalone build process for simple projects and for complex projects can be integrated into tools like grunt, gulp, and broccoli.

---

# The most basic webpack configuration

## `webpack.config.js`

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

We are bringing this slide back once again to talk about the most basic configuration.

By default, webpack will look for the `webpack.config.js`, so we name our configuration file that.

We have to tell webpack the "context" (base directory) of our project, NodeJS provides us `__dirname` constant to mean the name of the directory of the current file, so this is very convenient.

Again, Entry, from the M.E.CH.A means "where we start", so we point this at whatever contains our "main application".

The output configuration, we provide a path and a filename.

That sums up how we install and get the most simple webpack configuration running, lets give it a shot!
