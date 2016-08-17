# Loaders Recap

Webpack only understands and parses javascript. Through loaders it can take any file format that can in some way be translated to javascript.

- `babel-loader` transpiles future javascript syntax into es5 syntax that webpack understands.
- `css-loader` transforms css into code that concatentates strings of the original css together to become one string of css.
- `style-loader` outputs a small script to take that runtime string of css and inject it into the page in a `<style>` tag.
- `file-loader` emits an asset and returns code that at runtime refers to where the emitted asset is.

This way webpack uses javascript as an intermediate format for any content.

---
