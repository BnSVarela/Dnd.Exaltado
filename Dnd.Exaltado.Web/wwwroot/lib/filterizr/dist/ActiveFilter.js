var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * ActiveFilter represents the currently active filter over
 * the grid.
 *
 * It can be a plain string value or an array of strings.
 */
var ActiveFilter = /** @class */ (function () {
    function ActiveFilter(filter) {
        this.filter = filter;
    }
    ActiveFilter.prototype.get = function () {
        return this.filter;
    };
    ActiveFilter.prototype.set = function (targetFilter) {
        this.filter = targetFilter;
    };
    ActiveFilter.prototype.toggle = function (targetFilter) {
        this.filter = this.toggleFilter(this.filter, targetFilter);
    };
    ActiveFilter.prototype.toggleFilter = function (activeFilter, targetFilter) {
        if (activeFilter === 'all') {
            return targetFilter;
        }
        if (Array.isArray(activeFilter)) {
            if (activeFilter.includes(targetFilter)) {
                var newActiveFilter = activeFilter.filter(function (filter) { return filter !== targetFilter; });
                return newActiveFilter.length === 1
                    ? newActiveFilter[0]
                    : newActiveFilter;
            }
            return __spreadArrays(activeFilter, [targetFilter]);
        }
        if (activeFilter === targetFilter) {
            return 'all';
        }
        return [activeFilter, targetFilter];
    };
    return ActiveFilter;
}());
export default ActiveFilter;
//# sourceMappingURL=ActiveFilter.js.map