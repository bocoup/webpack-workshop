# What is webpack?

???

This workshop will teach you the basics of webpack.

Webpack helps produce smaller scripts, reduce the number of files a browser
fetches by inlining files, and organize those files for distribution.

Webpack empowers your web app using common loaders like babel, style, css, and
file and plugins like extract-text and uglify

--
### webpack is a module bundler

--
# What's that?

--
### A tool to group together parts of a web app so a user can get to using it faster

---

# Instalation

`npm install --save-dev webpack webpack-dev-server`

???

Webpack installation is done through npm.

--

# Using webpack

```shell
export PATH=node_modules/.bin:$PATH
webpack-dev-server
```

or

```json
"scripts": {
  "dev-server": "webpack-dev-server"
}
```

or combined with grunt, gulp, or broccoli

???

You can add to your shell's executable search paths to find it or have a script in your `package.json` to make it easy to use.

Webpack can be used as its own tool creating a standalone build process for simple projects and for complex projects can be integrated into tools like grunt, gulp, and broccoli.
