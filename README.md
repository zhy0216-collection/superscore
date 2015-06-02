# superscore
 a project combine [underscore.js](underscorejs.org) &amp; [functional javascript](http://osteele.com/sources/javascript/functional/)


## some ideas
    * _('x') => this will became a function `function(x){return x}`
    * _([1,2,3]) => this will wrap the array, so that we can write like `_([1,2,3]).map('x+1')` => [2,3,4]
    * all the manipulation functions can support string as function; if not, we still can use _('x+1') as function
    * try if we can do `_ + 1` => generate a function
    * do not modify String.prototype
    * do not consider performance, compatibility
    * write the test first
    * implement lambda then consider convert underscore collection stuff
    
