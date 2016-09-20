class: middle
# Exercise Time!

```
> 01-my-first-app@ dev-server /Users/gnarf/Projects/webpack-workshop/exercise
> webpack-dev-server

 http://localhost:8080/webpack-dev-server/
webpack result is served from /
content is served from /Users/gnarf/Projects/webpack-workshop/exercise
Hash: d929dd8f7f2bc08c866e
Version: webpack 1.13.2
Time: 316ms
  Asset    Size  Chunks             Chunk Names
main.js  298 kB       0  [emitted]  main
chunk    {0} main.js (main) 288 kB [rendered]
    [0] ./src/main.js 566 bytes {0} [built]
    [1] ./src/canvas.js 1.08 kB {0} [built]
    [2] ./vendor/jquery-3.1.0.js 286 kB {0} [built]
```
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
* Change the default meme text in `src/main.js` and watch it rebuild (terminal)
* Refresh and see your change in the browser!

???

Even though the last section was already very quick, lets quickly review dev server.

We need to install it with `npm install --save-dev` and add a script to package json.

That's it.  Let's try it!

---

# Exercise 02 - Answer Overview

**`npm install webpack-dev-server --save-dev`**

**`package.json`**: added script

```json
"scripts": {
  "build": "webpack && cp -R index.html img styles dist",
  "dev": "webpack-dev-server",
}
```

**`npm run dev`**: started our dev server

Visted http://localhost:8080/

**`main.js`**: Changed some text

```js
var currentText = "Work hard, Meme hard";
```

Saw the rebuild on the console, and in the browser after refresh.

???

We needed to install `webpack-dev-server`, add a `script` to our package.json, `npm run dev` and we had a development server up and running at `localhost:8080`

Congratulations, you've setup your webpack development environment, and completed the "Introduction to webpack" section of Chapter 1.  Are there any questions?

Let's take a quick 5 minute break?
