class: center, middle, dark

# Part 2. Loaders

Illustration??

???
In the second part we are going to talk about loaders.

(This section will take about 30 minutes)

---

# The loaders transform your world

As a general module bundler, you can use different **loaders** with webpack.

Loaders can modify individual modules in many ways:
- Parse files
- Return objects
- Return urls
- Emit assets

???

Loaders are webpack extensions which allow you to modify how modules are loaded.

Loaders are capable of doing many things, however...

--

### Single Responsibility Loaders

Loaders should do one thing, and do it well.

As an example, you could use one loader to take the doc blocks from a file, and another to apply syntax highlighting.

```js
const highlightedHtml = require('syntax-loader!docblock-loader!./source.js');
```

???
Loaders should do one thing and do it well.  You may of heard this principle used in other software development, and the ideal for loaders is the same.

Just like you can combine multiple functions to build more complex behaviour in an application, you can easily combine multiple loaders in a chain.

Each loader will manipulate the module in some way, parse CSV, inline a data-uri, etc are just some of the possibilities.


---

# Common loaders

### `file-loader`
### `style-loader`
### `css-loader`

???

In this section we are going to focus on 3 very common loaders and how to configure them. Our goal is to take some of the assets we have in our meme generator and bundle them in with our `dist/` folder.

-----

Any questions before we dive into `file-loader`?

