# [1.5.0]
###### 2017-08-24

###### Added
- [Family.scss] for easier handling of `:nth-child` styles
- [cssnano] for compressing the production build
- [StyleStats] to collect some CSS statistics
- Source maps for default build

###### Changed
- Use separate stylesheet for vendor files
- Use config hash for commonly used paths
- Lots of tiny improvements to styleguide (styles)

###### Fixed
- Magic importer not importing files multiple times

# [1.4.1]
###### 2017-05-18

###### Changed
- Renamed `npm run validate` to `npm run test:html`
- Renamed `npm run test` to `npm run test:visual`
- Renamed `npm run test:update` to `npm run test:visual:update`
- `npm run test` to run `npm run test:html && npm run test:visual`

###### Fixed
- `Tree.deepToggle()` toggling only first element
- HTML validation not printing results while processing files

# [1.4.0]
###### 2017-05-15

###### Added
- [PostCSS] with [Autoprefixer] and “last 2 versions” as default [browserlist]
- [HTML Validator] [script](./bin/validate_html) (using [validator.w3.org/nu]) to make sure documented components have valid markup
- [Custom](./aigis/templates/menu.ejs) categories tree menu renderer for a more flexible theming support
- [Separate chapter](./src/shared/_typography.scss#L41) for vertical rhythm
- [Hover state](./tests/buttons/button-primary.js#L10) check in example button-primary test
- Placeholder logo to styleguide sidebar
- `!default` to breakpoint variables
- Text length limit (*forced newline*) of [~70 characters](./aigis/assets/css/styles.css#L40) to styleguide

###### Changed
- Watch task to run commands also initially
- Watch task to watch for changes in aigis folder as well
- Build task to clean beforehand

# [1.3.0]
###### 2017-04-25

###### Added
- [Gemini] for visual regression testing 👏
- Custom Sass importer [node-sass-magic-importer] 💪 which supports:
    - [Selector filtering]
    - [Node filtering]
    - [Module importing]
    - [Globbing]
- Aigis [`insert`](./aigis/templates/components.ejs#L20) parameter and improve [`config.yml`](./aigis/config.yml) documentation
- Aigis `github` and `arta` syntax [highlighting](./aigis/assets/css/highlight) themes
- [Globbing](./src/components/_buttons.scss#L18) example in button group
- [Example](./src/shared/_typography.scss#L43) for responsive typography

###### Changed
- Improve debugging styles and documentation
- Improve default link [`text-decoration`](./src/shared/_base.scss#L17) styles
- Improve typography documentation
- Rename all `$font-*` variables to `$base-*`
- Rename `shared/generic` to `shared/base` for consistency reasons
- Move `z-index` variables into own file ([`_z.scss`](./src/meta/_z.scss))
- Default syntax highlighter for Aigis to [highlight.js]

###### Fixed
- `$base-font-size` not being used properly

# [1.2.0]
###### 2017-04-03

###### Added
- [SassDoc] for generating a code documentation
- Duotone Light/Dark [Code-Highlight Theme](./aigis/assets/css/highlight) and [Aigis Theme](./aigis/assets/css/themes)
- Possibility to define custom sourcePath in styleguide components

###### Changed
- Rename `map-stringify()` to `stringify()`
- Improve [`stringify()`](./src/meta/_functions.scss) to accept custom separator and patterns
- Dropping double variable color system in favor of a single one ([#1])

###### Fixed
- Build all `*.scss` files, not just `styles.scss`

# [1.1.0]
###### 2017-03-24

Lots of new features have been added. 👏

###### Added
- Styleguide generation with [Aigis]
- Custom extension of the [rscss] system called *«exceptions»*
- [Vertical Rhythm] functions and base styles
- More (hopefully) self-explanatory components

###### Changed
- All Sass files are now in a `src` folder for consistency reasons to other [foundations]
- The `meta/_config.scss` has been dumped in favor of more tiny semantic files like [`_colors.scss`](./src/meta/_colors.scss) or [`_breakpoints.scss`](./src/meta/_breakpoints.scss)
- [Debugging styles](./src/shared/_debug.scss) have been split into separate single purpose classes

# 1.0.0
###### 2017-02-21

First public release! 🎉

[1.5.0]: https://github.com/gridonic/sass/compare/1.4.1...HEAD
[1.4.1]: https://github.com/gridonic/sass/compare/1.4.0...1.4.1
[1.4.0]: https://github.com/gridonic/sass/compare/1.3.0...1.4.0
[1.3.0]: https://github.com/gridonic/sass/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/gridonic/sass/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/gridonic/sass/compare/1.0.0...1.1.0

[#1]: https://github.com/gridonic/sass/issues/1

[Aigis]: https://pxgrid.github.io/aigis/
[rscss]: http://rscss.io/
[Vertical Rhythm]: https://zellwk.com/blog/why-vertical-rhythms/
[foundations]: https://github.com/search?q=topic%3Afoundation+org%3Agridonic&type=Repositories
[SassDoc]: http://sassdoc.com/
[node-sass-magic-importer]: https://github.com/maoberlehner/node-sass-magic-importer
[highlight.js]: https://highlightjs.org/
[Gemini]: https://github.com/gemini-testing/gemini
[Selector filtering]: https://github.com/maoberlehner/node-sass-magic-importer#selector-filtering
[Node filtering]: https://github.com/maoberlehner/node-sass-magic-importer#node-filtering
[Module importing]: https://github.com/maoberlehner/node-sass-magic-importer#module-importing
[Globbing]: https://github.com/maoberlehner/node-sass-magic-importer#globbing
[Autoprefixer]: https://github.com/postcss/autoprefixer
[PostCSS]: https://github.com/postcss/postcss
[browserlist]: http://browserl.ist/?q=last+2+versions
[HTML Validator]: https://github.com/zrrrzzt/html-validator
[validator.w3.org/nu]: https://validator.w3.org/nu/
[Family.scss]: https://lukyvj.github.io/family.scss/
[cssnano]: http://cssnano.co/
[StyleStats]: https://github.com/t32k/stylestats
