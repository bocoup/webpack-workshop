name: ch2-sec1
# Resolving `require()`

### How webpack Finds the Things you `require`

There are three types of `require`s:

???

Let's start off this section by talking about how webpack handles `require`.

The first step is to figure out what type of request we are dealing with.  If you are familiar with how node looks for modules, this should look very familiar.

There are many ways you can configure how webpack searches for files to match these requests...
--

- Absolute:
```js
require('/home/me/file');
require('C:\\home\\me\\file');
```

???
- Absolute, when you call require with an absolute path...
--

- Relative:
```js
require('./file');
require('../file');
```

???
- Relative, a path staring with `.` or `..` ...
--

- Module:
```js
require('module');
require('module/file');
```

???
- And lastly, everything else is treated as a Module.

---
# Resolving `require()`: Relative Paths

```js
require('./file');
require('../file');
```

- Resolve the relative path into a absolute one using the context of the loaded file

???

Let's start with an easy one...  In order to handle relative paths, webpack converts them to absolute paths.

---

# Resolving `require()`: Absolute Paths


```js
require('/home/me/directory');
```

To resolve this `require`, webpack will:

1. Look for a `package.json` for the module in `/home/me/directory`
2. Determine a `main` from that `package.json`

???

Let's talk about what happens when we try to require a directory... First webpack is going to look for a `package.json` file, and try to infer the name of the file to include from it.

---

# Resolving `require()`: Absolute Paths

```js
require('/home/me/directory');
```

### Default Behavior

* If no `package.json` file is found that applies to `directory` OR
* The `package.json` doesn't define a recognizable `main`

???
If webpack can't find a `package.json` for the module being requested, OR if that `package.json` doesn't have a field that can be used to derive `main`...

--

Look for a file named `index` \*:

`/home/me/directory/index`

\* No extension...yet. Hang on!

???

webpack will default to looking for a file named `index`...we'll look at how it determines extension in a couple of minutes.

---

# Resolving `require()`: Absolute Paths

### `package.json` and `main`

If `/home/me/package/package.json` **does** exist and contains:

```js
{
  /* ... */
  "browser": "dist/bundle.js"
}
```

This `require`:

```js
require('/home/me/package');
```

Becomes this:

```js
require('/home/me/package/dist/bundle.js');
```

???

In our example here, we are trying to include the `package` directory, which has a `package.json` who has a "browser" key defined, so we append that path to the directory, and require that file.

---

## Resolving `require()`: `packageMains`

Huh? Why is it using the `browser` field??

???
You can configure which fields are most important to the resolver in your webpack config.

--

### `packageMains` Configuration

- **`resolve.packageMains`** webpack config
- Defines a list of _fields_ in `package.json` files that webpack will look at to determine the `main`.

???

`packageMains` is a list of fields that webpack looks for on package.json to find the module's "main entry"

---

## Resolving `require()`: `packageMains`

- Default value of `packageMains`:

(`webpack.config.js`)
```js
module.exports = {
  resolve: {
    packageMains: ["webpack", "browser", "web", "browserify",
      ["jam", "main"], "main"],
  }
};
```

???
The value shown here is the default setting of `resolve.packageMains`
...and you can see, even by default, webpack searches pretty hard for this main file.

---

## Resolving `require()`: Extensions

```js
require('/home/me/directory/index');
```

Becomes this:

```js
require('/home/me/directory/index.js');
```

---

### Resolving `require()`: `resolve.extensions`

- **`resolve.extensions`**: string extensions that webpack will try to append to `require`'d files
- Default value of `resolve.extensions`:

```js
module.exports = {
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js'],
  }
};
```

???
- Every type of require eventually end up giving us a path to a file.
- **`resolve.extensions`** is a webpack config that lists string extensions that webpack will try to append to `require`'d files
- At this point webpack will check its list of extensions for the FIRST MATCH and use it.

--

- `''` allows extensions to be used explicitly
- __Without__ `''`, `require('./index.js')` will __break__
- __With__ `''`, `require('./style.css')` will __work__
- Add, e.g., `.css` to make `require('./style')` work

???

Note that an empty string is used as the first extension here, this allows webpack to find `require('style.css')` without trouble, but you can leave off the '.css' if you add the extension to this configuration.

- The first `''` is important—it allows extensions to be explicitly used in `require`
- Without `''`, `require('./index')` will work but `require('./index.js')` won't
- `''` will cause `require('./style.css')` to work (or any other explicit extension)
- Add `'.css'` to make `require('./style')` work, e.g.

You'll probably want to add 'jsx' to this list if you're working on a react project.

---

## Resolving `require()`: modules

```js
require('module');
require('module/with/path/to/file');
```

- To resolve _modules_, webpack will check **`resolve.alias`** configuration
- `resolve.alias` lets you _alias_ specific modules to other places than the `node_modules` directory

???

All right, now that we know what happens when you have a relative or absolute path from webpack, lets talk about how webpack gets to a path from a "module" require path.

`resolve.alias` lets you _alias_ specific modules to other places than the `node_modules` directory

---

#### Resolving `require()`: `resolve.alias`

For example:

```js
module.exports = {
  resolve: {
    alias: {
      jquery$: path.resolve('./vendor/jquery-3.1.0')
      //   `$` indicates "exact" match
    }
  }
}
```

- Syntax: the `$` signifies _exact match_ instead of _partial_
- `require('jquery/src/file'); // --> ERROR (because of $)`
- `require('jquery'); // --> '/full/path/vendor/jquery-3.1.0'`
- [`resolve.alias` documentation](https://webpack.github.io/docs/configuration.html#resolve-alias) has a table that details this more


???

First, webpack will look in the `resolve.alias` configuration for a match.  Each key on this configuration object represents a "module name".  In our example here, we are making `require('jquery')` find jquery in our vendor folder.  Note that it is important to use an absolute path here.  This is a pretty simple search and replace operation.  If you use a relative path, it will be relative based on where the `require` is called, not the webpack config.

The `$` is a bit tricky, when you have a `$` webpack looks for EXACT MATCH only.  You should use the `$` if your alias points to a single file, or leave it off if you want to be able to require files within the module directory.

It is possible to alias one module to another module path as well as relative and absolute paths.

This is a very useful technique to have available to you...

---

## Example: `resolve.alias` can help with testing

Test code should be written as if you are a consumer of the library.
```js
// "bad"
const method = require('../src/library/method');
// "good"
const method = require('mylibrary').method;
```

```js
  resolve: {
    alias: {
      // In a "dev mode" configuration, use the unbundled src folder
      mylibrary: path.resolve('./src/index.js'),
      // In a "post-build test mode" config you can test against minified output:
      mylibrary: path.resolve('./dist/mylibrary.min.js'),
    }
  },


```

???

Another very strong use case for creating resolve alias for modules is testing.

If we are using webpack to produce a library, we should write our tests as if we were consumers of our library.  We shouldn't require realative paths to `src` to get to our methods to test, we should test the publicly exported API.

Using resolve aliases, we can write our tests using `require('mylibrary')` and still have the advantage of using the `src` files in dev mode, but be able to easily swap out that dependency and run tests against the minified production version.

---

# Resolving modules:

```js
require('module');
require('module/with/path/to/file');
```

- First: Check Aliases
  - Result is a new path, which is resolved (absolute, relative, or module)

???

So we check aliases, and this new path that we get is then resolved.  If we didn't find an alias...

---

# Resolve configuration: There's More!

No alias? Keep hunting, using more `resolve` config properties:

Hunting order:

1. [`root`](https://webpack.github.io/docs/configuration.html#resolve-root)
2. [`modulesDirectories`](https://webpack.github.io/docs/configuration.html#resolve-modulesdirectories)
3. [`fallback`](https://webpack.github.io/docs/configuration.html#resolve-fallback)

```js
// default: only modulesDirectories: ['node_modules']
resolve: {
  root: [path.resolve('./vendor'), path.resolve('./module_override')],
  modulesDirectories: ['node_modules', 'bower_components'],
  // ./node_modules, ./bower_components, ../node_modules, ../bower_components, ../../
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

## Found the directory!

```js
require('module') === require('../../node_modules/module');
require('module/path') === require('../../node_modules/module/path');
```

???

Now that it's found the directory for the module, webpack will treat it like an absolute path, looking for package.json, mains, extensions, and all the other configuration we've talked about.

---

# Recap: Resolving

Config properties under `resolve`:

- `packageMains` - defaults are fine!
- `extensions` - add `jsx` or `coffee` etc, -- keep `''` first!!!
- `alias` - "trick" module locations
- `root`, `modulesDirectories`, `fallback` - help with the "hunt"

???

To recap the options we have available to teach webpack how to resolve requires.

`packageMains` - We showed you this setting mainly to describe how webpack finds the "main file" for a given package, the defaults will most likely be correct for your projects.

`extensions` is a useful way to add more things to the auto-resolver capabilities.  This is where you'd add `jsx` or `coffee` extensions to be auto-resolved.

`alias` is a way to rewrite the resolution of a module name to something else.  we talked about how this was useful for testing, but it has other uses.

The last three options here `root`, `modulesDirectories` and `fallback` all configure how webpack will hunt for modules when you require them.  We talked about how to use this to include modules from bower as an example.

------

Excercise Possibility: switch to using `require('jquery')` in the meme gen, and teach webpack to find it.
