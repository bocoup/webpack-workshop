class: center, middle
# Module Bundlers

???

Section 1

---

# In a land before JavaScript Modules...

Illustration??

???

Before modules became popular, applications were written mostly on the server. Users interacting with an application would lead to requests to the server for new pages. This went on for a time and it was good. Well not really but it was the best we had.

JavaScript was written in script tags in the HTML - or - as smaller indivudual files. Time went on and client side scripts became more complex, we had more of them, and we realized requesting 20 scripts on page load was a bad thing.

So we wrote custom build processes to construct a single file from the larger set of files that would be loaded instead of an army of script tags.

---

# Module bundlers

**Webpack** is a module bundler.

It bundles modules together into a smaller set of files.

???


The "custom" part of the processes was a lot of work to construct and maintain.
So developers started writing tools that, with some minimal configuration, could bundle our smaller
files into a single file to deliver to the

We called these Module Bundlers.

---

# Known bundlers

Some well-known module bundlers:

- RequireJS
- Browserify
--

- **Webpack**

---

# RequireJS

- One of the earliest well known bundlers
- Asynchronously loads individual modules
- Supports AMD, Asynchronous Module Definition
- Companion **r.js** performs the bundling

```javascript
// This is an AMD format module
define(['./dependency.js'], function(dependency) {
  return {
    render: function() {
      dependency.render();
    },
  };
});
```

???

One of the most well known module bundlers is Requirejs using the AMD format,
__Asynchronous__ Module Definition, to describe modules and their dependencies.
Requirejs could use this format to load modules in the browser with some
configuration. Its companion r.js "optimizes" an application into a smaller
set of files. Loading the many hundreds of files that make up web applications
in the client now is convenient for a developer to debug locally as multiple files,
 but from a production server it can be bundled into a single file.

---

# Browserify

- Supports CommonJS, the format Node modules are written in
- Shims some of the "common" node modules.

```javascript
var dependency = require('./dependency');
module.exports = {
  render: function() {
    dependency.render();
  },
};
```

???

Browserify uses CommonJS, which lets us port a lot of node modules into the browser now.

Here is an example CommonJS module that uses `require` and `module.exports` to import and export.

Like r.js, and browserify, webpack also bundles modules into fewer files so users can quickly access an application.

---

# Why webpack?

- Supports AMD
- Supports CommonJS
- Smaller output bundles
- Smart code splitting

???

So why pick webpack? It supports both AMD and CommonJS syntax for modules (unlike r.js and browserify)

Webpack can generate smaller output by using the knowledge it builds up of the
individual files in its output.

Requirejs and browserify need to include file paths so it can operate at
runtime, webpack by default transforms these paths into numeric ids to refer to
each package. Some developers like this to obfuscate their output further for
proprietary projects.

Webpack also includes a syntax for splitting bundles very intellegently, allowing you to load critial bits of JS only on the first pass, and ensure the additional scripts are loaded before you need to use them.

---

# Webpack is more than JavaScript Modules

- Load styles and files and other code languages
- Use plugins to optimize run time like extracting css into its own file and minifying source with uglify
- Fast rebuilds with webpack watch mode, dev middleware and dev server

???

Module Bundlers started as a way to package up scripts for an application. HTML,
CSS, and other assets would be left to other processes to prepare for
distributing an app. Webpack provides avenues to handle all of the static
content that goes into an application. As you build on to your webpack
configuration this provides lot of functionality to streamline delivery of your
application.

Webpack goes way beyond just packing scripts, you can connect it to different
loaders for different content, use plugins like uglify, watch your filesystem
and provide auto updates, connect to dev mode middleware and create a dev server.

---

# Short list of things we've webpacked:

- Source Code
- HTML
- Style (CSS, Less, Stylus)
- Images (png, jpg, gif)
- Other assets (mp3, mpeg)
- Data (json)

???


