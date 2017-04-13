<p align="center"><img src="https://gridonic.github.io/assets/images/logos/sass.svg" alt="Sass" width="128"></p>

# Sass foundation

This repository represents our starting point for creating *sane*, *scalable* and *maintainable* CSS.

💪🏻 It’s empowered by:

- [Aigis] *(styleguide generator)*
- [SassDoc] *(code documentation)*
- [Gemini] *(utility for visual regression testing)*

📚 Uses the following libraries by default:

- [normalize.css]
- [include-media]

🙏 Obeys those principles:

- [rscss] *with a [tiny extension]*
- [Vertical Rhythm]
- [Google Web Fundamentals]

Have fun! ✌️

## Build setup

```bash
# install dependencies
yarn

# builds the css files
yarn build

# builds the css files in production mode (compressed)
yarn build:prod

# generates the styleguide
yarn styleguide

# generates the code documentation
yarn docs

# watches the sass files for changes and builds them automatically
yarn watch

# run visual regression tests
yarn test
```

*Note:* You can replace `yarn` with `npm run` if you don’t want to use yarn. ¯\\\_(ツ)\_/¯

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
[Gemini]: https://github.com/gemini-testing/gemini
