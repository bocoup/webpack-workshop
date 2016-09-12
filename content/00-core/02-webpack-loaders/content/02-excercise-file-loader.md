class: center, middle

# Exercise 03 - Require Files!

---

# Recap file-loader

???

TK Recap file-loader and module.loaders config

---

# Exercise 03 - Require Files!

- Install **`file-loader`**
- Configure loaders in webpack.config for `file-loader`
- Restart `npm start`
- Move img folder into src
- **`require()`** images from img folder
- Remove **`img`** part of `cp` command in build script
- Clean the dist and run a new build
- Notice the image files in dist

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
  require('./img/bunny-725x544.jpg'),
  require('./img/funny-monkey-725x544.jpg'),
  require('./img/guinea-pigs-725x544.jpg'),
];
```
