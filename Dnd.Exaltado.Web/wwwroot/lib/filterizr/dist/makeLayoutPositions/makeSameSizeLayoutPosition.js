/**
 * Same size layout for items that have the same width/height
 */
export default (function (containerWidth, itemsDimensions, gutterPixels) {
    var columns = Math.floor(containerWidth / (itemsDimensions[0].width + gutterPixels));
    var itemsPositions = itemsDimensions.map(function (_a, index) {
        var width = _a.width, height = _a.height;
        var row = Math.floor(index / columns);
        var col = index - columns * row;
        return {
            left: col * (width + gutterPixels),
            top: row * (height + gutterPixels),
        };
    });
    var totalRows = Math.ceil(itemsDimensions.length / columns);
    var firstItemHeight = itemsDimensions[0].height + gutterPixels;
    var containerHeight = totalRows * firstItemHeight + gutterPixels;
    return {
        containerHeight: containerHeight,
        itemsPositions: itemsPositions,
    };
});
//# sourceMappingURL=makeSameSizeLayoutPosition.js.map