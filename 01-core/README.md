# programming-with-javascript
> Learn javascript basics by writing a hangman game.

# Abstract

Learn how to use webpack from just concatting an app to using common loaders like babel, style, css, and file and plugins like extract-text and uglify. Webpack helps produce smaller scripts, reduce the number of files a browser fetches by inlining files, and organize those files for distribution. This section will take an application with no build process and implement one with webpack.

- Just webpacking scripts
- What loaders do
- Style, css, file, and babel loaders
- What plugins do
- Extract text and uglify plugins
- Webpack watch, dev middleware and dev server

# The web before package loaders

Webpack is a member of a group of software for building websites called package loaders. They produce and load packages. Before package loaders became popular applications would be written mostly on the server. Users interacting with an application would lead to requests to the server for new pages. This went on for a time and it was good. Well not really but it worked for the time.

Unlike today JavaScript would be written in small script inside the html or the server response or as smaller files that help make the page more responsive in small ways not requiring server interaction. Time went on and client side scripts became larger and developers needed a way to organize them. Often this would be multiple script tags to load each script in order or small custom build processes to construct a smaller set of concatenated files from the larger application that would be loaded instead of an army of script tags.

The custom build processes being a lot of work to construct and maintain lead to developers writing tools that with some minimal configuration could do this work for them without writing something custom every time.

One of the most well known package loaders is Requirejs using the AMD format, Asynchronous Module Definition, to describe modules and their dependencies. Requirejs could use this format to load modules in the browser with some configuration. Its compaion r.js could "optimize" an application into a smaller set of files. Loading the many hundreds of files that make up web applications in the client now is convenient for a developer to debug locally but from a production server for a user can take a lot of time.

Like r.js, and another well known package loader, browserify, webpack does this optimization step to produce a package of fewer files so users can quickly access an application. Webpack also comes with size benefits for the output script by making use of the knowledge it builds up of the individual files in its output.

Requirejs and browserify need to include file paths so it can operate at runtime, webpack by default transforms these paths into numeric ids to refer to each package. Some developers like this to obfuscate their output further for proprietary projects. It won't go to the level of obfuscation that can be achieved by other tools but those tools often need a level of depth of knowledge of the layout of an app so any mangling they perform preserve the original behaviour that may be deemed too much work or prone to developer error.

--> More on webpack size benefits over others

Package loaders started as a way to package up scripts for an application. HTML, CSS, and other assets would be left to other processes to prepare for distributing an app. Webpack provides avenues to handle all of the static content that goes into an application. As you build on to your webpack configuration this provides lot of functionality to streamline delivery of your application.

# The present future

Webpack supports both AMD and CommonJS ways to describe modules and the files they depend on. It is even possible with plugins to use Angular v1's style to describe modules. Webpack with a common configuation setup easily handles es2015 modules. Webpack 2, in beta, uses a newer esprima parser to understand es2015 modules and provides tree shaking like Rollup.

The most basic webpack configuration needs to define the root context of a package, where the modules it'll contain are relative to, an entry point, relative to the context, an output path, to place all output assets, and a filename template for all output chunks.

That might look like:

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

Already we have some terms to discuss.

- entry
- module
- chunk
- asset

Lets start with where webpack starts, the **entry**. The entry is a module that is the first to be executed in a script. Right after webpack's output does a little startup it'll call the entry source code. This entry can then call on other dependencies. Entries are special in that no other module may depend on them. Every other module may refer to any module even circularly. (Webpack won't stop you from creating stack overflows so be careful.)

A **module** is a unit in webpack output. Its too simple to say they are input files for webpack. Webpack and plugins can produce modules without an existing file or a module may be produced to refer some other thing. Commonly though they will be files included in the webpack compilation process.

Webpack collects modules into **chunks**. They are really just that chunks of modules. Most often they be output with the filename template but plugins can transform them to be output in other ways to help with optimizing an app for users.

In webpack, an **asset** is any output file. Modules can have assets. Chunks can have assets. A run of the compiler can have assets. This last part is interesting to consider. Chunks are not just written out to the file system once they are ready, they are also transformed into assets that in webpack's file step are emitted like any other asset. To ground asset a little, you can include non source files like images in the webpack process, these are transformed into assets that in that final step like the assets produced from chunks are emitted to the file system.
