# Package Loaders

Webpack is a module bundler, also a package loader.

It produces and load packages.

???

The custom build processes being a lot of work to construct and maintain lead to
developers writing tools that with some minimal configuration could do this work
for them without writing something custom every time.

---

# Package loaders

Some well-known package loaders:

- RequireJS
- Browserify

---

# RequireJS

...

???

One of the most well known package loaders is Requirejs using the AMD format,
Asynchronous Module Definition, to describe modules and their dependencies.
Requirejs could use this format to load modules in the browser with some
configuration. Its companion r.js could "optimize" an application into a smaller
set of files. Loading the many hundreds of files that make up web applications
in the client now is convenient for a developer to debug locally but from a
production server for a user can take a lot of time.

---

# Browserify

...

???

Like r.js, and another well known package loader, browserify, webpack does this
optimization step to produce a package of fewer files so users can quickly
access an application. Webpack also comes with size benefits for the output
script by making use of the knowledge it builds up of the individual files in
its output.

---

# Why webpack?

...

???

Requirejs and browserify need to include file paths so it can operate at
runtime, webpack by default transforms these paths into numeric ids to refer to
each package. Some developers like this to obfuscate their output further for
proprietary projects. It won't go to the level of obfuscation that can be
achieved by other tools but those tools often need a level of depth of knowledge
of the layout of an app so any mangling they perform preserve the original
behaviour that may be deemed too much work or prone to developer error.

---

# Handling all static contents

- Scripts
- HTML
- CSS
- other assets

???

Package loaders started as a way to package up scripts for an application. HTML,
CSS, and other assets would be left to other processes to prepare for
distributing an app. Webpack provides avenues to handle all of the static
content that goes into an application. As you build on to your webpack
configuration this provides lot of functionality to streamline delivery of your
application.

---

# You can do more with webpack

- Use loaders
  - styles / css, static files, babel...
- Use plugins
  - extract text
  - uglify / minify
- Webpack watch, dev middleware and dev server

???

Webpack is way beyong just webpacking scripts, you can connect it to different
loaders, attach plugins including some to uglify your code, open a watch monitor
for auto updates, connect to dev middleware and set a dev server.


---