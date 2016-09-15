class: center, middle
# Installing webpack with basic configurations

???

Alright, enough of the background knowledge, lets go over what we need to do to install and configure webpack the first time.  We have a short excercise to practice this process after this section.

---

# Installing webpack

* Install node & npm
* Create an npm package.json if needed
>  `npm init --yes`
* Install webpack
>  `npm install --save-dev webpack`

???
We've talked a little about how webpack works, but lets talk about how to install it.

Webpack installation is done through npm, you will need a `package.json` for your project which you can create very quickly with `npm init --yes`  We use `--yes` to skip a bunch of questions it would normally ask, all of this information you can change by editing `package.json`

In order to install the `webpack` package, we want to install via NPM and make sure to save it as a development depenedency.

---

# Using webpack

### package.json - `npm run build` - Recommended
```json
"scripts": {
  "build": "webpack"
}
```

### (sometimes useful to have)
```shell
export PATH=node_modules/.bin:$PATH
webpack
```

### or combined with grunt, gulp, or broccoli
(if you already use these tools)

???

After installing webpack, you should define a script in your `package.json` to launch it.  This creates an `npm run` command, and is the best way to run npm packages installed in a projects `node_modules`.

When working on node projects, it often helps to add the `node_modules/.bin` to your shells `PATH` anyway, which would let you run `webpack` from the shell directly, but we still recommend using an `npm run` script.

Webpack can be used as its own tool creating a standalone build process for simple projects, or for complex projects webpack can be integrated into tools like grunt, gulp, and broccoli.

---

# The most basic webpack configuration

## `webpack.config.js`

```js
module.exports = {
  // Base directory
  context: __dirname,
  // The "first" module - requires the `./`
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'main.js',
  },
};
```

???

By default, webpack will look for the `webpack.config.js`, so we name our configuration file that.

We have to tell webpack the "context" (base directory) of our project, NodeJS provides us `__dirname` constant to mean the name of the directory of the current file, so this is very convenient.

Again, Entry, from the M.E.CH.A means "where we start", so we point this at whatever contains our "main application".

The output configuration is fairly simple at this point, we want to provide a path and a filename.

------

That sums up how we install and get the most simple webpack configuration running, are there any questions before we move onto the exercise?
