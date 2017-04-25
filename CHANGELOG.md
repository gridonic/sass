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
