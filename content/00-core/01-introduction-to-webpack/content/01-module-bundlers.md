class: center, middle

# In a land before JavaScript Modules...

Illustration??

???

Before modules became popular, applications were written mostly on the server. Users interacting with an application would request new pages from the server. This went on for a time and it was good. Well not really, but it was the best we had.

JavaScript was written in script tags in the HTML, or as smaller individual files. Time went on and client side scripts became more complex, we had more of them, and we realized requesting 20 scripts on page load was a bad thing.

So we wrote custom build processes to construct a single file from the larger set of files that would be loaded instead of an army of script tags.

---

# Module bundlers

Bundles modules together into a smaller set of files.

???


The "custom" part of the processes was a lot of work to construct and maintain.
So developers started collaborating on tools that, with some minimal configuration, could bundle our smaller files into a single file to deliver to the user.

We called these Module Bundlers.

---

# Module bundlers

Some well-known module bundlers:

- RequireJS
- Browserify

???

In the "Module Bundler" category, we have RequireJS and Browserify, and...

--

- **Webpack**

???

Webpack...


---

# RequireJS

- One of the earliest well known bundlers
- Asynchronously loads individual modules
- Supports Asynchronous Module Definition (AMD)
- Companion tool **r.js** performs the bundling

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

One of the most well known module bundlers is Requirejs. It uses the AMD format,
__Asynchronous__ Module Definition, to describe modules and their dependencies.
Requirejs uses this format to load modules in the browser with some
configuration. Its companion r.js "optimizes" an application into a smaller
set of files.

The many hundreds of files that make up web applications in the client now
is convenient for a developer to debug locally as multiple files,
but from a production server it can be bundled into a single file.

The AMD format uses `define`, which is passed an array of dependencies and callback function which receives the dependencies and returns the module

---

# Browserify

- Supports CommonJS, the format [Node modules](https://nodejs.org/docs/v0.4.1/api/modules.html#modules) are written in
- Shims some of the "common" node modules

```javascript
var dependency = require('./dependency');
module.exports = {
  render: function() {
    dependency.render();
  },
};
```

???

Requirejs used the AMD format for defining modules, but around this time node was gaining in popularity, and it's module format (CommonJS) was not supported.

Browserify uses CommonJS, which allows most node modules to be used inside the browser.

Here is an example CommonJS module that uses `require` to include dependencies, and `module.exports` to export the module.  Note that this format is **synchronus**, it implies that all depenencies can be synchronusly loaded.

---

# Webpack

- Smart code splitting
- Smaller output bundles
- Supports AMD
- Supports CommonJS
- Pluginable
- Portable

???

In very large applications, bundling everything could easily create bundles that were tens or hundreds of megabytes of JavaScript.  Browserify and Require eventually had ways to seperate chunks of the output into loadable "feature" bundles, but the configuration was hard to automate.

Webpack can analyze the code and be **smarter** about outputing multiple bundles. Webpack also includes a syntax for splitting bundles very intelligently, allowing you to load critical bits of JavaScript only on the first pass, and ensure the additional scripts are loaded before you need to use them.

Since webpack is capable of analyzing and transforming JavaScript, it is also able to produce output bundles that are smaller and more portable, not relying on details like file paths to operate at runtime.

It also supports both AMD and CommonJS modules, allowing us to consume a wide variety of javascript modules.  By renaming the `define` and `require` statments to its own syntax, its output bundles may be consumed by requirejs or browserify as well.

---

# Webpack is more than JavaScript Modules

### "modules" in webpack

- Source Code
- HTML
- Templates (Handlebars, Lodash, etc)
- Style (CSS, SASS, Stylus, Less)
- Images (png, jpg, gif)
- Other assets (mp3, mpeg)
- Data (json)

???

Webpack also allows you to bundle static content like HTML, CSS, and images.  This allows you to bundle the non-javascript dependencies with our javascript.

Webpack goes way beyond just packing scripts, in webpack you can use loaders and plugins to enhance your development workflows.

(((pause on this for a few seconds)))
---

# Module Bundlers (recap)

- RequireJS
- Browserify
- **Webpack**

-------

### Bundlers provide:
- Developer Experience
- User Experience
- Module Formats
- Efficient Bundles

???

So we have covered the three common module bundlers.

We've also talked about why...

- Module bundlers improve developer and user experience
- and should support the module formats we need
- and should help us build the most efficient bundles for our users
