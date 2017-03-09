name: ch2-sec5
# `imports-loader`

### Add a local variable to the top of the file

- Example: You've got a third-party jQuery plugin (`./file.js`) that assumes that `$` is defined.
- `imports-loader` can be used when a file has dependencies, but doesn't have module syntax.
- In, e.g., `app.js`, this:

    ```js
    require('imports-loader?$=jquery!./file.js');
    ```

    causes the rough equivalent of this:

    ```js
    var $ = require('jquery');
    ```

    to be injected at the top of `./file.js`

???

When we use imports-loader, we are defining variables for the file to have in scope!  Here is a quick example where some file assumes that `$` is jQuery, but doesn't require it...

---

# `imports-loader`

### Can also fix broken AMD/CommonJS

```js
require('imports-loader?define=>undefined!./broken-amd.js');
require('imports-loader?require=>undefined!./broken-common.js');
```

- Syntax:
    - `$=jquery`: Within target file, set `$` to the result of `require('jquery')`
    - `$=>window.jQuery`: Within target file, set `$` to `window.jQuery`

???

if we switch to use the arrow instead of just an equal here, we can set vars to any javascript value.  We can use this to help us solve the problems when AMD or CommonJS exports incorrectly... If the script breaks when `require` is present, you can undefine it in the require statement!

---

## `ProvidePlugin`: imports at a whole new level

- Make global things available everywhere with minimal fuss

```js
{
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
  ]
}
```

- e.g., roughly, for modules that assume the global presence of `$`, webpack will "provide" `var $ = require('jquery');`

???

There is also `ProvidePlugin` which is like the `imports-loader` but does so at a "global context" in the output bundle as opposed to having to prepend every module included, this prepends the output bundle itself with the defined variables.

If you want something to be global everywhere, `ProvidePlugin` is your goto.  This is really useful in test suites to give you your test helpers without boilerplate requires for every suite.

It can also be really useful when converting old sites to use modules.  At first none of your code will know to look for `jQuery` on the window, but provide plugin can let you install a global shim helping you track down places that assume global context.


---

## `ProvidePlugin` (cont.)

Using `ProvidePlugin` is similar to, but way better than:

```js
{
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'imports-loader?$=jquery&jQuery=jquery&window.jQuery=jquery',
      }
    ]
  }
}
```

???
Imports loader will inject these 3 vars in every js file we load, provide plugin injects it in the output bundle itself, a lot less code!
