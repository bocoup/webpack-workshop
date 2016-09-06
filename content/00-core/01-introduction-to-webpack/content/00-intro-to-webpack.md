class: center, middle

# Part 1: Introduction to webpack

???
Intro slide for next section

---

# What is webpack?

???

This workshop will teach you the basics of webpack.

Webpack helps produce smaller scripts, reduce the number of files a browser
fetches by inlining files, and organize those files for distribution.

--
### webpack is a module bundler
???

Webpack is a member of a group of software for building websites called module bundler.

--

## What's that?

--

### A tool to group together parts of a web app so a user can get to using it faster

???

They load and produce modules, generating streamlined assets to make browsing the web faster.


---

# Instalation

* Install node & npm
* Create an npm package.json if needed
>  `npm init --yes`
* Install webpack
>  `npm install --save-dev webpack`

???

Webpack installation is done through npm, install the `webpack` package.

---

# Using webpack

```shell
export PATH=node_modules/.bin:$PATH
webpack
```

### or package.json - `npm run build`

```json
"scripts": {
  "build": "webpack"
}
```

### or combined with grunt, gulp, or broccoli

???

When working on node projects, it often helps to add the `node_modules/.bin` to your shells `PATH`.

You can also define a script in your `package.json` that creates an `npm run` command.

Webpack can be used as its own tool creating a standalone build process for simple projects and for complex projects can be integrated into tools like grunt, gulp, and broccoli.
