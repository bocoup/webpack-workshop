class: center, middle

# Static HTML with Client JS

### Baking Sites or Structure with HTML Plugin

???

Earlier we brought in a plugin, ExtractText, to optimize delivery of an app. We can use the HTML plugin to do that too.

---

# Let the browser download assets before JS

Frontend client code wants

```html
<div id="root"></div>
```

While a fast website wants

```html
<div id="root">
  <div class="header">
    <img src="logo.png" />
    Fast Site.com
  </div>
  <div class="nav"><!-- nav things --></div>
  <div class="content"><!-- content fluff --></div>
</div>
```

???

One part of optimizing an app is getting the browser to load as many needed assets as early as possible. With webpack we can build a script to render the web app leading to the browser to load needed assets. For a client side app though that means the HTML page, then the script, needs to load before any assets can load.

With ExtractText and the HTML plugin the css can load before our script loads. We can also get the web page to load other assets like images with the HTML plugin.

The two blocks here represent what a client rendered page wants as a base to render into and what its output might be. We can also render that output when we webpack so that images and some other page elements can start loading before or while our script loads.

---

# Templatings with Template Strings

```js
module.exports = `<html>
  <head>
    <title>Production App</title>
  </head>
  <body>
    <div id="root">${require('./server').default}</div>
  </body>
</html>
`;
```

???

For this we can use ES6 template strings through babel-loader to render the bulk of our html structure to support however we render our site. While we may have a main.js to kick off the client render we can have server.js kick off a server render since that is what we are doing with this technique. ...

--

```js
import Application from './application';

export default new Application({
  root: '#root',
}).template();
```

```js
export default class Application {
  // ...
  template() {
    return '<h1>Hello World</h1>';
  }
}
```

???

Instead of building or changing DOM the baked version needs to return a string that can be placed in the html file.

---

# HTML Plugin Config

The config change is fairly simple.

```js
new HTMLPlugin({
  template: './index.html.js',
  filename: 'index.html',
}),
```

???

The configuration isn't very different for using the plugin this way. We overlooked it earlier but the plugin generates a script from the template, evaluates that in node, and used the returned content in the output asset. To do this the simpler use of HTML plugin takes html and parses it as a lodash template. You can go around the lodash template parse by using a file ending with a js extension or prefix the path with loaders.

---

# Be Careful

This is rendering a file in Node so some things aren't available

- window
- The DOM
- Canvas
- XmlHTTPRequest
- Many other browser APIs

???

Since this rendering in Node, its basically server rendering and many browser APIs are not available. You don't necessarily need your entire code base to work in this environment, you could be rendering a part of the app like the header, navigation and footer, leaving the content for the client to render. For those parts you do render you either need to build the content in a browser agnostic way or simulate a browser through tools like js-dom and selenium, rendering a DOM and then taking the text version.

---

# Recap

- Render a page of an app or part of the structure during webpack
- Allows the browser to load content before the script can load and execute
- Building the content needs to result in a string
- Many browser APIs aren't available and need to be tested for, simulated, or not used

???

Any questions before we get to the exercise?
