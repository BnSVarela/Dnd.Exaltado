var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var makePaddingStyles = function (options) { return ({
    padding: options.get().gutterPixels + "px",
}); };
export var makeInitialStyles = function (options) { return (__assign(__assign({}, makePaddingStyles(options)), { position: 'relative', 
    // Needed for flex displays
    width: '100%', display: 'flex', flexWrap: 'wrap' })); };
export var makeHeightStyles = function (height) { return ({
    height: height + "px",
}); };
//# sourceMappingURL=styles.js.map