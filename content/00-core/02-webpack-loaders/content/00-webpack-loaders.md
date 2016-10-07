class: center, middle, dark
name: ch1.2

# Part 2. Loaders

Illustration??

???
In the second part we are going to talk about loaders.

(This section will take about 30 minutes)

---

# The loaders transform your world

- Webpack only understands JavaScript.

???
Webpack is flexible, but it only understands and parses _JavaScript_. ...

--

- Webpack **loaders** transform various other (input) content into (output) JavaScript

???
Webpack **loaders** transform various kinds of input content into output JavaScript that webpack _can_ understand—files, images, CSS...you name it.

**Loaders** allow you to modify _how_ modules are loaded—that is, they can _preprocess_ the files you require or "load".

---

# What Loaders can Do: An Example


```js
const highlightedHtml = require('syntax-loader!docblock-loader!./source.js');
```

- Applies the `docblock-loader` and `syntax-loader` when loading `./source.js`

???
One way to apply a loader or multiple loaders to a file is to explicitly define which loaders should be used within a `require` statement.

Let's break that down...

---

# Loaders: Breaking it Down

```js
const highlightedHtml = require('syntax-loader!docblock-loader!./source.js');
```

- loaders are `!`-separated, listed before required resource

???

Each loader is separated with a `!` and listed before the resource being required. ...

--

- loaders are applied right to left

???

Loaders are applied _right to left_: the `docblock-loader` is applied first and _then_ `syntax-loader`.

---

# Loaders: Breaking it Down

```js
const highlightedHtml = require('syntax-loader!docblock-loader!./source.js');
```

In this hypothetical example:

- `docblock-loader` gets applied to `source.js`

???

`docblock-loader` would first parse `source.js`, returning a string that only contained the doc blocks in the file ...
--

- `syntax-loader` then applies syntax highlighting to the doc blocks...

???
`syntax-loader` would then apply syntax highlighting to the doc blocks ...
--

- `highlightedHtml` value: string of syntax-highlighted doc-blocks from `./source.js`

???

This ultimately results in `highlightedHhtml` being assigned a JavaScript string of syntax-highlighted doc blocks from `./source.js`
---

# Loaders are Flexible

Loaders can modify individual modules in many ways, e.g. they can:

- Parse files
- Return objects
- Return urls
- Emit assets

???

Loaders are webpack extensions which allow you to modify how modules are loaded.

Loaders manipulate modules in some way, parse CSV, inline a data-uri, etc. Its fairly open ended so these are just some of the possibilities.

---

# Single Responsibility Loaders

Each loader module should do one thing, and do it well.

In the previous example:

```js
const highlightedHtml = require('syntax-loader!docblock-loader!./source.js');
```

Functionality is composed from `docblock-loader` _and_ `syntax-loader`—not a single loader that attempts to do multiple things at once.

???

Loaders are capable of doing many things, however loaders should do one thing and do it well.  You may of heard this principle used in other software development, and the ideal for loaders is the same.

Just like you can combine multiple functions to build more complex behaviour in an application, you can easily combine multiple loaders in a chain.

---

# Common Loaders

### `file-loader`
### `style-loader`
### `css-loader`

???

In the next section we are going to focus on 3 very common loaders and how to configure them.

Our goal is to take some of the non-JavaScript assets we have in our meme generator and bundle them in with our `dist/` folder.

-----

Any questions before we dive into `file-loader`?
