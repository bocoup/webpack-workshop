class: center, middle
# Dev Server

???

Section 5

---

# Webpack Dev Server

* Will watch input files for changes
* Will cause a rebuild to happen when changes happen
* Handles hosting the "web application" for us.

???

Webpack dev server is a great addition to the ecosystem.  It allows us to watch
our source code for changes, rebuild, and see those changes in the browser.

---

# Installing webpack-dev-server

```shell
npm install --save-dev webpack-dev-server
```

### package.json - `npm run dev`
```json
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server"
  }
}
```

???

Here is how we setup webpack-dev-server.  We need to `npm install` it just like we did with webpack, and setup a `script` to run it in the package.json.

---

# Other Options
You can pass some options to the dev server,
