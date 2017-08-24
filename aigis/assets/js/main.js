require(['tree', 'highlight'], function (Tree, HighlightJS) {
    HighlightJS.initHighlighting();

    var $tree = document.querySelector('[data-tree]');

    if ($tree) {
        Tree.create($tree);
    }
});
