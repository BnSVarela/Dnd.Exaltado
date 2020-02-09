function calculateWidthSumWithGutters(itemsDimensions, gutterPixels) {
    return itemsDimensions.reduce(function (acc, _a) {
        var width = _a.width;
        return acc + width + gutterPixels;
    }, 0);
}
/**
 * Horizontal layout algorithm that arranges all FilterItems in one row. Their width may vary.
 */
export default (function (itemsDimensions, gutterPixels) { return ({
    containerHeight: Math.max.apply(Math, itemsDimensions.map(function (_a) {
        var height = _a.height;
        return height;
    })) +
        gutterPixels * 2,
    itemsPositions: itemsDimensions.map(function (_a, index) { return ({
        left: calculateWidthSumWithGutters(itemsDimensions.slice(0, index), gutterPixels),
        top: 0,
    }); }),
}); });
//# sourceMappingURL=makeHorizontalLayoutPositions.js.map