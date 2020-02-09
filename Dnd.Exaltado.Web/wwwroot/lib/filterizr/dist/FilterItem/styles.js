function getTransitionDelay(index, options) {
    var _a = options.get(), delay = _a.delay, delayMode = _a.delayMode;
    if (delayMode === 'progressive') {
        return delay * index;
    }
    if (index % 2 === 0) {
        return delay;
    }
    return 0;
}
export var makeInitialStyles = function (options) {
    return Object.assign({}, options.get().filterOutCss, {
        '-webkit-backface-visibility': 'hidden',
        perspective: '1000px',
        '-webkit-perspective': '1000px',
        '-webkit-transform-style': 'preserve-3d',
        position: 'absolute',
    });
};
export var makeFilteringStyles = function (targetPosition, cssOptions) {
    return Object.assign({}, cssOptions, {
        transform: (cssOptions.transform || '') + " translate3d(" + targetPosition.left + "px, " + targetPosition.top + "px, 0)",
    });
};
export var makeTransitionStyles = function (index, options) {
    var _a = options.get(), animationDuration = _a.animationDuration, easing = _a.easing;
    return {
        transition: "all " + animationDuration + "s " + easing + " " + getTransitionDelay(index, options) + "ms, width 1ms",
    };
};
//# sourceMappingURL=styles.js.map