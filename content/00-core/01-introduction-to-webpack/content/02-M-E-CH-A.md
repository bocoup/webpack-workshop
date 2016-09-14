class: center, middle
# M.E.CH.A.
Illustration? Voltronish thing
???

In webpack, there are 4 core concepts at work that when combined form the ultimate robot module bundler

---

# The webpack M.E.CH.A.

- __M__odules
- __E__ntry
- __CH__unks
- __A__ssets

???
Mecha: Modules, entry, chunks, and assets.

Let's discuss each these terms in more detail

---

# Modules

- Executable JavaScript
- Find Dependencies
- Load those Dependencies as Modules

???

A **module** is a unit in webpack output. Sometimes they are just input files but loaders and plugins can produce modules without an existing file.

Webpack determines from the module any dependencies and loads them as modules.

--

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
In this example module, we are exporting our application via the CommonJS `module.exports`

---

# Entry

### The "first" module

### **CAN NOT** be a dependency

???

 The "Entry" is the first module to be loaded and executed in a script using webpack.  It then loads its depenencies, which loads its depencencies, etc.

 Entries are special in that no other module may depend on them.

 Every other module may refer to any module, even circularly.

--

```javascript
var Application = require('./application');

new Application({
  root: '#root',
});
```

???
In this example entry, we use `require` to get the application we created in the previous slide, and start it.

---

# Chunks

## Collections of Modules

???

Webpack collects modules into chunks. They are really just that -- chunks of modules. Most often they use a filename template but plugins can transform them to be output in other ways to help with optimizing an app for users.

---

# Assets

## Any string or buffer that will be output

Everything webpack outputs is an asset.

- Images and other files required are turned into assets
- Chunks of Modules are transformed into assets
- Through a plugin CSS handled by webpack can be turned into assets

???

A webpack asset is a file that has yet to be written to the output directory. Webpack builds up a list of assets through modules, chunks, and plugins. Modules create assets like images and data files. Webpack and plugins create assets from chunks and other groups of information.

---

# Reviewing the M.E.CH.A

- Modules are units
- Entry is the starting module
- Chunks are the collected modules
- Asset are any output files
