// @see https://gemini-testing.github.io/doc/tests.html
gemini.suite('buttons/button-primary', (suite) => {
    suite
        .setUrl('/category/components/buttons/primary')
        .setCaptureElements('.button-primary')
        .before((actions, find) => {
            this.button = find('.button-primary');
        })
        .capture('plain')
        .capture('hovered', (actions, find) => {
            actions.mouseMove(this.button);
        });
});
