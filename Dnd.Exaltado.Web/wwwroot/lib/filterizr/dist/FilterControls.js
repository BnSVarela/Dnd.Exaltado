import { debounce } from './utils';
import EventReceiver from './EventReceiver';
var FilterControls = /** @class */ (function () {
    /**
     * @param filterizr keep a ref to the Filterizr object to control actions
     * @param selector selector of controls in case of multiple Filterizr instances
     */
    function FilterControls(filterizr, selector) {
        if (selector === void 0) { selector = ''; }
        this.filterizr = filterizr;
        this.selector = selector;
        this.filterControls = new EventReceiver(document.querySelectorAll(selector + "[data-filter]"));
        this.multiFilterControls = new EventReceiver(document.querySelectorAll(selector + "[data-multifilter]"));
        this.shuffleControls = new EventReceiver(document.querySelectorAll(selector + "[data-shuffle]"));
        this.searchControls = new EventReceiver(document.querySelectorAll(selector + "[data-search]"));
        this.sortAscControls = new EventReceiver(document.querySelectorAll(selector + "[data-sortAsc]"));
        this.sortDescControls = new EventReceiver(document.querySelectorAll(selector + "[data-sortDesc]"));
        this.initialize();
    }
    FilterControls.prototype.destroy = function () {
        this.filterControls.destroy();
        this.multiFilterControls.destroy();
        this.shuffleControls.destroy();
        this.searchControls.destroy();
        this.sortAscControls.destroy();
        this.sortDescControls.destroy();
    };
    FilterControls.prototype.initialize = function () {
        var _a = this, filterizr = _a.filterizr, selector = _a.selector;
        // Filter EventReceiver
        this.filterControls.on('click', function (evt) {
            var ctrl = evt.currentTarget;
            var targetFilter = ctrl.getAttribute('data-filter');
            filterizr.filter(targetFilter);
        });
        this.multiFilterControls.on('click', function (evt) {
            var ctrl = evt.target;
            var targetFilter = ctrl.getAttribute('data-multifilter');
            filterizr.toggleFilter(targetFilter);
        });
        // Shuffle EventReceiver
        this.shuffleControls.on('click', filterizr.shuffle.bind(filterizr));
        // Search EventReceiver
        this.searchControls.on('keyup', debounce(function (evt) {
            var textfield = evt.target;
            var searchTerm = textfield.value;
            filterizr.search(searchTerm);
        }, 250, false));
        // Sort EventReceiver
        this.sortAscControls.on('click', function () {
            var sortAttr = document.querySelector(selector + "[data-sortOrder]").value;
            filterizr.sort(sortAttr, 'asc');
        });
        this.sortDescControls.on('click', function () {
            var sortAttr = document.querySelector(selector + "[data-sortOrder]").value;
            filterizr.sort(sortAttr, 'desc');
        });
    };
    return FilterControls;
}());
export default FilterControls;
//# sourceMappingURL=FilterControls.js.map