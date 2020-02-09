var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { getDataAttributesOfHTMLNode } from '../utils';
import FilterizrElement from '../FilterizrElement';
import StyledFilterItem from './StyledFilterItem';
/**
 * Resembles an item in the grid of Filterizr.
 */
var FilterItem = /** @class */ (function (_super) {
    __extends(FilterItem, _super);
    function FilterItem(node, index, options) {
        var _this = _super.call(this, node, options) || this;
        _this.filteredOut = false;
        _this.lastPosition = { left: 0, top: 0 };
        _this.sortData = __assign(__assign({}, getDataAttributesOfHTMLNode(node)), { index: index, sortData: node.getAttribute('data-sort') });
        _this.styledNode = new StyledFilterItem(node, index, options);
        _this.styles.initialize();
        _this.bindEvents();
        return _this;
    }
    Object.defineProperty(FilterItem.prototype, "styles", {
        get: function () {
            return this.styledNode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroys the FilterItem instance
     */
    FilterItem.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unbindEvents();
    };
    /**
     * Filters in a specific FilterItem out of the grid.
     */
    FilterItem.prototype.filterIn = function (targetPosition) {
        var filterInCss = this.options.get().filterInCss;
        this.styles.setFilteredStyles(targetPosition, filterInCss);
        this.lastPosition = targetPosition;
        this.filteredOut = false;
    };
    /**
     * Filters out a specific FilterItem out of the grid.
     */
    FilterItem.prototype.filterOut = function () {
        var filterOutCss = this.options.get().filterOutCss;
        this.styles.setFilteredStyles(this.lastPosition, filterOutCss);
        this.filteredOut = true;
    };
    /**
     * Returns true if the text contents of the FilterItem match the search term
     * @param searchTerm to look up
     */
    FilterItem.prototype.contentsMatchSearch = function (searchTerm) {
        return this.node.textContent.toLowerCase().includes(searchTerm);
    };
    /**
     * Returns all categories of the grid items data-category attribute
     * with a regexp regarding all whitespace.
     */
    FilterItem.prototype.getCategories = function () {
        return this.node.getAttribute('data-category').split(/\s*,\s*/g);
    };
    /**
     * Returns the value of the sort attribute
     * @param sortAttribute "index", "sortData" or custom user data-attribute by which to sort
     */
    FilterItem.prototype.getSortAttribute = function (sortAttribute) {
        return this.sortData[sortAttribute];
    };
    FilterItem.prototype.bindEvents = function () {
        var _this = this;
        this.eventReceiver.on('transitionend', function () {
            // On transition end determines if the item is filtered out or not.
            // It adds a .filteredOut class so that user can target these items
            // via css if needed. It sets the z-index to -1000 to prevent mouse
            // events from being triggered.
            var filteredOut = _this.filteredOut;
            if (filteredOut) {
                _this.node.classList.add('filteredOut');
                _this.styles.setZIndex(-1000);
            }
            else {
                _this.node.classList.remove('filteredOut');
                _this.styles.removeZIndex();
            }
        });
    };
    FilterItem.prototype.unbindEvents = function () {
        this.eventReceiver.off('transitionend');
    };
    return FilterItem;
}(FilterizrElement));
export default FilterItem;
//# sourceMappingURL=FilterItem.js.map