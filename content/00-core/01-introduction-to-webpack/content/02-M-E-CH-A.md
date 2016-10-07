class: center, middle
name: ch1-sec2

# M.E.CH.A.
Illustration? Voltronish thing
???

In webpack, there are 4 core concepts at work that when combined form the ultimate robot module bundler

---

# The webpack _M.E.CH.A._ Metaphor

- __M__odules
- __E__ntry
- __CH__unks
- __A__ssets

???
Mecha: Modules, entry, chunks, and assets.

Let's discuss each of these terms in more detail...

---

# MEChA: Modules

A _module_:

- Single smallest unit in webpack output
- Is executable JavaScript
- Declares dependencies it needs
- Dependencies leads to more modules

???

A __module__ is a unit in webpack output. Sometimes they are just input files
but loaders and plugins can produce modules without an existing file.

Webpack determines from the module any dependencies and includes them as
modules. ...

--

### Module Example

```javascript
module.exports = function Application(options) {
  this.options = options;
  this.render();
};

Application.prototype.render = function() {
  document.querySelector(this.options.root).innerHtml = '<h1>Hello World</h1>';
};
```

???

In this example module, we are exporting our application via the CommonJS
`module.exports`.

---

# MEChA: Entry

Every webpack configuration must contain an __entry__ module, which is where webpack "starts" its work.

???

The "Entry" is the first module to be loaded and executed in a script using
webpack. It then loads its dependencies, which loads its dependencies, etc. ...

--

### Entry **cannot** be a depended on

No other module may `require()` the entry module.

???

Entries are special in that no other module may depend on them.

Every other module may refer to any module, even circularly, though we wouldn't
suggest it. ...

--

### Entry Example

```javascript
var Application = require('./application');

new Application({
  root: '#root',
});
```

???
In this example entry, we use `require` to get the application we created in the previous slide, and start it.

---

# MEChA: Chunks

Webpack organizes modules into __chunks__, which are collections of modules.

???

Webpack collects modules into chunks. They are really just that -- a collection of modules. Most often they use a filename template but plugins can transform them to be output in other ways to help with optimizing an application for users.

---

# MEChA: Assets

An __asset__ is any file (e.g. String or Buffer) that webpack outputs, but has not yet been written to an output directory.

### Examples of Things Webpack Transforms to Assets

- Required files
- Required images
- Chunks of modules
- CSS (by using a plugin)

???

A webpack asset is a file that has yet to be written to the output directory. Webpack builds up a list of assets through modules, chunks, and plugins. Modules can create assets like images and data files, and Webpack and plugins create assets from chunks and other groups of information.

---

# Reviewing the M.E.CH.A

- __M__odules are input
- __E__ntry is the starting module
- __Ch__unks are the collected modules
- __A__ssets are output, built from chunks, etc.

???

So just to briefly cover each of these again, Modules are input, Entry is the starting module, Chunks are collections of modules, and Assets are output.

There is a lot of nuance to each of these terms, but we hope that having a general level of knowledge will help you understand how webpack works as we continue through this course.

-------

Are there any questions before we continue on to installing webpack?
