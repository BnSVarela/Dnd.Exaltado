/**
 * A function get the intersection of two arrays. IE9+.
 */
export var intersection = function (arr1, arr2) {
    return Array.prototype.filter.call(arr1, function (n) {
        return arr2.includes(n);
    });
};
//# sourceMappingURL=intersection.js.map