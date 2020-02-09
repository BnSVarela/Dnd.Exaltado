import StyledFilterItems from './StyledFilterItems';
import { allStringsOfArray1InArray2, filterItemArraysHaveSameSorting, intersection, shuffle, sortBy, } from '../utils';
var FilterItems = /** @class */ (function () {
    function FilterItems(filterItems, options) {
        this.filterItems = filterItems;
        this.styledFilterItems = new StyledFilterItems(filterItems);
        this.options = options;
    }
    Object.defineProperty(FilterItems.prototype, "styles", {
        get: function () {
            return this.styledFilterItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterItems.prototype, "length", {
        get: function () {
            return this.filterItems.length;
        },
        enumerable: true,
        configurable: true
    });
    FilterItems.prototype.getItem = function (index) {
        return this.filterItems[index];
    };
    FilterItems.prototype.destroy = function () {
        this.filterItems.forEach(function (filterItem) { return filterItem.destroy(); });
    };
    FilterItems.prototype.push = function (filterItem) {
        return this.filterItems.push(filterItem);
    };
    FilterItems.prototype.remove = function (node) {
        this.filterItems = this.filterItems.filter(function (_a) {
            var filterItemNode = _a.node;
            return filterItemNode !== node;
        });
    };
    FilterItems.prototype.getFiltered = function (filter) {
        var _this = this;
        var searchTerm = this.options.searchTerm;
        var searchedFilterItems = this.search(this.filterItems, searchTerm);
        if (filter === 'all') {
            return searchedFilterItems;
        }
        return searchedFilterItems.filter(function (filterItem) {
            return _this.shouldBeFiltered(filterItem.getCategories(), filter);
        });
    };
    FilterItems.prototype.getFilteredOut = function (filter) {
        var _this = this;
        var searchTerm = this.options.searchTerm;
        return this.filterItems.filter(function (filterItem) {
            var categories = filterItem.getCategories();
            var shouldBeFiltered = _this.shouldBeFiltered(categories, filter);
            var contentsMatchSearch = filterItem.contentsMatchSearch(searchTerm);
            return !shouldBeFiltered || !contentsMatchSearch;
        });
    };
    FilterItems.prototype.sort = function (sortAttr, sortOrder) {
        if (sortAttr === void 0) { sortAttr = 'index'; }
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        var sortedItems = sortBy(this.filterItems, function (filterItem) { return filterItem.getSortAttribute(sortAttr); });
        var orderedSortedItems = sortOrder === 'asc' ? sortedItems : sortedItems.reverse();
        this.filterItems = orderedSortedItems;
    };
    FilterItems.prototype.shuffle = function () {
        var _this = this;
        var filteredItems = this.getFiltered(this.options.filter);
        if (filteredItems.length > 1) {
            var indicesBeforeShuffling_1 = this.getFiltered(this.options.filter)
                .map(function (filterItem) { return _this.filterItems.indexOf(filterItem); })
                .slice();
            // Shuffle filtered items (until they have a new order)
            var shuffledItems = void 0;
            do {
                shuffledItems = shuffle(filteredItems);
            } while (filterItemArraysHaveSameSorting(filteredItems, shuffledItems));
            {
                shuffledItems = shuffle(filteredItems);
            }
            // Update filterItems to have them in the new shuffled order
            shuffledItems.forEach(function (filterItem, index) {
                var _a;
                var newIndex = indicesBeforeShuffling_1[index];
                _this.filterItems = Object.assign([], _this.filterItems, (_a = {},
                    _a[newIndex] = filterItem,
                    _a));
            });
        }
    };
    FilterItems.prototype.search = function (filteredItems, searchTerm) {
        if (!searchTerm) {
            return filteredItems;
        }
        return filteredItems.filter(function (filterItem) {
            return filterItem.contentsMatchSearch(searchTerm);
        });
    };
    FilterItems.prototype.shouldBeFiltered = function (categories, filter) {
        var multifilterLogicalOperator = this.options.getRaw().multifilterLogicalOperator;
        var isMultifilteringEnabled = Array.isArray(filter);
        if (!isMultifilteringEnabled) {
            return categories.includes(filter);
        }
        if (multifilterLogicalOperator === 'or') {
            return !!intersection(categories, filter).length;
        }
        return allStringsOfArray1InArray2(filter, categories);
    };
    return FilterItems;
}());
export default FilterItems;
//# sourceMappingURL=FilterItems.js.map