# Loaders Recap

### Do one thing well

Webpack only understands and parses javascript. Through loaders it can take any file format that can in some way be translated to javascript.

- `file-loader` emits an asset and returns the URL to where the emitted asset is.
- `css-loader` transforms css into code that concatenates strings of the original css together to become one string of css.
- `style-loader` outputs a small script to take that runtime string of css and inject it into the page in a `<style>` tag.

This way webpack uses javascript as an intermediate format for any content.

???

Though webpack only parses and understands JavaScript, loaders are capable of converting many things into modules.  Our file loader gives us URLs for instance, and css loader parses a css file!  The style loader generates a module that executes at runtime and includes our css files!

There are many more loaders we will learn about soon, but our quest to bundle our entire application with webpack is not yet complete.  We will need to move onto plugins, but before we do that, let's take 5 or 10 minutes.
