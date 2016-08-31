class: center, middle, dark

# Plugins

---

# Plugins change everything

Loaders let webpack understand and include files that aren't javascript. Loaders work on modules.

Plugins let webpack understand how modules relate to each other beyond them depending on each other. Well that and then practically anything else can be added to webpack through a plugin.

We're giong to look three well-used plugins.

- DefinePlugin
- ExtractTextWebpackPlugin
- UgilfyJsPlugin.

???

So that last whole section was a doozy but you made it. Now we can start peering at a specific plugin and see that meat it provides on webpack's skeleton.

Active use of plugins is most of the time done when building an application for publishing online. There are plenty of others but three fairly universally used plugins are:

---

# Built-in and external plugins

Webpack's own npm package comes with some built-in plugins, and it is pretty extensible through it's API.

From our previously listed plugins, __Define__ and __UglifyJs__ are provided by webpack's npm package, while __ExtractTextWebpackPlugin__ has its own [npm package](https://www.npmjs.com/package/extract-text-webpack-plugin). This means you'll need to install it in your project as another dependency:

```shell
npm install extract-text-webpack-plugin --save-dev
```

---

# Naming convention for external plugins and loaders

__Loaders__ can be found on npm with the name `loader` in their package name while __plugins__ on npm have `webpack-plugin` in the package name to help identify from them from plugins for other packages.

They are also conventionally identified within package.json keywords using `webpack` and `loader` for loaders and `webpack` and `plugin` for plugins.

Remember this is a convention and not strictly followed by every plugin. At least it won't break your webpack tooling.

You can check [this example](https://www.npmjs.com/package/babel-loader) and maybe you might find [what is missing](https://www.npmjs.com/package/extract-text-webpack-plugin) here.
