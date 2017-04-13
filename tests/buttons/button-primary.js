// @see https://gemini-testing.github.io/doc/tests.html
gemini.suite('buttons/button-primary', (suite) => {
    suite
        .setUrl('/category/components/buttons/primary')
        .setCaptureElements('.button-primary')
        .capture('plain');
});
