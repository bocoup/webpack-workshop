class: center, middle, dark

# Part 2. Loaders

Illustration??

???
In the second part we are going to talk about loaders.

(This section will take about 30 minutes)

---

# The loaders transform your world

As a general module bundler, you can use different **loaders** with webpack.

Loaders modify individual modules, providing the magic for developing with webpack, beyond the built-in configuration options.

???

A lot of the magic for developing with webpack comes from loaders. Outside of webpack's built-in configuration options, loaders have a large impact on what can be done with webpack. Loaders have a very small focus, modifying individual modules.

---

# Single Responsibility Loaders

Loaders should do one thing, and do it well.

As an example, you could use one loader to take the doc blocks from a file, and another to apply syntax highlighting.

```js
const highlightedHtml = require('syntax-loader!docblock-loader!./source.js');
```

???
You may have heard this about, well, everything in programming. Single responsibility principles.

The ideal for loaders works the same. Just like you could pair two functions to build more complex behaviour in an application, you can easily combine multiple loaders in a chain.

Each loader to manipulate the asset in some way, parse CSV, inline data-uri, etc are just some of the possibilities.


---

# Common loaders

### `file-loader`
### `style-loader`
### `css-loader`

???

In this section we are going to focus on 3 very common loaders and how to configure them. Our goal is to take some of the assets we have in our meme generator and bundle them in with our `dist/` folder.

