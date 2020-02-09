function calculateHeightSumWithGutters(itemsDimensions, gutterPixels) {
    if (!itemsDimensions.length) {
        return 0;
    }
    return itemsDimensions.reduce(function (acc, _a) {
        var height = _a.height;
        return acc + height + gutterPixels;
    }, 0);
}
/**
 * Vertical layout algorithm that arranges all FilterItems in one column. Their height may vary.
 */
export default (function (itemsDimensions, gutterPixels) { return ({
    containerHeight: calculateHeightSumWithGutters(itemsDimensions, gutterPixels) + gutterPixels,
    itemsPositions: itemsDimensions.map(function (_, index) { return ({
        left: 0,
        top: calculateHeightSumWithGutters(itemsDimensions.slice(0, index), gutterPixels),
    }); }),
}); });
//# sourceMappingURL=makeVerticalLayoutPositions.js.map