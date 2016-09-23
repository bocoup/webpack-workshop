# `imports-loader`

### Add a local variable to the top of the file

### Use when file has dependencies, but doesn't have a module syntax.

```js
require('imports-loader?$=jquery!./file.js');
// becomes roughly:

var $ = require('jquery');
// contents of ./file.js
```

???

When we use imports-loader, we are defining variables for the file to have in scope!  Here is a quick example where some file assumes that `$` is jQuery, but doesn't require it...

---

# `imports-loader`

### Can also fix broken AMD/CommonJS

```js
require('imports-loader?define=>undefined!./broken-amd.js');
require('imports-loader?require=>undefined!./broken-common.js');
```

???

if we switch to use the arrow instead of just an equal here, we can set vars to any javascript value.  We can use this to help us solve the problems when AMD or CommonJS exports incorrectly... If the script breaks when `require` is present, you can undefine it in the require statement!

---

# `ProvidePlugin` - imports at a whole new level

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

Similar to, but way better than:

```js
{
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'provide-plugin?$=jquery&jQuery=jquery&window.jQuery=jquery',
      }
    ]
  }
}
```

???

There is also `ProvidePlugin` which is like the `imports-loader` but does so at a "global context" in the output bundle as opposed to having to prepend every module included, this prepends the output bundle itself with the defined variables.

If you want something to be global everywhere, `ProvidePlugin` is your goto.  This is really useful in test suites to give you your test helpers without boilerplate requires for every suite.

It can also be really useful when converting old sites to use modules.  At first none of your code will know to look for `jQuery` on the window, but provide plugin can let you install a global shim helping you track down places that assume global context.
