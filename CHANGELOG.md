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

[1.1.0]: https://github.com/gridonic/sass/compare/1.0.0...1.0.1

[Aigis]: https://pxgrid.github.io/aigis/
[rscss]: http://rscss.io/
[Vertical Rhythm]: https://zellwk.com/blog/why-vertical-rhythms/
[foundations]: https://github.com/search?q=topic%3Afoundation+org%3Agridonic&type=Repositories
