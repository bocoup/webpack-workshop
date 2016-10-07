name: ch1.2-sec1
# File Loader

- `file-loader` (npm: `file-loader`) generates a URL for an asset
- Returns URL, not file

???

The file loader (npm: `file-loader`) generates a runtime-relative URL for an asset (image, font, mp3, etc).

`file-loader` won't return a file—instead, it:

* Emits the file itself as an asset to the output directory and
* Returns a relative URL to the file's output location

---

# File Loader: In Practice

Instead of:

```js
var imageURL = 'img/bunny-725x544.jpg';
```
???

Instead of referring to a url in JavaScript ...

--

With file-loader, you `require` the asset:

```js
var imageURL = require('./img/bunny-725x544.jpg');
// This will bundle the file as an asset to the output folder
// and give us the relative URL, something like
// 'cbbb18816b6ef832d2498a285503e663.jpg'
```

???
We require with a relative path to the file.

A module created for that file is transformed by file loader. The transformed module returns a url so that imageURL can be used as it may have already been. For that url to point at the file, file loader will emit the file as an asset in the output directory.

--

It's as if you just required a module that does this:

```js
module.exports = 'cbbb18816b6ef832d2498a285503e663.jpg';
```

???

You can use `file-loader` to emit any files including images and fonts.

---

# Setting up `file-loader`

### Install with npm:
```shell
npm install file-loader --save-dev
```

???

Installing file loader follows our common pattern of installing the `file-loader` package with npm and saving it as a dev dependency...

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
loader to use automatically for the files that pass the test.

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

???

Let's take a look at how file-loader works again.

We can see here in the JavaScript we are requireing 3 images.  If we were to console.log the variable, we will get 3 urls back.

We also see that when we `npm run build` we are emitting 3 `.jpg` files that correspond to the three images we used in the JavaScript.

This also has lovely side-effect of generating errors while compiling if your images are missing, the same way as if your JavaScript file is missing (or mis-spelt)

------

It's a very interesting loader to start with, it will allow us to remove the `img` directory from the things we are copying manually in our build step!

Does anyone have any questions before we try it out with our meme generator?
