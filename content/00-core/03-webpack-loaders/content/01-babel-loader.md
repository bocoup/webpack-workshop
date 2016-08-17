# What is `babel-loader`?

As other loaders, the `babel-loader` take an input source and pass it through through an external library (Babel) and then returns the output for another loader or just webpack.

Commonly used with `babel-preset-es2015`, Babel is mostly used to transpile __ES2015+__ syntax, including the ES Modules to transform the input source to a compatible __ES5__ + CommonJS modules syntax output.

Webpack can then pack this loaded output parsing for dependencies.

---

# Using Babel with Webpack, part 1

Webpack use loaders as common npm plugins. [`babel-loader`](https://github.com/babel/babel-loader) is not an exception.

It needs to be installed with `babel-core` and we can go ahead and include the ES2015 preset with it:

```shell
npm install babel-loader babel-core babel-preset-es2015 --save-dev
```

---

# Using Babel with Webpack, part 2

Now that we have the Babel loader installed, we can just declare it in the projects `webpack.config.js` file:

```js
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel', // This matches the `babel-loader`
      },
    ],
  },
};
```

---

# Using Babel with Webpack, part 3

We also need to include the ES2015 preset:

```js
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};
```

And that's it. The next time we run Webpack, it will load the input source transpiling it with Babel using the ES2015 code!

---

# Using Babel to transpile React

Babel can also be used to transpile __React's JSX syntax__! You only need to include an extra preset module called `babel-preset-react`.

```shell
npm install babel-preset-react --save-dev
```

```js
module.exports = {
  /* ... */,
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // Catching .js and .jsx files
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
```

---
