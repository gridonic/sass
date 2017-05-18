<p align="center"><img src="https://gridonic.github.io/assets/images/logos/sass.svg" alt="Sass" width="128"></p>

# Sass foundation

This repository represents our starting point for creating *sane*, *scalable* and *maintainable* CSS.

💪 It’s empowered by:

- [Aigis] *(styleguide generator)*
- [SassDoc] *(code documentation)*
- [Gemini] *(utility for visual regression testing)*

📚 Uses the following libraries by default:

- [normalize.css]
- [include-media]
- [family.scss]

🙏 Obeys those principles:

- [rscss] *with a [tiny extension]*
- [Vertical Rhythm]
- [Google Web Fundamentals]

Have fun! ✌️

## Wait, how am I supposed to use it?

**Primarily** it’s meant to be [downloaded], extracted and used as a starting point that will grow/adjust from time to time while you work with it.

ℹ️ Meanwhile see the wiki for additional [recipes] on how to use this foundation.

## Build setup

```bash
# install dependencies
npm install

# builds the css files
npm run build

# builds the css files in production mode (compressed)
npm run build:prod

# generates the styleguide
npm run styleguide

# generates the code documentation
npm run docs

# shows some statistics about the compiled css
npm run stats

# watches the sass files for changes and builds them automatically
# including the styleguide and the docs
npm run watch

# run visual regression tests and markup validation after css has been build
# and styleguide has been generated
npm run test

# checks the markup validity (of the styleguide or the files you’ve specified)
npm run test:html

# run visual regression tests only (doesn’t build and update styleguide beforehand)
npm run test:visual
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
[Vertical Rhythm]: https://zellwk.com/blog/why-vertical-rhythms/
[Google Web Fundamentals]: https://developers.google.com/web/fundamentals
[SassDoc]: http://sassdoc.com/
[Gemini]: ./gemini
[downloaded]: https://github.com/gridonic/sass/releases/latest
[recipes]: https://github.com/gridonic/sass/wiki/Recipes
[family.scss]: https://lukyvj.github.io/family.scss/
