var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { FILTERIZR_STATE } from '../config';
import { getHTMLElement, debounce } from '../utils';
import EventReceiver from '../EventReceiver';
import FilterizrOptions, { defaultOptions } from '../FilterizrOptions';
import FilterControls from '../FilterControls';
import FilterContainer from '../FilterContainer';
import FilterItem from '../FilterItem';
import Spinner from '../Spinner';
import makeLayoutPositions from '../makeLayoutPositions';
import installAsJQueryPlugin from './installAsJQueryPlugin';
var imagesLoaded = require('imagesloaded');
var Filterizr = /** @class */ (function () {
    function Filterizr(selectorOrNode, userOptions) {
        if (selectorOrNode === void 0) { selectorOrNode = '.filtr-container'; }
        if (userOptions === void 0) { userOptions = {}; }
        this.options = new FilterizrOptions(userOptions);
        var _a = this.options, areControlsEnabled = _a.areControlsEnabled, controlsSelector = _a.controlsSelector, isSpinnerEnabled = _a.isSpinnerEnabled;
        this.windowEventReceiver = new EventReceiver(window);
        this.filterContainer = new FilterContainer(getHTMLElement(selectorOrNode), this.options);
        this.imagesHaveLoaded = !this.filterContainer.node.querySelectorAll('img')
            .length;
        if (areControlsEnabled) {
            this.filterControls = new FilterControls(this, controlsSelector);
        }
        if (isSpinnerEnabled) {
            this.spinner = new Spinner(this.filterContainer, this.options);
        }
        this.initialize();
    }
    Object.defineProperty(Filterizr.prototype, "filterItems", {
        get: function () {
            return this.filterContainer.filterItems;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Filters the items in the grid by a category
     * @param category by which to filter
     */
    Filterizr.prototype.filter = function (category) {
        var filterContainer = this.filterContainer;
        filterContainer.trigger('filteringStart');
        filterContainer.filterizrState = FILTERIZR_STATE.FILTERING;
        category = Array.isArray(category)
            ? category.map(function (c) { return c.toString(); })
            : category.toString();
        this.options.filter = category;
        this.render();
    };
    Filterizr.prototype.destroy = function () {
        var _a = this, windowEventReceiver = _a.windowEventReceiver, filterControls = _a.filterControls, filterContainer = _a.filterContainer;
        filterContainer.destroy();
        windowEventReceiver.destroy();
        if (this.options.areControlsEnabled && filterControls) {
            filterControls.destroy();
        }
    };
    /**
     * Inserts a new FilterItem into the grid
     */
    Filterizr.prototype.insertItem = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var filterContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filterContainer = this.filterContainer;
                        filterContainer.insertItem(node);
                        return [4 /*yield*/, this.waitForImagesToLoad()];
                    case 1:
                        _a.sent();
                        this.render();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Removes a FilterItem from the grid
     */
    Filterizr.prototype.removeItem = function (node) {
        var filterContainer = this.filterContainer;
        filterContainer.removeItem(node);
        this.render();
    };
    /**
     * Sorts the FilterItems in the grid
     * @param sortAttr the attribute by which to perform the sort
     * @param sortOrder ascending or descending
     */
    Filterizr.prototype.sort = function (sortAttr, sortOrder) {
        if (sortAttr === void 0) { sortAttr = 'index'; }
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        var _a = this, filterContainer = _a.filterContainer, filterItems = _a.filterItems;
        filterContainer.trigger('sortingStart');
        filterContainer.filterizrState = FILTERIZR_STATE.SORTING;
        filterItems.sort(sortAttr, sortOrder);
        this.render();
    };
    /**
     * Searches through the FilterItems for a given string and adds an additional filter layer.
     */
    Filterizr.prototype.search = function (searchTerm) {
        if (searchTerm === void 0) { searchTerm = this.options.get().searchTerm; }
        this.options.searchTerm = searchTerm.toLowerCase();
        this.render();
    };
    /**
     * Shuffles the FilterItems in the grid, making sure their positions have changed.
     */
    Filterizr.prototype.shuffle = function () {
        var _a = this, filterContainer = _a.filterContainer, filterItems = _a.filterItems;
        filterContainer.trigger('shufflingStart');
        filterContainer.filterizrState = FILTERIZR_STATE.SHUFFLING;
        filterItems.shuffle();
        this.render();
    };
    /**
     * Updates the perferences of the users for rendering the Filterizr grid,
     * additionally performs error checking on the new options passed.
     * @param newOptions to override the defaults.
     */
    Filterizr.prototype.setOptions = function (newOptions) {
        var _a = this, filterContainer = _a.filterContainer, filterItems = _a.filterItems;
        var animationPropIsSet = 'animationDuration' in newOptions ||
            'delay' in newOptions ||
            'delayMode' in newOptions;
        if (newOptions.callbacks || animationPropIsSet) {
            // Remove old callbacks before setting the new ones in the options
            filterContainer.unbindEvents();
        }
        this.options.set(newOptions);
        if (newOptions.easing || animationPropIsSet) {
            filterItems.styles.updateTransitionStyle();
        }
        if (newOptions.callbacks || animationPropIsSet) {
            filterContainer.bindEvents();
        }
        if ('searchTerm' in newOptions) {
            this.search(newOptions.searchTerm);
        }
        if ('filter' in newOptions ||
            'multifilterLomultifilterLogicalOperator' in newOptions) {
            this.filter(this.options.filter);
        }
        if ('gutterPixels' in newOptions) {
            this.filterContainer.styles.updatePaddings();
            this.filterItems.styles.updateWidthWithTransitionsDisabled();
            this.render();
        }
    };
    /**
     * Performs multifiltering with AND/OR logic.
     * @param toggledFilter the filter to toggle
     */
    Filterizr.prototype.toggleFilter = function (toggledFilter) {
        this.options.toggleFilter(toggledFilter);
        this.filter(this.options.filter);
    };
    Filterizr.prototype.render = function () {
        var _a = this, filterContainer = _a.filterContainer, filterItems = _a.filterItems, options = _a.options;
        var itemsToFilterIn = filterItems.getFiltered(options.filter);
        filterItems.getFilteredOut(options.filter).forEach(function (filterItem) {
            filterItem.filterOut();
        });
        var _b = makeLayoutPositions(filterContainer.dimensions.width, itemsToFilterIn.map(function (_a) {
            var dimensions = _a.dimensions;
            return dimensions;
        }), this.options.get()), containerHeight = _b.containerHeight, itemsPositions = _b.itemsPositions;
        filterContainer.setHeight(containerHeight);
        itemsToFilterIn.forEach(function (filterItem, index) {
            filterItem.filterIn(itemsPositions[index]);
        });
    };
    /**
     * Initialization sequence of Filterizr when the grid is first loaded
     */
    Filterizr.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, filterContainer, filterItems, spinner;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, filterContainer = _a.filterContainer, filterItems = _a.filterItems, spinner = _a.spinner;
                        this.bindEvents();
                        return [4 /*yield*/, this.waitForImagesToLoad()];
                    case 1:
                        _b.sent();
                        if (!this.options.isSpinnerEnabled) return [3 /*break*/, 3];
                        // The spinner will first fade out (opacity: 0) before being removed
                        return [4 /*yield*/, spinner.destroy()];
                    case 2:
                        // The spinner will first fade out (opacity: 0) before being removed
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        // Enable animations after the initial render, to let
                        // the items assume their positions before animating
                        this.render();
                        return [4 /*yield*/, filterItems.styles.enableTransitions()];
                    case 4:
                        _b.sent();
                        filterContainer.trigger('init');
                        return [2 /*return*/];
                }
            });
        });
    };
    Filterizr.prototype.bindEvents = function () {
        var _this = this;
        var _a = this, filterItems = _a.filterItems, windowEventReceiver = _a.windowEventReceiver;
        windowEventReceiver.on('resize', debounce(function () {
            filterItems.styles.updateWidthWithTransitionsDisabled();
            _this.render();
        }, 50, false));
    };
    /**
     * Resolves when the images of the grid have finished loading into the DOM
     */
    Filterizr.prototype.waitForImagesToLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, imagesHaveLoaded, filterContainer;
            var _this = this;
            return __generator(this, function (_b) {
                _a = this, imagesHaveLoaded = _a.imagesHaveLoaded, filterContainer = _a.filterContainer;
                if (imagesHaveLoaded) {
                    return [2 /*return*/, Promise.resolve()];
                }
                return [2 /*return*/, new Promise(function (resolve) {
                        imagesLoaded(filterContainer.node, function () {
                            _this.imagesHaveLoaded = true;
                            resolve();
                        });
                    })];
            });
        });
    };
    /**
     * Main Filterizr classes exported as static members
     */
    Filterizr.FilterContainer = FilterContainer;
    Filterizr.FilterItem = FilterItem;
    Filterizr.defaultOptions = defaultOptions;
    /**
     * Static method that receives the jQuery object and extends
     * its prototype with a .filterizr method.
     */
    Filterizr.installAsJQueryPlugin = installAsJQueryPlugin;
    return Filterizr;
}());
export default Filterizr;
//# sourceMappingURL=Filterizr.js.map