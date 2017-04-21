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

The "custom" parts of those processes were a lot of work to construct and maintain.
So developers started collaborating on tools that, with some minimal configuration, could bundle our smaller files into a single file to deliver to the user.

We called these Module Bundlers.

---

# Module bundlers: Well-known Examples

Some well-known module bundlers include:

- [RequireJS](http://requirejs.org/)
- [Browserify](http://browserify.org/)
???

In the "Module Bundler" category, we have RequireJS and Browserify, and also...
--

- **Webpack!**

???

Webpack!

Although later on we'll see how Webpack does a lot more than module bundling, and really represents different, new kind of tool.

---

# RequireJS: The Basics

- One of the earliest well-known bundlers

???

One of the most well known module bundlers is RequireJS. ...

--
- Supports _Asynchronous Module Definition_ (AMD)

???

It uses the AMD format—**Asynchronous** Module Definition—to describe modules and their dependencies. ...

--
- Asynchronously loads individual modules for development
???

RequireJS uses this format to load modules asynchronously in the browser as they are requested, an ensures the code executes as ordered.

--

- Companion tool **r.js** performs the bundling for production
???

Requesting all those files individually is inefficient in a production website, so RequireJS's companion tool r.js "optimizes" an application into a smaller set of files.

This makes it easy for a developer to debug the many hundreds of files that make up their web applications as multiple files locally, while still sending a single bundled file to their production server.

---

# AMD Module Syntax

Note the use of `define`:
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

The AMD format itself wraps a module in the `define` function supplied by RequireJS

Define is passed an array of dependencies, and a callback function which receives those dependencies
and returns a module.

---

# Browserify: The Basics

- Supports the __CommonJS__ module format

???

AMD was designed for the browser, but while RequireJS was being developed, Node.js was also gaining in popularity

Node's module format, called CommonJS, was not supported by the other bundlers of the time. ...

So a tool called Browserify was created to let you write front-end web code using the CommonJS module format,

--

- _Shims_ some of the "common" node modules
???

and Browserify also provides some builtin shims for core node modules so that code written for Node will also work in front-end web applications.

---

# CommonJS Module Syntax

Note the use of `require` and `module.exports`:

```javascript
var dependency = require('./dependency');
module.exports = {
  render: function() {
    dependency.render();
  },
};
```
CommonJS is the format that [Node modules](https://nodejs.org/docs/v0.4.1/api/modules.html#modules) are written in.

???

Here is an example CommonJS module that uses `require` to include dependencies, and `module.exports` to export the module.  Note that this format is **synchronous**, it implies that all dependencies can be synchronously loaded.

Because CommonJS requires less verbose boilerplate than AMD, Node-style modules have become more popular.

---

# Webpack: The Basics

???

So where does Webpack come in? Browserify and AMD were useful, but did not solve all our problems.

In very large applications, bundling everything could easily create bundles that were tens or hundreds of megabytes of JavaScript.  Browserify and Require eventually had ways to separate chunks of the output into loadable "feature" bundles, but the configuration was hard to automate. ...

---

# Webpack: The Basics

- Smart code splitting

???

Webpack can analyze the code and be **smarter** about outputting multiple bundles. Webpack also includes a syntax for splitting bundles very intelligently, allowing you to load critical bits of JavaScript only on the first pass, and ensure the additional scripts are loaded before you need to use them. ...

--

- Smaller, more portable output bundles

???

Since webpack is capable of analyzing and transforming JavaScript, it is also able to produce output bundles that are smaller and more portable, not relying on details like file paths to operate at runtime. ...

--

- Supports AMD _and_ CommonJS

???

It also supports both AMD and CommonJS modules, allowing us to consume a wide variety of JS modules. And by renaming the `define` and `require` statements to Webpack's own internal syntax, Webpack's output bundles may be consumed by RequireJS or Browserify as well. ...

--

- Plugin-able

???

And most interestingly, Webpack can also be further extended to understand other module formats and features.

---

# Webpack bundles more than JavaScript

### "modules" in webpack

- Source Code
- HTML
- Templates (e.g. Handlebars, Lodash)
- Styles (e.g. CSS, SASS, Stylus, Less)
- Images (e.g. PNG, JPG, GIF)
- Other assets (MP3, MPEG)
- Data (JSON)

???

This means Webpack also allows you to bundle static content like HTML, CSS, and images.  This allows you to bundle the non-javascript dependencies right alongside your javascript code, using the same tool.

Webpack goes way beyond just packing scripts: in webpack you can use loaders and plugins to enhance your development workflows beyond what you can achieve with more basic module bundlers.

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
