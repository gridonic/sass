<p align="center"><img src="https://gridonic.github.io/assets/images/logos/sass.svg" alt="Sass" width="128"></p>

# Sass foundation

This repository represents our starting point for creating CSS styles. Also comes with [Aigis] for generating a styleguide.

Uses the following libraries by default:

- [normalize.css]
- [include-media]

🙏 Obeys those principles:

- [rscss] *with a [tiny extension]*
- [vertical-rhythm]

Have fun! ✌️

## Build setup

```bash
# builds the css files
npm run build

# builds the css files in production mode (compressed)
npm run build:prod

# builds the styleguide
npm run styleguide

# watches the sass files for changes and builds them automatically
npm run watch

# tests if the sass files would build without errors
npm test
```

#  
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>

[normalize.css]: https://necolas.github.io/normalize.css/
[include-media]: http://include-media.com/
[Aigis]: ./aigis
[rscss]: http://rscss.io/
[tiny extension]: ./src/_exceptions.scss
[vertical-rhythm]: https://zellwk.com/blog/why-vertical-rhythms/
