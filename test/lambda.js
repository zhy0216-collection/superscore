var _ = require("../superscore/lambda");
var assert = require("assert");


describe('lambda', function(){
    it("->", function(){
        assert.equal(_('x -> 2*x')(2), 4);
        assert.equal(_('x, y -> 2*x+3*y')(2, 3), 13);
        assert.equal(_('x -> y -> x+y')(2)(3), 5);
    });

    it("direct return value", function(){
        assert.equal(_('2*x')(2), 4);
        assert.equal(_('2*x*y')(2, 3), 12);
    });






})
