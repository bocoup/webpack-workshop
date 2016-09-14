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

## Any output file

Everything webpack outputs is an asset.

- Chunks are output as assets
- Non-inline source maps are output as assets
- Images and other files required through file-loader are output as assets
- ExtractText outputs css files as assets

In this way assets are any binary or utf8 content that will be output at some file name.

???

In webpack, an asset is any output file. Modules can have assets. Chunks can have assets. A run of the compiler can have assets.

This last part is interesting to consider. Chunks are not just written out to the file system once they are ready, they are also transformed into assets that in webpack's file step are emitted like any other asset.

To ground asset a little, you can include non source files like images in the webpack process, these are transformed into assets that in that final step like the assets produced from chunks are emitted to the file system.

---

# Reviewing the M.E.CH.A

- Modules are units
- Entry is the starting module
- Chunks are the collected modules
- Asset are any output files
