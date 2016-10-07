name: ch2-sec4
## Shimming Techniques: `exports-loader`

### Need a `module.exports`?

```js
var jQuery = require('exports-loader?window.jQuery!script-loader!jQuery');
```

- Result: Global jQuery from `script-loader` is assigned to `jQuery`

???

In our previous example, we didn't use the result of calling `require` script loader jquery, because it didn't return anything.  It ran as a global script!

In this example, we are using the `exports-loader` to capture the value of `jQuery` from the window.

---

# `exports-loader`

In our meme generator we *could* have done this:

```js
var drawMeme = require('exports-loader?drawMeme!./canvas');
```

(Instead of adding `module.exports`)

???

So this basically adds a `module.exports` to the bottom of the script, in our meme generator example, we could have told the require statement which function we wanted to load from our canvas script, however, adding the `module.exports` to the file is **way easier**.  This techinque can be used to "fix" external modules.
