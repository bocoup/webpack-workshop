## Learning Objectives

### Basic Core Use with HTML, JS, and CSS

Learn how to use webpack from just concatting an app to using common loaders like babel, style, css, and file and plugins like extract-text and uglify. Webpack helps produce smaller scripts, reduce the number of files a browser fetches by inlining files, and organize those files for distribution. This section will take an application with no build process and implement one with webpack.

- What loaders do
- Style, css, file, and babel loaders
- What plugins do
- Extract text and uglify plugins
- Webpack watch, dev middleware and dev server

### Handle Incompatible Dependencies

This is a small module to instruct on what tools can be used to interop with third party modules that don't immediately work with webpack.

- Import, export, script loaders
- Provide plugin
- Working with bower

### Debugging / Testing

Any complex enough project needs a way to make sure changes don't create regressions and when they do how to best find them. Webpack and other package loaders help get an application running in a browser but can make debugging more opaque than an army of script tags. Source maps, coverage testing, eslint and test runner integration can help building an environment to test in getting the benefits of webpack while reducing its impact to debugging.

- Karma
- eslint-loader
- Source Maps
- Coverage testing

### Convenience Modules

The webpack community has built a lot of packages that add a lot of great tools to make working with webpack even better. Let's visit some of them and see what they can do for us.

- Baggage-loader (reduce the developer overhead for common companion files)
- Webpack visualization plugin (Get a easy to parse pie graph of what contributes to your webpack'd script size)
  - HTML Plugin
  - Easy custom index.html setup
  - Bake content into html for static pages

### Hot Module Replacement (HMR)

Hot Module Replacement is one of webpack's more touted features. It can bring an almost magical element to development as your a complex app quickly updates from source changes. We'll dig into how to use it in simple and powerful cases through loaders, and how it use in custom implementations and its implications.

- Hot Module Replacement
- Webpack-dev-server with HMR
- Webpack-hot-middleware
- Hot loading style
- Module.hot.accept API

### Code Splitting

The fastest website is a small website. For larger projects you can still make a small website by splitting up the needed content at one time through Code Splitting. With Single Page Applications, multiple views of a website will navigate between each other through url routes, this can be a nice point to load any further needed scripts and content. Another way to break up a large app with Code Splitting is by deferring rendering of some complex content, like graphs or galleries, while simpler content can be rendered earlier, like the body text of an article.

- Require.ensure
- Split large apps into smaller pieces
