class: center, middle
name: ch2

# Working around incompatibilities.

### (A.K.A.) Teaching webpack to load JavaScript

???

Not all modules are created equal.  Not all modules work immediately within a webpack project.  It's unfortunate when you run into these situations, and they are pretty common.

This is true of all module bundlers, and one of the most famous "incompatible things" are older versions of jQuery 1.x, and plugins for jQuery.

In this next section we are going to talk about the techniques you have as a webpack user to handle importing JavaScript modules that don't quite behave.

