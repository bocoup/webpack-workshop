name: ch1.2-sec5
# Loaders Recap

### Do one thing well

webpack only understands and parses Javascript. Through **loaders** it can take any file format that can in some way be translated to JavaScript.

- **`file-loader`** emits an asset and returns the URL to where the emitted asset is.
- **`css-loader`** transforms CSS into code that concatenates strings of the original CSS together to become one string of CSS.
- **`style-loader`** outputs a small script to take that runtime string of CSS and inject it into the page in a `<style>` tag.

This way webpack uses JavaScript as an intermediate format for any content.

???

Though webpack only parses and understands JavaScript, loaders are capable of converting many things into modules.  Our file loader gives us URLs for instance, and css loader parses a css file!  The style loader generates a module that executes at runtime and includes our css files!

There are many more loaders we will learn about soon, but our quest to bundle our entire application with webpack is not yet complete.  We will need to move onto plugins, but before we do that, let's take 5 or 10 minutes.
