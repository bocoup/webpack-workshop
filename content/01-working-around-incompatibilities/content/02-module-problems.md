class: center, middle
name: ch2-sec2

# Module Problems

Illustration??

???

Now that we've talked a bit about how to train webpack to find your modules, lets talk a bit about the problems we run into with the modules themselves.

---

# Module Problems

### Not all libraries are modules

jQuery <= 1.9, and many, many more

???

Let's start off with a fairly obvious problem.  Not all JavaScript libraries were written as modules!  If you're porting an old site that used jQuery 1.9, and upgrading everything to use require immediately isn't possible, there are tricks we can use that we will cover in the upcoming sections...

--

### Not all modules "play well"
```js
var isNode = typeof module !== 'undefined';
```

???

Even when they are modules, not every JavaScript module you will find will make sane assumptions about it's environment.

The bit of code on screen here is just one example of how this can go wrong, where the library author incorrectly assumed that the presence of `module` means we are in node, and gives up on important browser functionality.

We've also seen modules which when using AMD format define things incorrectly and the exports get messed up.  Luckily there are ways we can solve this problem as well.

---

# Shimming modules

Webpack docs: [shimming modules](https://webpack.github.io/docs/shimming-modules.html)

### Techniques:

- `script-loader`
- `exports-loader`
- `imports-loader`
- `ProvidePlugin`
???

Webpack has a page on the documentation devoted to this whole class of problems.  In the next few sections, we are going to take a moment to focus on each of these techniques, talk about the problems they solve or create in more detail.
