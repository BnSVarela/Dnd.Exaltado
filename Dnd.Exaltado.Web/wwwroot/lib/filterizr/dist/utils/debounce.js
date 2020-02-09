/**
 * Debounce of Underscore.js
 */
export var debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = window.setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
    };
};
//# sourceMappingURL=debounce.js.map