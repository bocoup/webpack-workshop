# The present future

## Modules

- AMD
- CommonJS
- ES Modules<sub>\*</sub>

<sub>\*</sub> Webpack 1.x with a common configuration setup easily handles es2015 modules.

Webpack 2, in beta, uses a newer esprima parser to understand es2015 modules and provides tree shaking like Rollup.

???

Webpack supports both AMD and CommonJS ways to describe modules and the files
they depend on. It is even possible with plugins to use Angular v1's style to
describe modules.

---

# The most basic webpack configuration

## `webpack.config.js`

```js
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'main.js',
  },
};
```

1. root __context__, where _modules_ are relative to
2. __entry__ point relative to the _context_
3. __output__ __path__, to place all output _assets_
  1. __filename__ template for all output _chunks_

???

The most basic webpack configuration needs to define the root context of a package, where the modules it'll contain are relative to, an entry point, relative to the context, an output path, to place all output assets, and a filename template for all output chunks.

---

# The webpack M.E.CH.A.

- Modules
- Entry
- CHunks
- Assets

???

Let's discuss these terms

---

# Modules

## The Webpack units

A module is a unit in webpack output. Sometimes they are just input files, but webpack and its plugins can produce modules without an existing file or a module may be produced to create references.

???

A module is a unit in webpack output. Its too simple to say they are input files for webpack. Webpack and plugins can produce modules without an existing file or a module may be produced to refer some other thing. Commonly though they will be files included in the webpack compilation process.

---

# Entry

## Where webpack starts

Entry is the first module to be executed in a script using webpack. This entry can then call on other dependencies (modules).

Entries are special modules where no other module may depend on them. Every other module may refer to any other module, even circularly.

???

_Lets start_ with where webpack starts, the entry. The entry is a module that is the first to be executed in a script. Right after webpack's output does a little startup it'll call the entry source code. This entry can then call on other dependencies. Entries are special in that no other module may depend on them. Every other module may refer to any module even circularly. (Webpack won't stop you from creating stack overflows so be careful.)

---

# Chunks

## Where modules are collected to.

They are just chunks of modules. Most often they will represent the output with the filename template.

Chunks are also used by plugins on transform operations in many ways to help with optiming an app.

???

Webpack collects modules into chunks. They are really just that chunks of modules. Most often they be output with the filename template but plugins can transform them to be output in other ways to help with optimizing an app for users.

---

# Assets

## Any output file

Modules and Chunks can have assets. A run of the compiler can have assets.

A Chunk maybe be also transformed into assets.

You can also include non-source files, like images, as assets to your webpack process. They will be transformed to assets.

???

In webpack, an asset is any output file. Modules can have assets. Chunks can have assets. A run of the compiler can have assets. This last part is interesting to consider. Chunks are not just written out to the file system once they are ready, they are also transformed into assets that in webpack's file step are emitted like any other asset. To ground asset a little, you can include non source files like images in the webpack process, these are transformed into assets that in that final step like the assets produced from chunks are emitted to the file system.

---

# Reviewing the M.E.CH.A

- Modules are units
- Entry is the starting module
- Chunks are the collected modules
- Asset is any output file

---
