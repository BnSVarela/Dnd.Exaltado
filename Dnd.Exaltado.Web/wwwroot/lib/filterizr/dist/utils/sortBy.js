/**
 * Simple non-mutating sorting function for arrays of objects by a property
 * @param {Array} array to sort
 * @param {Function} propFn fetches the property by which to sort
 * @return {Array} a new sorted array
 */
export var sortBy = function (array, propFn) {
    var cloned = array.slice(0); // perform deep copy of array
    var comparator = function (propFn) {
        return function (a, b) {
            var propA = propFn(a);
            var propB = propFn(b);
            if (propA < propB) {
                return -1;
            }
            else if (propA > propB) {
                return 1;
            }
            else {
                return 0;
            }
        };
    };
    return cloned.sort(comparator(propFn));
};
//# sourceMappingURL=sortBy.js.map