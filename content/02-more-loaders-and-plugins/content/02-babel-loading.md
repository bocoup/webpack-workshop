name: ch3-sec2
class: center, middle

# ES2015+ via Babel Loader

???

How CSS super sets provide utility that lets developers write less to perform the same result, we can get that in JavaScript through the Babel transpiler. Babel works with a large family of plugins and plugin presets to provide features like transpiling ECMAScript 6 features into ECMAScript 5 so it can run virtually anywhere JavaScript now runs.

---

# Harmony Modules

```js
export default class Application {
  constructor(options) {
    this.options = options;
  }
  template() {
    return '<h1>Hello World</h1>';
  }
  render() {
    document.querySelector(this.options.root).innerHtml = this.template();
  }
}
```

```js
import Application from './application';

new Application({
  root: '#root',
});
```

???

Alongside AMD and CommonJS modules there is also a module format defined by JavaScript. This module format is called many names, Harmony modules, ES6 modules, ES2015 modules, etc.

We don't need to dig too deep on the syntax. To cover it a little you can use `export default` like module.exports. And you can require and assign to a variable with `import`.

---

# Installing babel

```shell
npm install babel-loader babel-core babel-preset-es2015 --save-dev
```

???

Babel loader like CSS super set loaders needs a companion library, babel-core, and plugins or presets of plugins like babel-preset-es2015. Using babel-preset-es2015 you get harmony modules and every other feature in the 2015 ECMAScript standard. ...

--

# Config

```js
module.exports = {
  babel: {
    env: {
      presets: ['es2015'],
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
```

???

Like CSS super set loaders we can configure babel in webpack with the babel config field. `babel-loader` also works with babelrc files and the `BABEL_ENV` and `NODE_ENV` environment keys. Configuring the webpack config provides a way to be more specific given the config's needs.

(Pause before baking html.)
