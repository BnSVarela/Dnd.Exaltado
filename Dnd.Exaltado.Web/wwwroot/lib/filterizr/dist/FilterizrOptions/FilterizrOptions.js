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
import { cssEasingValuesRegexp, LAYOUT } from '../config';
import { defaultOptions } from '.';
import { checkOptionForErrors, merge } from '../utils';
import ActiveFilter from '../ActiveFilter';
var FilterizrOptions = /** @class */ (function () {
    function FilterizrOptions(userOptions) {
        var options = merge({}, defaultOptions, this.validate(userOptions));
        this.options = this.convertToFilterizrOptions(options);
    }
    Object.defineProperty(FilterizrOptions.prototype, "isSpinnerEnabled", {
        get: function () {
            return this.options.spinner.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterizrOptions.prototype, "areControlsEnabled", {
        get: function () {
            return this.options.setupControls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterizrOptions.prototype, "controlsSelector", {
        get: function () {
            return this.options.controlsSelector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterizrOptions.prototype, "filter", {
        get: function () {
            return this.options.filter.get();
        },
        set: function (filter) {
            this.options.filter.set(filter);
        },
        enumerable: true,
        configurable: true
    });
    FilterizrOptions.prototype.toggleFilter = function (filter) {
        this.options.filter.toggle(filter);
    };
    Object.defineProperty(FilterizrOptions.prototype, "searchTerm", {
        get: function () {
            return this.options.searchTerm;
        },
        set: function (searchTerm) {
            this.options.searchTerm = searchTerm;
        },
        enumerable: true,
        configurable: true
    });
    FilterizrOptions.prototype.get = function () {
        return this.options;
    };
    FilterizrOptions.prototype.getRaw = function () {
        return this.convertToOptions(this.options);
    };
    FilterizrOptions.prototype.set = function (newUserOptions) {
        var options = merge({}, this.convertToOptions(this.options), this.validate(newUserOptions));
        this.options = this.convertToFilterizrOptions(options);
    };
    FilterizrOptions.prototype.convertToFilterizrOptions = function (userOptions) {
        return __assign(__assign({}, userOptions), { filter: new ActiveFilter(userOptions.filter) });
    };
    FilterizrOptions.prototype.convertToOptions = function (filterizrOptions) {
        return __assign(__assign({}, filterizrOptions), { filter: filterizrOptions.filter.get() });
    };
    FilterizrOptions.prototype.validate = function (options) {
        checkOptionForErrors('animationDuration', options.animationDuration, 'number');
        checkOptionForErrors('callbacks', options.callbacks, 'object');
        checkOptionForErrors('controlsSelector', options.controlsSelector, 'string');
        checkOptionForErrors('delay', options.delay, 'number');
        checkOptionForErrors('easing', options.easing, 'string', cssEasingValuesRegexp, 'https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp');
        checkOptionForErrors('delayMode', options.delayMode, 'string', [
            'progressive',
            'alternate',
        ]);
        checkOptionForErrors('filter', options.filter, 'string|number|array');
        checkOptionForErrors('filterOutCss', options.filterOutCss, 'object');
        checkOptionForErrors('filterInCss', options.filterOutCss, 'object');
        checkOptionForErrors('gridItemsSelector', options.gridItemsSelector, 'string');
        checkOptionForErrors('gutterPixels', options.gutterPixels, 'number');
        checkOptionForErrors('layout', options.layout, 'string', Object.values(LAYOUT));
        checkOptionForErrors('multifilterLogicalOperator', options.multifilterLogicalOperator, 'string', ['and', 'or']);
        checkOptionForErrors('searchTerm', options.searchTerm, 'string');
        checkOptionForErrors('setupControls', options.setupControls, 'boolean');
        return options;
    };
    return FilterizrOptions;
}());
export default FilterizrOptions;
//# sourceMappingURL=FilterizrOptions.js.map