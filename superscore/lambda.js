/*
 * Author: Oliver Steele
 * Copyright: Copyright 2007 by Oliver Steele.  All rights reserved.
 * License: MIT License
 * Homepage: http://osteele.com/javascripts/functional
 * Created: 2007-07-11
 * Version: 1.0.2
 * 
 * Modified by Yang
 *
 */

// this file contain code from function.js
// with some modify
// the main responsibility is to turn string to function

// consider use env?
function lambda(exprString) {
    'use strict'
    var params = [];
    var expr = exprString;
    var sections = expr.split(/\s*->\s*/m);
    if (sections.length > 1) {
        while (sections.length) {
            expr = sections.pop();
            params = sections.pop().replace(/^\s*(.*)\s*$/, '$1').split(/\s*,\s*|\s+/m);
            sections.length && sections.push('(function(' + params + '){return (' + expr + ')})');
        }
    } else if (expr.match(/\b_\b/)) {
        params = '_';
    } else {
        // test whether an operator appears on the left (or right), respectively
        var leftSection = expr.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m),
            rightSection = expr.match(/[+\-*\/%&|\^\.=<>!]\s*$/m);
        if (leftSection || rightSection) {
            if (leftSection) {
                params.push('$1');
                expr = '$1' + expr;
            }
            if (rightSection) {
                params.push('$2');
                expr = expr + '$2';
            }
        } else {
            var vars = exprString.replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*\s*:|true|false|null|undefined|this|arguments|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g, '').match(/([a-z_$][a-z_$\d]*)/gi) || []; // '
            for (var i = 0, v; v = vars[i++];)
                params.indexOf(v) >= 0 || params.push(v);
        }
    }
    return new Function(params, 'return (' + expr + ')');
};

module.exports = lambda;
