class: center, middle
name: ch1.2-ex1

# Exercise 03 - Require Files!

---

# Exercise 03 - Require Files!

### Recap

- Loaders should do one thing
- `file-loader` outputs the file to the output directory and returns a URL

???
For review, loaders should do one thing!  Our `file-loader` outputs a file, and gives us the url!

---
# Exercise 03 - Require Files!

### Goals

- **Install `file-loader`**
- **Configure `module.loaders`** in webpack.config:
    ```js
    { test: /\.(jpg|png)$/, loader: 'file-loader' }
    ```
- **Restart `npm run dev`**
- **Edit `main.js`**: `require('../img/filename.jpg')` images from `img` folder
- **Edit `package.json`**: Remove `img` part of `cp` command in `build` script
- **Clean and build**: Clean the dist (`rm -rf dist`) and run a new build
- **Notice the image files** in `dist`
- **Check application** with `serve` from `dist`

???

We need to install `file-loader`, and define `module.loaders` in our webpack config, it is an array which will contain one loader for now.

Whenever we change webpack.config we need to restart our dev server.

We now want to require our images from `main.js` instead of using the `img/` urls.

After making these changes, clean the the dist folder up, and create a new build.  Check the output directory for your images, and try the appplication in `serve`

---

# Exercise 03 - Answer Overview

**`webpack.config.js`**

```js
module: {
  loaders: [
    {
      test: /\.(jpg|png)$/,
      loader: 'file-loader',
    },
  ],
},
```

**`main.js`**

```js
var imageUrls = [
  require('../img/bunny-725x544.jpg'),
  require('../img/funny-monkey-725x544.jpg'),
  require('../img/guinea-pigs-725x544.jpg'),
];
```

**`package.json`**
```
  "build": "webpack && cp -R index.html style dist"
```

???

To review the changes we made, we added `module.loaders` to our webpack config, changed the `imageUrls` to use `require`, and removed `img` from our `build` command.

-------

Any questions?

Onto style and css loaders!
