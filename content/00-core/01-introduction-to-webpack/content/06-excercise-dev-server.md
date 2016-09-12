class: center, middle
# Exercise!

???

Section 6

---

# Exercise 02 - Add dev server

#### Recap

`webpack-dev-server` runs wepback in a server and serves static files. It provides fast rebuilds by using a memory cache.

#### Goals

* Install the **`webpack-dev-server`** package in our first app.
* Add script in package.json for **`npm start`**  
  (this command doesn't need to copy files)
* Run a dev server and open **`localhost:8080`**
* Change the default text in the javascript and watch it rebuild!
* Refresh and see your change in the browser

---

# Exercise 02 - Answer Overview

**`package.json`**

```json
"scripts": {
  "build": "webpack && cp -R index.html img styles dist",
  "dev-server": "webpack-dev-server",
  "start": "webpack-dev-server"
}
```

**`main.js`**

```js
var currentText = "Work hard, Meme hard";
```
