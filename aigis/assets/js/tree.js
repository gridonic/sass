// @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,o=(this.document||this.ownerDocument).querySelectorAll(e),n=this;do for(t=o.length;--t>=0&&o.item(t)!==n;);while(0>t&&(n=n.parentElement));return n});

define(function () {
    function Tree($el) {
        $el.addEventListener('click', function (e) {
            var $button = e.target.closest('[data-expand]');
            var $branch = e.target.closest('[data-branch]');

            if ($button === null || $branch === null) {
                return;
            }

            if (e.altKey) {
                this.deepToggle($branch);
            } else {
                this.toggle($branch);
            }

            e.preventDefault();
        }.bind(this));
    }

    Tree.prototype.deepToggle = function($el) {
        var $branch = $el;
        var action = $el.classList.contains('-open') ? 'remove' : 'add';

        do {
            this.toggle($branch, action);
        } while ($branch = $branch.querySelector('[data-branch]'));
    }

    Tree.prototype.toggle = function($el, force, classes) {
        $el.classList[force ? force : 'toggle'].call(
            $el.classList, '-open', classes
        );
    }

    return {
        create: function ($el) {
            return new Tree($el);
        }
    }
});
