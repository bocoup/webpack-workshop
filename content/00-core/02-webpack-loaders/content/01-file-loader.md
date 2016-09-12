# The file loader

Generates a runtime-relative URL for an asset (image, font, mp3, etc).

```js
// instead of:
var imageURL = 'img/bunny-725x544.jpg';

// using file-loader:
var imageURL = require('./img/bunny-725x544.jpg');
// This will bundle the file as an asset to the output folder
// and give us the relative URL.
```

???

The `file-loader` takes the content of a file and emits it as an asset (to the "dist" folder).  It then returns a script that at runtime returns a path to the emitted asset relative to the running script.

You can use `file-loader` to emit any files including images and fonts.

---

# Setting up `file-loader`
### Install with npm:
```shell
npm install file-loader --save-dev
```

???

We need to first install the `file-loader` package with npm.

--
### `module.loaders` in `webpack.config.js`

```js
module.exports = {
  // entry, context, output same as before
  module: {
    loaders: [
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
      },
    ],
  },
};
```

???
Next we need to setup a `module.loaders` array in the webpack config file.

We define a `test` that is a regular expression matching the filename, in this case
we want to match files ending with `.jpg` or `.png`, and then we tell webpack which
loader to use by default for these files.

---

# What is this really doing?

```js
var imageUrls = [
  require('./img/bunny-725x544.jpg'),
  require('./img/funky-monkey-725x544.jpg'),
  require('./img/guinea-pigs-725x544.jpg'),
];
console.log(imageURLs);
// ['cbbb18816b6ef832d2498a285503e663.jpg', '864ebd1e430c50612eac9ebd4db1faf8.jpg',
//  'f3db6422367750ca9c3711498d83e0f2.jpg']
```

----

```
Hash: 9acbf8845506cd7f4e3b
Version: webpack 1.13.2
Time: 1356ms
                               Asset     Size  Chunks             Chunk Names
cbbb18816b6ef832d2498a285503e663.jpg  33.3 kB          [emitted]
864ebd1e430c50612eac9ebd4db1faf8.jpg  88.7 kB          [emitted]
f3db6422367750ca9c3711498d83e0f2.jpg  89.2 kB          [emitted]
                             main.js   310 kB       0  [emitted]  main
```
