class: center, middle
name: ch1-sec1

# In a land before JavaScript Modules...

???

Before modules became popular, applications were written mostly on the server. Users interacting with an application would request new pages from the server. This went on for a time and it was good. Well not really, but it was the best we had.

JavaScript was written in script tags in the HTML, or as smaller individual files. Time went on and client side scripts became more complex, we had more of them, and we realized requesting 20 scripts on page load was a bad thing.

So we wrote custom build processes to construct a single file from the larger set of files that would be loaded instead of an army of script tags.

---

# Module bundlers: A Definition

**Module bundler**: Software that _bundles modules_ together into a smaller set of files.

???

The "custom" part of the processes was a lot of work to construct and maintain.
So developers started collaborating on tools that, with some minimal configuration, could bundle our smaller files into a single file to deliver to the user.

We called these Module Bundlers.

---

# Module bundlers: Well-known Examples

Some well-known module bundlers include:

- [RequireJS](http://requirejs.org/)
- [Browserify](http://browserify.org/)
???

In the "Module Bundler" category, we have RequireJS and Browserify, and...
--

- **Webpack!**

???

Webpack!

---

# RequireJS: The Basics

- One of the earliest well-known bundlers
???

One of the most well known module bundlers is RequireJS.
...

---

# RequireJS: The Basics

- One of the earliest well-known bundlers
- Supports _Asynchronous Module Definition_ (AMD)

???

Require uses a module syntax called AMD, one of the first standardized ways to define a module of functionality in JavaScript

To clarify what we mean by module, let's look at AMD briefly...

---

# AMD Module Syntax

- One of the first ways to write a JavaScript _module_

???

AMD defines modules in JavaScript so that a tool like RequireJS can determine
any dependencies and execute them before their dependent modules. ...

--

### AMD Syntax Example

Note the use of `define`.

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

The AMD format was one of the first standardized ways to define a module of functionality and specify what other modules that functionality depended upon

This format uses the function `define`, supplied by RequireJS, which is passed
an array of dependencies and callback function which receives the dependencies
and returns the module.

---

# RequireJS: The Basics

- One of the earliest well-known bundlers
- Supports _Asynchronous Module Definition_ (AMD)
- Asynchronously loads individual modules for development
???

Returning to RequireJS, RequireJS uses this format to load modules asynchronously in the browser as they are requested, an ensures the code executes as ordered.

--

- Companion tool **r.js** performs the bundling for production
???

Requesting all those files individually is inefficient in a production website, so RequireJS's companion tool r.js "optimizes" an application into a smaller set of files.

This makes it easy for a developer to debug the many hundreds of files that make up their web applications as multiple files locally, but from a production server it can be bundled into a single file.

---

# Browserify: The Basics

???

RequireJS used the AMD format for defining modules, but around this time
Node.js was gaining in popularity, and its module format (CommonJS) was not
supported by other bundlers. ...

--

- Supports the __CommonJS__ module format
???

Browserify uses CommonJS, which allows most node modules to be used inside the
browser. ...

--

- _Shims_ some of the "common" node modules
???

Browserify also provides some builtin node modules so they also work in the browser.

---

# CommonJS Module Syntax

CommonJS is the format that [Node modules](https://nodejs.org/docs/v0.4.1/api/modules.html#modules) are written in.

???
RequireJS uses the AMD format for defining modules and Browserify uses CommonJS.

--

### CommonJS Syntax Example

Note the use of `require` and `module.exports`:

```javascript
var dependency = require('./dependency');
module.exports = {
  render: function() {
    dependency.render();
  },
};
```

???

Here is an example CommonJS module that uses `require` to include dependencies, and `module.exports` to export the module.  Note that this format is **synchronous**, it implies that all dependencies can be synchronously loaded.

---

# Webpack: The Basics

???

In very large applications, bundling everything could easily create bundles that were tens or hundreds of megabytes of JavaScript.  Browserify and Require eventually had ways to separate chunks of the output into loadable "feature" bundles, but the configuration was hard to automate. ...

--

- Smart code splitting

???

Webpack can analyze the code and be **smarter** about outputting multiple bundles. Webpack also includes a syntax for splitting bundles very intelligently, allowing you to load critical bits of JavaScript only on the first pass, and ensure the additional scripts are loaded before you need to use them. ...

--

- Smaller output bundles

???

Since webpack is capable of analyzing and transforming JavaScript, it is also able to produce output bundles that are smaller and more portable, not relying on details like file paths to operate at runtime. ...

--

- Supports AMD...
- _and_ Supports CommonJS

???

It also supports both AMD and CommonJS modules, allowing us to consume a wide variety of javascript modules.  By renaming the `define` and `require` statements to its own syntax, we can be sure that its output bundles may be consumed by requirejs or browserify as well. ...

--

- Plugin-able
- Portable

???

Webpack can also be further extended to understand other module formats and features.

---

# Webpack is more than JavaScript Modules

### "modules" in webpack

- Source Code
- HTML
- Templates (e.g. Handlebars, Lodash)
- Styles (e.g. CSS, SASS, Stylus, Less)
- Images (e.g. PNG, JPG, GIF)
- Other assets (MP3, MPEG)
- Data (JSON)

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
