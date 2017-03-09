name: ch2-sec6
# "Incompatibilities" Review

- Resolver configuration
  - Most importantly:
  - `extensions` - add `jsx` or `coffee` etc, -- keep `''` first!!!
  - `alias` - "trick" module locations
  - `moduleDirectories` - need to add `"bower_components"`

- Shimming Modules

  - `script-loader` load globally, but as a string, so use minified js
  - `exports-loader` when the module you include doesn't export anything, but should
  - `imports-loader` when it doesn't require something it should
  - `ProvidePlugin` when the whole webpack world needs to know
