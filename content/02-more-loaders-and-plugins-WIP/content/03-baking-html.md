name: ch3-sec3
class: center, middle

# Static HTML with Client JS

### Baking Sites or Structure with HTML Plugin

???

Earlier we brought in a plugin, ExtractText, to optimize delivery of an app. We can use the HTML plugin to do that too.

We can take our JavaScript recipie, and use it to generate a "baked" HTML chunk.  This chunk will be embedded in our HTML!

---

# Let the browser download assets before JS

Frontend code looks for:
```html
<div id="root"></div>
```

Optimized, speedy loading, search-indexable sites need:
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

A lot of "application frameworks" inject their HTML into a "root element" on the page, but for our application to be fast loading, and indexable by search engines, we should be generating the HTML and links to our important assests (like the logo).

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
    <div id="root">${require('./server-render').default}</div>
  </body>
</html>
`;
```

???

For this we can use ES6 template strings through babel-loader to render the bulk of our html structure.  While we may have a main.js to kick off the client render we can have server-render.js kick off a server render since that is what we are doing with this technique. ...

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

### But it's using webpack for `require`

- Feels like node require
- BUT - lets you use loaders like file-loader for images.

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
