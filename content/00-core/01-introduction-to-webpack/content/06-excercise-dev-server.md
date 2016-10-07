class: middle
name: ch1-ex2
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

# Exercise 02 - Add Dev Server

### Recap

`webpack-dev-server` runs wepback in a server and serves static files. It provides fast rebuilds by using a memory cache.

#### Goals

* Install the **`webpack-dev-server`** package in our app
* Add `scripts` entry package.json for **`npm run dev`**
  (this command doesn't need to copy files)
* Start the dev server and open **`localhost:8080`**
* Change the default meme text in `src/main.js` and watch it rebuild (terminal)
* Refresh and see your change in the browser!

???

Even though the last section was already very quick, lets quickly review dev server.

We need to install it with `npm install --save-dev` and add a script to package json.

That's it.  Let's try it!

---

# Exercise 2 Answer: Dev Server Setup Steps

1. **Install `webpack-dev-server`**:

    ```shell
    npm install webpack-dev-server --save-dev
    ```

2. **Configure `dev` script in `package.json`**:

    ```json
    "scripts": {
      "build": "webpack && cp -R index.html img styles dist",
      "dev": "webpack-dev-server",
    }
    ```
3. **Start dev server**: `npm run dev` starts our dev server
4. **View app in browser**:  Visit http://localhost:8080/
5. **Change meme text**: Edit `main.js`:

    ```js
    var currentText = "Work hard, Meme hard";
    ```
6. **Save the changes**: Watch the rebuild in console; refresh browser to see changes

???

We needed to install `webpack-dev-server`, add a `script` to our package.json, `npm run dev` and we had a development server up and running at `localhost:8080`

Congratulations, you've setup your webpack development environment, and completed the "Introduction to webpack" section of Chapter 1.  Are there any questions?

Let's take a quick 5 minute break?
