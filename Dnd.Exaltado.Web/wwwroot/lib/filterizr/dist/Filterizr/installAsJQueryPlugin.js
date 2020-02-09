import Filterizr from './Filterizr';
import { defaultOptions } from '../FilterizrOptions';
export default function installAsJQueryPlugin($) {
    if (!$)
        throw new Error('Filterizr as a jQuery plugin, requires jQuery to work. If you would prefer to use the vanilla JS version, please use the correct bundle file.');
    // Add filterizr method on jQuery prototype
    $.fn.filterizr = function () {
        var selector = "." + $.trim(this.get(0).className).replace(/\s+/g, '.');
        var args = arguments;
        // user is instantiating Filterizr
        if ((!this._fltr && args.length === 0) ||
            (args.length === 1 && typeof args[0] === 'object')) {
            var options = args.length > 0 ? args[0] : defaultOptions;
            this._fltr = new Filterizr(selector, options);
        }
        // otherwise call the method called
        else if (args.length >= 1 && typeof args[0] === 'string') {
            var method = args[0];
            var methodArgs = Array.prototype.slice.call(args, 1);
            var filterizr = this._fltr;
            switch (method) {
                case 'filter':
                    filterizr.filter.apply(filterizr, methodArgs);
                    return this;
                case 'insertItem':
                    filterizr.insertItem.apply(filterizr, methodArgs);
                    return this;
                case 'removeItem':
                    filterizr.removeItem.apply(filterizr, methodArgs);
                    return this;
                case 'toggleFilter':
                    filterizr.toggleFilter.apply(filterizr, methodArgs);
                    return this;
                case 'sort':
                    filterizr.sort.apply(filterizr, methodArgs);
                    return this;
                case 'shuffle':
                    filterizr.shuffle.apply(filterizr, methodArgs);
                    return this;
                case 'search':
                    filterizr.search.apply(filterizr, methodArgs);
                    return this;
                case 'setOptions':
                    filterizr.setOptions.apply(filterizr, methodArgs);
                    return this;
                case 'destroy':
                    filterizr.destroy.apply(filterizr, methodArgs);
                    // Kill internal reference to Filterizr instance
                    delete this._fltr;
                    return this;
                default:
                    throw new Error("Filterizr: " + method + " is not part of the Filterizr API. Please refer to the docs for more information.");
            }
        }
        return this;
    };
}
//# sourceMappingURL=installAsJQueryPlugin.js.map