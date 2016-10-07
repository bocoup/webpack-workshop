name: ch3-sec4
class: center, middle

# Exercise

### Static Image URLs

???

Lets use what we just covered with babel-loader and html plugin to include the Image URLs in our build into the html to start.

---

# Goals

- Install `babel-loader`, `babel-core`, and `babel-preset-es2015`

### In the production config

- Add the babel loader configuration and babel options to webpack

```js
babel: {
  env: {
    presets: ['es2015'],
  },
},
```
- Write `index.html.js` with template strings
- Write a method to render the images

#### Extra credit

- Setup and use a CSS super set loader

---

# Answers: JS Template

`index.html.js`

```js
module.exports = `
// ...
      <section>
        <h2>Select image:</h2>
        <ul class="image-selector">
          ${require('./server')}
        </ul>
      </section>
// ...
`;
```

???

Like the earlier template we can repeat most our index file and insert some output from a server version of the app.

In this approach we created a template for the production build, but you could use it in the development build as well. You want to use DefinePlugin or other details in your config to keep build time lower for development by defining a test to whether the server code should be run.

---

# Answers: Node Ready Code

`server.js`

```js
var imageUrls = [
  require('./img/bunny-725x544.jpg'),
  require('./img/funny-monkey-725x544.jpg'),
  require('./img/guinea-pigs-725x544.jpg'),
];

module.export = imageUrls.map(url => `
  <li><a href="#" class="select-image">
    <img src="${url}" width="120" height="90">
  </a></li>
`}).join('');
```

???

This is a simple version. You can do more to share most of this with the frontend client. The urls could be in a file by themselves and building the list elements could be a common function.

---

class: center, middle

# Fin

???

And that brings us to the end. Any questions?
