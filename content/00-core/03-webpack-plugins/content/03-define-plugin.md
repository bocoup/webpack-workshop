# The Define Plugin

Our last plugin to cover isn't an optimization plugin normally but can have a similar affect thanks to how a lot of modern libraries are written.

The __DefinePlugin__ lets you make static definitions that when webpack's parser finds them, it replaces them with a desired value.

A growing number of libraries have debug assertions behind simple tests, often looking like:

```js
if (process.env.NODE_ENV !== "production") {
  ...
}
```

These assertions are great while developing to make sure you are not breaking assumptions your library makes or that you are using an API correctly.

Once you're ready to ship a feature, since those tests have already done their job and slow down your app, __DefinePlugin__ enters here to let you remove these tests.

---

# Common usage

A common DefinePlugin use for this looks like:

```
  // webpack.config.js
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
```

One common library that benefits from this setting is React. React's assertion wrapped by the above test are transfromed from:

```js
if (process.env.NODE_ENV !== "production") {
```

to:

```js
if ("production" !== "production") {
```

---

# A step further

```js
if ("production" !== "production") {
```

From this expression, webpack will take this a step further since this boolean test can be statically evaluated:

```js
if (false) {
```

---

# DefinePlugin + UglifyJSPlugin

This example produces a block that will never run:

```js
if (false) {
```

You can then run with UglifyJS, which will remove that block in its output. Including any other piece of dead code, webpack through uglify removes any code that could never run.

---

# Plugins vs loaders

Now we need to make something clear about what __DefinePlugin__ does because how it works is often misunderstood. This change to libraries built into an output script is affecting the runtime, when the output script is run in a browser.

We talked about `babel-loader` earlier. `babel-loader` is affected by the value of `process.env.NODE_ENV`. `babel`'s compiler uses `NODE_ENV` to determine some defaults when it runs. As it runs when when webpack runs it'll be effected by `NODE_ENV` in node's `process.env`. `process.env.NODE_ENV` in your scripts being affected by webpack and babel however will not be evaluated. Later when that code is evaluated in a browser, `NODE_ENV` won't be set, it'll be empty because babel and webpack don't persist that in their output.

This is where DefinePlugin comes in. It lets you persist a `NODE_ENV` value. As it persists that where it directly appears in your code provides some other benefits.

---

# Plugins vs Loaders (pt II)

- Babel uses `NODE_ENV` to default settings for building a production script.
- React uses `NODE_ENV` to consider assertions inside an already built script.
- DefinePlugin does not set the environment where Babel runs in as it helps build your app.
- DefinePlugin does set the environment where React runs in as it helps execute your built app.

If you want production settings for both Babel and a library like React you need to both set `NODE_ENV` in the process's environment __and__ in the built script through DefinePlugin.
