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
/**
 * Same height layout for items that have the same height, but can have varying width
 */
export default (function (containerWidth, itemsDimensions, gutterPixels) {
    var endWidths = itemsDimensions.map(function (_a, index) {
        var width = _a.width;
        var prevWidth = itemsDimensions
            .slice(0, index)
            .reduce(function (acc, _a) {
            var width = _a.width;
            return acc + width + gutterPixels * 2;
        }, 0);
        return prevWidth + width + gutterPixels;
    });
    var rowStartIndexes = endWidths.reduce(function (acc, width, index) {
        var _a;
        var accLength = Object.keys(acc).length;
        var rowMustBreak = width > containerWidth * accLength;
        return __assign(__assign({}, acc), (rowMustBreak && (_a = {}, _a[accLength] = index, _a)));
    }, { 0: 0 });
    var itemsPositions = itemsDimensions.map(function (_a, index) {
        var height = _a.height;
        var row = Math.floor(endWidths[index] / containerWidth);
        return {
            left: itemsDimensions
                .slice(rowStartIndexes[row], index)
                .reduce(function (acc, _a) {
                var width = _a.width;
                return acc + width + gutterPixels;
            }, 0),
            top: (height + gutterPixels) * row,
        };
    });
    var totalRows = Object.keys(rowStartIndexes).length;
    var totalItemHeight = itemsDimensions[0].height + gutterPixels;
    var containerHeight = totalRows * totalItemHeight + gutterPixels;
    return {
        containerHeight: containerHeight,
        itemsPositions: itemsPositions,
    };
});
//# sourceMappingURL=makeSameHeightLayoutPositions.js.map