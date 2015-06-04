

// throttle
// debounce
// once
// compose

// each
// map
// reduce, consider the default value ?? int => 0, string => ""
// foldl, foldr

var _ = require('lambda');

var slice = Array.prototype.slice.call,
    each = Array.prototype.each.call;

_.partial = function() {
    var fn = this;
    var args = slice(arguments, 0);
    //substitution positions
    var subpos = [],
        value;
    for (var i = 0; i < arguments.length; i++) {
        arguments[i] == _ && subpos.push(i);
    }
    return function() {
        var specialized = args.concat(slice(arguments, subpos.length));
        for (var i = 0; i < Math.min(subpos.length, arguments.length); i++) {
            specialized[subpos[i]] = arguments[i];
        }
        for (var i = 0; i < specialized.length; i++) {
            if (specialized[i] == _)
                return _.partial.apply(fn, specialized);
        }
        return fn.apply(this, specialized);
    }
}

_.delay = function(func, wait) {
    func = _(func);
    var args = slice(arguments, 2);
    return setTimeout(function() {
        return func.apply(null, args);
    }, wait);
};

_.defer = _.partial(_.delay, _, 1);





