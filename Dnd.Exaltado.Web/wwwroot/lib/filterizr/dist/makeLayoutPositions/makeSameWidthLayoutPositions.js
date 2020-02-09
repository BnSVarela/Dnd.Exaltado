/**
 * Same width layout for items that have the same width and varying height
 */
export default (function (containerWidth, itemsDimensions, gutterPixels) {
    var columns = Math.floor(containerWidth / (itemsDimensions[0].width + gutterPixels));
    var itemsPositions = itemsDimensions.map(function (_a, index) {
        var width = _a.width;
        var row = Math.floor(index / columns);
        var col = index - columns * row;
        return {
            left: col * (width + gutterPixels),
            // The top position of every item for this layout
            // is the sum of the items positioned above it
            top: itemsDimensions
                .slice(0, index)
                .filter(function (_, subIndex) { return (index - subIndex) % columns === 0; })
                .reduce(function (sum, _a) {
                var height = _a.height;
                return sum + height + gutterPixels;
            }, 0),
        };
    });
    // The height of the container for this layout is
    // going to be the same as that of the longest column.
    var columnsHeights = itemsDimensions.reduce(function (acc, _a, index) {
        var height = _a.height;
        var row = Math.floor(index / columns);
        var col = index - columns * row;
        acc[col] += height + gutterPixels;
        return acc;
    }, Array.apply(null, Array(columns)).map(Number.prototype.valueOf, 0));
    return {
        containerHeight: Math.max.apply(Math, columnsHeights) + gutterPixels,
        itemsPositions: itemsPositions,
    };
});
//# sourceMappingURL=makeSameWidthLayoutPositions.js.map