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
import { FILTERIZR_STATE } from '../config';
import { debounce } from '../utils';
import FilterItem from '../FilterItem';
import FilterItems from '../FilterItems';
import FilterizrElement from '../FilterizrElement';
import StyledFilterContainer from './StyledFilterContainer';
/**
 * Resembles the grid of items within Filterizr.
 */
var FilterContainer = /** @class */ (function (_super) {
    __extends(FilterContainer, _super);
    function FilterContainer(node, options) {
        var _this = this;
        if (!node) {
            throw new Error('Filterizr: could not initialize container, check the selector or node you passed to the constructor exists.');
        }
        _this = _super.call(this, node, options) || this;
        _this.styledNode = new StyledFilterContainer(node, options);
        _this._filterizrState = FILTERIZR_STATE.IDLE;
        _this.styles.initialize();
        _this.filterItems = _this.makeFilterItems(_this.options);
        _this.bindEvents();
        return _this;
    }
    Object.defineProperty(FilterContainer.prototype, "styles", {
        get: function () {
            return this.styledNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterContainer.prototype, "filterizrState", {
        set: function (filterizrState) {
            this._filterizrState = filterizrState;
        },
        enumerable: true,
        configurable: true
    });
    FilterContainer.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unbindEvents();
        this.filterItems.destroy();
    };
    /**
     * Turn the HTML elements in the grid to FilterItem
     * instances and return a collection of them.
     * @throws when no filter items are found in the grid.
     */
    FilterContainer.prototype.makeFilterItems = function (options) {
        var filterItemNodes = Array.from(this.node.querySelectorAll(options.get().gridItemsSelector));
        var filterItemsArray = filterItemNodes.map(function (node, index) { return new FilterItem(node, index, options); });
        var filterItems = new FilterItems(filterItemsArray, options);
        if (!filterItems.length) {
            throw new Error("Filterizr: cannot initialize empty container. Make sure the gridItemsSelector option corresponds to the selector of your grid's items");
        }
        filterItems.styles.updateWidth();
        return filterItems;
    };
    FilterContainer.prototype.insertItem = function (node) {
        var nodeModified = node.cloneNode(true);
        nodeModified.removeAttribute('style');
        this.node.appendChild(nodeModified);
        var filterItem = new FilterItem(nodeModified, this.filterItems.length, this.options);
        filterItem.styles.enableTransitions();
        filterItem.styles.updateWidth();
        this.filterItems.push(filterItem);
    };
    FilterContainer.prototype.removeItem = function (node) {
        this.filterItems.remove(node);
        this.node.removeChild(node);
    };
    FilterContainer.prototype.setHeight = function (newHeight) {
        this.dimensions.height = newHeight;
        this.styles.setHeight(newHeight);
    };
    FilterContainer.prototype.bindEvents = function () {
        var _this = this;
        var _a = this.options.get(), animationDuration = _a.animationDuration, callbacks = _a.callbacks, delay = _a.delay, delayMode = _a.delayMode, gridItemsSelector = _a.gridItemsSelector;
        var animationDelay = delayMode === 'progressive' ? delay * this.filterItems.length : delay;
        this.eventReceiver.on('transitionend', debounce(function (event) {
            var targetIsFilterItem = Array.from(event.target.classList).reduce(function (acc, val) {
                return acc || gridItemsSelector.includes(val);
            }, false);
            if (targetIsFilterItem) {
                switch (_this._filterizrState) {
                    case FILTERIZR_STATE.FILTERING:
                        _this.trigger('filteringEnd');
                        break;
                    case FILTERIZR_STATE.SORTING:
                        _this.trigger('sortingEnd');
                        break;
                    case FILTERIZR_STATE.SHUFFLING:
                        _this.trigger('shufflingEnd');
                        break;
                }
                _this.filterizrState = FILTERIZR_STATE.IDLE;
            }
        }, animationDuration * 100 + animationDelay, false));
        // Public Filterizr events
        this.eventReceiver.on('init', callbacks.onInit);
        this.eventReceiver.on('filteringStart', callbacks.onFilteringStart);
        this.eventReceiver.on('filteringEnd', callbacks.onFilteringEnd);
        this.eventReceiver.on('shufflingStart', callbacks.onShufflingStart);
        this.eventReceiver.on('shufflingEnd', callbacks.onShufflingEnd);
        this.eventReceiver.on('sortingStart', callbacks.onSortingStart);
        this.eventReceiver.on('sortingEnd', callbacks.onSortingEnd);
    };
    FilterContainer.prototype.unbindEvents = function () {
        this.eventReceiver.off('transitionend');
        this.eventReceiver.off('init');
        this.eventReceiver.off('filteringStart');
        this.eventReceiver.off('filteringEnd');
        this.eventReceiver.off('shufflingStart');
        this.eventReceiver.off('shufflingEnd');
        this.eventReceiver.off('sortingStart');
        this.eventReceiver.off('sortingEnd');
    };
    return FilterContainer;
}(FilterizrElement));
export default FilterContainer;
//# sourceMappingURL=FilterContainer.js.map