name: ch3-sec1
class: center, middle

# Super CSS

### Preprocessing

???

Many projects use CSS super sets to make writing the style for an application easier or to reduce repetition. We can include those technologies and techniques while using webpack.

---

# Installing ...

### sass-loader

```js
npm install sass-loader node-sass --save-dev
```

### less-loader

```js
npm install less-loader less --save-dev
```

### stylus-loader

```js
npm install stylus-loader stylus --save-dev
```

???

CSS super sets all having supporting loaders for webpack. They each fill the same role for their related library. They statically compile their CSS super set into CSS. As such css super set loaders keep to the loader ideal of single responsibility. To use the resulting CSS further you can pair it with style-loader and css-loader or an ExtractText plugin setup.

We need to install the webpack loader, as well as the library that provides the processor.  The webpack loader does not depend on stylus directly, it requires the consumer, you, to have a dependency,  we call this a peer dependency.

SASS, Less, and stylus APIs change less frequently, and with a peer dependency, the loaders can stay the same and the webpack user can pick and choose the version of the css compilier and loader instead of being restricted forced to use the version a loader may have required in its package.json.

---

# Config

```js
module.exports = {
  stylus: {
    use: [/* stylus plugins */],
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
    ],
  },
};
```

???

Let's focus on stylus.

CSS super set libraries and their loaders open a new need for configuration. Loaders let you perform lots of configuration through query parameters to each loader in the loader sequence. The query param approach is pretty expressive but it doesn't support functions or objects with methods. For that webpack has another idiom.

Loaders are allowed to have configuration set on the main webpack config object by a key to their name. So for stylus configuration you store it on an object called stylus in the webpack config. In reference to need to configure with functions for example, stylus plugins can be configured on the stylus use config. Those plugins will be functions to modify the stylus compiler. ...

--

Configured for extraction

```js
{
  test: /\.styl$/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader!stylus-loader'
  ),
},
```

???

Configuring for extraction with ExtractTextPlugin we can see an example of its API that hopefully clears up what may be a little confusing. Now that we have three loaders instead of making that three arguments to ExtractText its two arguments. The first as early mentioned is the fallback loader, a loader used in addition to the rest if ExtractText does not extract. The second argument lists the loaders that are always applied.

---

class: center, middle

# Post CSS

### Auto prefixing and more

???

Most css super sets have neighboring libraries that provide a lot of addtional functaionality. One common utility is auto prefixing. Adding prefixs like `webkit-` and `moz-` before newer css properties that are available only under the prefix version for certain browsers.

Many webpack users have moved away from libraries for a specific super set and now use postcss-loader to apply that common functionality.

---

# Install

```shell
npm install postcss-loader autoprefixer --save-dev
```

???

Installing postcss-loader we need to also install postcss plugins. postcss takes the approach of parsing once, letting plugins modify the parsed css and then outputing those modifications.

autoprefixer is one such plugin for postcss and automatically prefixes newer css properties. One of its benefits is configuring it so that it keeps the scope of prefixed properties to a smaller set such as excluding browsers X versions back so that the outgoing CSS is smaller. ...

--

# Config

```js
var autoprefixer = require('autoprefixer');

module.exports = {
  postcss: function() {
    return [autoprefixer];
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader',
      },
    ],
  },
};
```

???

The config to postcss works like stylus and other loaders, some options can be passed by query params but the main one is on the postcss config field where you state the postcss plugins that will modify your css.

---

# Recap

- Install super set library with its loader (e.g. `stylus` with `stylus-loader`)
- In the loader config `stylus-loader` feeds into `css-loader`
```js
loader: 'style-loader!css-loader!stylus-loader',
```
- Use `postcss-loader` for autoprefixing and other css modifications

???

Lets pause for a moment before we get to babel. Any questions?
