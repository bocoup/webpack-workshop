# Resolving `require()`

- Absolute:
```js
require('/home/me/file');
require('C:\\home\\me\\file');
```
- Relative:
```js
require('./file');
require('../file');
```
- Module:
```js
require('module');
require('module/file');
```

???

Let's start off this section by talking about how webpack handles `require`.

The first step is to figure out what type of request we are dealing with.  If you are familiar with how node looks for modules, this should look very familiar.

There are many ways you can configure how webpack searches for files to match these requests.

---
# Resolving Realtive Paths
```js
require('./file');
require('../file');
```

- Resolve the relative path into a absolute one using the context of the loaded file.

(Which directory it is in)

???

Let's start with an easy one...  In order to handle relative paths, webpack converts them to absolute paths.

---

# Resolving Absolute Paths

### Path to Directory
* Look for package.json
  * Look for "main" file in package.json

```js
require('/home/me/package');
// with:
// package/package.json: {"browser": "dist/bundle.js"}
// becomes:
require('/home/me/package/dist/bundle.js');
```

(configuring packageMains in webpack.config.js)
```js
module.exports = {
  resolve: {
    packageMains: ["webpack", "browser", "web", "browserify",
      ["jam", "main"], "main"],
  }
};
```

???

Let's talk about what happens when we try to require a directory... First webpack is going to look for a `package.json` file, and try to infer the name of the file to include from it.  You can configure which fields are most important to the resolver in your webpack config.

In our example here, we are trying to include the `package` directory, which has a `package.json` who has a "browser" key defined, so we append that path to the directory, and require that file.

This list of packageMains here is the default setting, and you can see, webpack searches pretty hard for this main file.

---

# Resolving Absolute Paths (part 2)

### Path To Directory
* No package.json, or main, default to filename of `index`

```js
require('/home/me/directory');
// becomes:
require('/home/me/directory/index');
```

???

If there isn't a package.json, or we don't find a main field in the package, we default to using a filename of `index` (no extension... yet)

---

# Resolving Absolute Paths (part 3)

### Path To File - Test resolve.extensions

```js
require('/home/me/directory/index');
// becomes
require('/home/me/directory/index.js');
```

webpack config:
```js
module.exports = {
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js'],
  }
};
// the '' first is pretty essential, allowing require('./index.js') to work.
// It also means require('./style.css') works.
// If you want require('./style') to work, you can add '.css' to this list!
```

???

Every type of require eventually end up giving us a path to a file.

At this point webpack will check it's list of extensions for the FIRST MATCH and use it.

Note that an empty string is used as the first extension here, this allows webpack to find `require('style.css')` without trouble, but you can leave off the '.css' if you add the extension to this configuration.

You'll probably want to add 'jsx' to this list if you're working on a react project.

---

# Resolving modules

```js
require('module');
require('module/with/path/to/file');
```
### Check "aliases"
```js
module.exports = {
  resolve: {
    alias: {
      jquery$: path.resolve('./vendor/jquery'),
      // the $ signifies "exact match" instead of "partial" which allows:
      // require('jquery/src/file');
      // using "jquery$" as an alias - this IS AN ERROR
      // but with "jquery" you'd get
      // vendor/jquery/sub/file
    }
  }
}
```
[`resolve.alias` documentation](https://webpack.github.io/docs/configuration.html#resolve-alias) has a table that details this more.


???

Alright, now that we know what happens when you have a relative or absolute path from webpack, lets talk about how webpack gets to a path from a "module" require path.


First, webpack will look in the `resolve.alias` configuration for a match.  Each key on this configuration object represents a "module name".  In our example here, we are making `require('jquery')` find jquery in our vendor folder.  Note that it is important to use an absolute path here.  This is a pretty simple search and replace operation.  If you use a relative path, it will be relative based on where the `require` is called, not the webpack config.

It is possible to alias one module to another module path as well as relative and absolute paths.

This is a very useful technique to have available to you...

---

# resolve.alias can help with testing

Test code should be written as if you are a consumer of the library.
```js
// "bad"
const method = require('../src/library/method');
// "good"
const method = require('mylibrary').method;
```

```js
  // In a "dev mode" test config
  // stack traces will be from uncompressed, original source
  resolve: {
    alias: {
      mylibrary: path.resolve('./src/index.js'),
    }
  },


  // In a "build mode" config you could then test against minified output:
      mylibrary: path.resolve('./dist/mylibrary.min.js'),
```


???

Another very strong use case for creating resolve alias for modules is testing.

If we are using webpack to produce a library, ee should write our tests as if we were consumers of our library.  We shouldn't require realative paths to `src` to get to our methods to test, we should test the publicly exported API.


Using resolve aliases, we can write our tests using `require('mylibrary')` and still have the advantage of using the `src` files in dev mode, but be able to easily swap out that dependency and run tests against the minified production version.

---

# Resolving modules

```js
require('module');
require('module/with/path/to/file');
```

- Check Aliases
  - Result is a new path, which is resolved (absolute, relative, or module)

???

So we check aliases, and this new path that we get is then resolved.  If we didn't find an alias...

--

### Still have a "module" path???  Hunt for it!

- [`root`](https://webpack.github.io/docs/configuration.html#resolve-root)
- [`modulesDirectories`](https://webpack.github.io/docs/configuration.html#resolve-modulesdirectories)
- [`fallback`](https://webpack.github.io/docs/configuration.html#resolve-fallback)

```js
resolve: {
  root: [path.resolve('./vendor'), path.resolve('./module_override')],
  modulesDirectories: ['node_modules', 'bower_components'],
  // ./node_modules, ./bower_componets, ../node_modules, ../bower_compoents, ../../
  fallback: [path.resolve('./last-place-to-look')],
}
```

???

we need to hunt for it!

In both of our requires here - the "module" name is `module`, in order to look for it, webpack looks for a file or directory of the same name in multiple places.

First it hunts `resolve.root`, which is a way you can define locations to look BEFORE trying the module directories.

modules directories defines a list of directory names, not paths, and this is an important distinction. It checks every directory on the way up to the "root" context for a folder matching these names and looks inside it for the module.  In this example here, we've taught webpack to also look for bower_components directories.

`fallback` exists so you can define a "last ditch" place to look for modules. You're unlikely to need this distinction, ever.

---

# Resolving modules

# Found the directory!

```js
require('module') === require('../../node_modules/module');
require('module/path') === require('../../node_modules/module/path');
```

???

Now that it's found the directory for the module, webpack will treat it like an absolute path, looking for package.json, mains, extensions, and all the other configuration we've talked about.

---

# Recap: Resolving

- `packageMains` - defaults are fine!
- `extensions` - add `jsx` or `coffee` etc, -- keep `''` first!!!
- `alias` - "trick" module locations
- `root`, `modulesDirectories`, `fallback` - help with the "hunt"

???

To recap the options we have available to teach webpack how to resolve requires.

`packageMains` - this option is good to know about, but we find the defaults to be what you want in most cases, and other methods help with the "odd packages"

`extensions` is a useful way to add more things to the auto-resolver capabilities.  This is where you'd add `jsx` or `coffee` extensions to be auto-resolved.

`alias` is a way to rewrite the resolution of a module name to something else.  we talked about how this was useful for testing, but it has other uses.

The last three options here `root`, `modulesDirectories` and `fallback` all configure how webpack will hunt for modules when you require them.  We talked about how to use this to include modules from bower as an example.

------

Excercise Possibility: switch to using `require('jquery')` in the meme gen, and teach webpack to find it.
