# Gemini

We are using [Gemini] for visual regression testing to avoid bugs and minimize unintended side-effects caused by refactoring/ adjustments of code.

> [Gemini] allows you to:
> - Test with different browsers at the same time:
>   - [Google Chrome] (tested in latest version)
>   - [Mozilla Firefox] (tested in latest version)
>   - [Internet Explorer] 8+
>   - [Opera] 12+
> - Test separate sections of a web page
> - Gather CSS test coverage statistics
>
> — https://gemini-testing.github.io/

## Setup

Have a look into the [`./tests`](../tests) folder. There is a *simple* and *self-explanatory* [example](../tests/buttons/button-primary.js) test for the `button-primary` component.

If you run the test out-of-the-box<sup>1</sup> it should **pass** 👍.

If you make *any changes* to the styles of that component, that will *affect the visual appearance*, the test will **fail** 👎.

In case the new styles are *correct* and should be the *new master* version, you need to *update the reference images* that Gemini has created for the test. Therefor simply run `yarn test:update`.

ℹ️ See the [official documentation] for additional information and instructions.

##  
<sup>1</sup> Make sure the [`rootUrl`](./config.yml#L5) is correct.

## Commands

```bash
# run visual regression tests
yarn test

# capture or update reference images
yarn test:update
```

#  
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>

[Gemini]: https://github.com/gemini-testing/gemini
[Google Chrome]: https://www.google.com/chrome/browser/desktop/
[Mozilla Firefox]: https://www.mozilla.org/firefox
[Internet Explorer]: https://www.microsoft.com/en-us/download/internet-explorer.aspx#
[Opera]: https://www.opera.com/
[official documentation]: https://gemini-testing.github.io/
