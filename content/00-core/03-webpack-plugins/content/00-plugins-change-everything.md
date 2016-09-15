class: center, middle, dark

# Plugins
Illustration?

???

Welcome to the last part of the Core Chapter, Plugins

(This section should take 30 minutes)

---

# Loaders: Recap

Loaders let webpack understand and include files that aren't JavaScript.

Loaders work on modules.

???

Loaders work while loading modules, and allow webpack to include files that aren't javascript, and change how that javascript is parsed or exported.

In order to do more complicated things, webpack has given us plugins.

---

# Plugins change everything

- change parser details
- write custom transformations
- utilize the module graph in other ways.

### Plugins Used Here

- ExtractTextWebpackPlugin
- HtmlWebpackPlugin
- DefinePlugin
- UgilfyJsPlugin.

???

Plugins allow much more customization of the overall build process.  It will allow you to change details about the code while parsing, write custom transformations, and utilize the module graph in other ways.

In our quest to bundle our whole application for deployment, we will be including these 4 example plugins into our build process.

---

# NPM Naming convention

### Loaders: -loader

### Plugins: -webpack-plugin

### Tags: webpack, loader, plugin, etc

???

__Loaders__ can be found on npm with the name `loader` in their package name while __plugins__ on npm have `webpack-plugin` in the package name to help identify from them from plugins for other packages.

They are also conventionally identified within package.json keywords using `webpack` and `loader` for loaders and `webpack` and `plugin` for plugins.

Remember this is a convention and not strictly followed by every plugin.
