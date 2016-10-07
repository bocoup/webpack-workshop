class: center, middle
name: ch1-sec3

# Installing webpack with basic configurations

???

Enough of the background knowledge, let's go how we install and configure webpack the first time.  We have a short excercise to practice this process after this section.

---

# Installing webpack for a Project

1. __Pre-Reqs__:
  Install Node.js and `npm`

2. __Initialize `package.json`__:
  If your project doesn't already have an `npm` `package.json` configuration, initialize one:

    `npm init --yes`

3. __Install webpack__:
  Install webpack locally for your project (and save it to `devDependencies` in the `package.json`):

    `npm install --save-dev webpack`

???
We've talked a little about how webpack works, but lets talk about how to install it.

Webpack installation is done through npm, you will need a `package.json` for your project which you can create very quickly with `npm init --yes`  We use `--yes` to skip a bunch of questions it would normally ask, all of this information you can change by editing `package.json`

In order to install the `webpack` package, we want to install via NPM and make sure to save it as a development depenedency.

---

# Using webpack: Option 1

### Take Advantage of `scripts` in `package.json`

Add a `build` entry to the `scripts` field in `package.json`, e.g.:

```json
"scripts": {
  "build": "webpack"
}
```

Then you can use the command:

`npm run build`

???

After installing webpack, you should define a script in your `package.json` to launch it.  This creates an `npm run` command, and is the most cross-platform, and self-documenting way to run npm packages.

Webpack can be used as its own tool creating a standalone build process for simple projects.

---

# Using Webpack: Option 2

### Combine webpack with your favorite task runner

If you already use `grunt`, `gulp`, or `broccoli`, you can integrate webpack into your existing toolchain.

???

For complex projects webpack can be integrated into existing toolchains like grunt, gulp, and broccoli.

---

# Webpack configuration: Ultra Basic Example

By default, webpack looks for a file called `webpack.config.js` in your project.

### `webpack.config.js`

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

We have to tell webpack the "context" (base directory) of our project, NodeJS provides us `__dirname` constant to mean the name of the directory of the current file, so this is very convenient value for that context.

Again, Entry, from the M.E.CH.A means "where we start", so we point this at whatever contains our "main application", in our exercise this will be `src/main.js`.  Note we need the `./` to indicate it is a relative path.

The output configuration is fairly simple at this point, we want to provide a path and a filename.

---

# Webpack Setup (Recap)

???

Here's a recap of how to set up webpack. ...

--

1. Install webpack for the project and save to `package.json`
???

Add webpack by installing it with npm and saving it to the package's list of
developere dependencies. ...

--

2. Create a `scripts` entry (`build`) in `package.json` or integrate webpack with your task runner
???

Setup a build process with webpack through an npm build script or with your task runner of choice. ...

--

3. Create a webpack configuration, default filename `webpack.config.js`
???

Add a configuration file for webpack called `webpack.config.js`. ...

--

4. In config object, make sure to define _at least_ these properties:
    * `context`: base directory
    * `entry`: "first" module
    * `output`: with `path` and `filename` properties

------
???

Fill in the config file with values for context, entry, and output. ...

--
???

That sums up how we install and get a simple webpack configuration running, are there any questions before we move onto the exercise?
