# The Define Plugin


???

Our last plugin to cover isn't an optimization plugin normally, but has a similar effect.

The __DefinePlugin__ lets you provide static values that webpack's parser can use to replace specific identifiers within your code...

--

```js
if (process.env.NODE_ENV !== "production") {
  ...
}
```

???

A growing number of libraries have debug assertions behind simple tests, often looking like this.  These assertions are great while developing to add extra code to ensure you are using things correctly.

Once you're ready to ship a feature, since those tests have already done their job and slow down your app, __DefinePlugin__ allows you to remove these tests.

---

# The Define Plugin

webpack.config.js:
```js
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
```
----
then:
```js
if (process.env.NODE_ENV !== "production") {
  ...
}
```
becomes:
```js
if (false) {
  ...
}
```

???

To use the plugin, we add the define plugin in our plugins list, and pass it an object of identifiers to replace.

In this example, we will replace `process.env.NODE_ENV` with the string *quote* **production** *quote* - a string literal in JSON format.

From this expression, webpack will replace the value in the if expression, recognize that it is a static condition, and evaluate it.  Our code now says `if (false)`

---

# DefinePlugin + UglifyJSPlugin

This never runs!

```js
if (false) {
```

Uglify knows this and removes "dead code"

???

Combined with UglifyJS, this code is then removed from our output bundle because it will never run, and we have optimized our production builds.

(let it sink in)

--

# Only in production

### webpack.config.js
### webpack.production.js
> `webpack --config webpack.production`


???

These features are great for production builds, but only complicate your development process.  We need a way to disable them for our development builds.

We need one config to build, and one config to develop.

So what we can do is create a second configuration file, and tell our build process to use it.

----

Any questions before we try these two plugins in our meme generator?
