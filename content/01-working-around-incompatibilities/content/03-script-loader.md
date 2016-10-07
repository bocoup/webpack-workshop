name: ch2-sec3
# Shimming Techniques: `script-loader`

- In, e.g., `app.js`:

```js
require('script-loader!../vendor/jquery-1.9.min.js');
```

- This is equivalent to the following in HTML:

```html
<script src="vendor/jquery-1.9.min.js"></script>
```

- `script-loader` approximates loading the script in a global `<script>` tag in HTML.

???

Script loader is a technique that we can use to run a script in the "main global context".  It is almost as if we use a `<script>` tag in the HTML...
--

- `require`, `define`, etc. are `undefined`

???

This means that we are running outside of webpacks `require` and `define` land...  They are evaluated in the global context...

--

- uses `eval()`
- the script loaded can not be minified!

> (think about using `.min.js` extension in production)

???

Using `eval`... This might seem ugly, but it is the closest we get to a real `<script>` tag, and becomes very useful for evaluating a "global module" like jQuery 1.9 which is not in any module syntax.

This also means that the script is stored as a STRING in your javascript, and webpack will be unable to parse or modify your code.  Be sure to combine this with the `extensions` or `alias` resolver options we just learned about to use the `.min.js` version of your bundle.

---

# `script-loader`

- Assuming `jquery` has been installed via `npm` (`npm install jquery@1.9`)
- In `app.js`:

```js
require('script-loader!jquery');
console.log(jQuery); // Works because jQuery exported to global context!
```

Or, configure your webpack config to use `script-loader` for jQuery:
```js
module.exports = {
  module: {
    loaders: [
      {
        // we usually only use "test" for extensions
        test: /\.js$/,
        // only include files in this directory
        include: [path.resolve('./node_modules/jquery')],
        loader: 'script-loader',
      }
    ]
  }
}
```

???

In order to use script loader, you can either define the loader with a specific test (like node_modules/jquery), or you can also use the `!` syntax to tell webpack which loader to use.

In this example here, we are loading jQuery through the script loader, which then exports `jQuery` to the global window, and we can access jQuery immediately after.
