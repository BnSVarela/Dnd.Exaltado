import Packer from './Packer';
/**
 * Packed layout for items that can have varying width as well as varying height.
 */
export default (function (containerWidth, itemsDimensions, gutterPixels) {
    //Instantiate new Packer, set up grid
    var packer = new Packer(containerWidth);
    var itemsDimensionsWithGutter = itemsDimensions.map(function (_a) {
        var width = _a.width, height = _a.height;
        return ({
            w: width + gutterPixels,
            h: height + gutterPixels,
        });
    });
    // Use packer to convert dimensions into coordinates
    packer.fit(itemsDimensionsWithGutter);
    var itemsPositions = itemsDimensionsWithGutter.map(function (_a) {
        var fit = _a.fit;
        return ({
            left: fit.x,
            top: fit.y,
        });
    });
    return {
        containerHeight: packer.root.h + gutterPixels,
        itemsPositions: itemsPositions,
    };
});
//# sourceMappingURL=makePackedLayoutPositions.js.map