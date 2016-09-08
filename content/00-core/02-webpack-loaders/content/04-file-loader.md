# The file loader

The `file-loader` takes the content of a file and emits it as a webpack asset. It returns a script that at runtime returns a path to the emitted asset relative to the running script.

You can use `file-loader` to emit any files including images and fonts.

Once again, you can install it as a npm package in your project.

```shell
npm install file-loader --save-dev
```

---

# Referencing files, part 1

On the previous app structure we used, we might want to add a custom webfont. It would look like this:

- `src/`
  - `main.js`
- `styles/`
  - `index.css`
- `fonts/`
  - `Droid-Serif.woff`
- `webpack.config.js`

---

# Referencing files, part 2

Now we need to add the loader to `webpack.config.js`.

```js
module.exports = {
  // entry, context, output same as before
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.woff$/,
        loader: 'file',
      },
    ],
  },
};
```

---

# Referencing files, part 3

This will directly affect your parsed code when you load that font.

```css
@font-face {
  font-family: 'Droid Serif';
  font-style: normal;
  font-weight: 400;
  src: local('Droid Serif'), local('DroidSerif'), url('../fonts/Droid-Serif.woff') format('woff');
}
```

Do you see that part with a relative reference to `'../fonts/Droid-Serif.woff'`? That will be loaded by webpack as a reference. Webpack will pack your font to the `dist/` folder and load it when necessary.
