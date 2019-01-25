"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var List = (function () {
    function List() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        this.list = arg ? tslib_1.__spread(arg) : [];
    }
    List.prototype.get = function (index) {
        if (index === void 0) { index = -1; }
        if (index && index != -1) {
            var l_1 = tslib_1.__spread(this.list);
            return l_1[index];
        }
        if (this.list)
            return tslib_1.__spread(this.list);
        return [];
    };
    List.prototype.set = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        this.list = tslib_1.__spread(arg);
    };
    List.prototype.push = function (val) {
        if (!val)
            throw new Error('Argument missing for push');
        this.list.push(val);
        return this.list;
    };
    List.prototype.contains = function (val) {
        if (!val)
            return false;
        var index = this.list.indexOf(val);
        if (index === -1)
            return false;
        return true;
    };
    List.prototype.pushFront = function (val) {
        if (!val)
            throw new Error('argument missing for pushFront');
        this.list.unshift(val);
    };
    List.prototype.popEnd = function () {
        this.list.pop();
        return this.list;
    };
    List.prototype.popFront = function () {
        return this.list.shift();
    };
    List.prototype.removeDuplicates = function () {
        if (this.list.length === 0)
            return;
        var setList = new Set(this.list);
        this.list = tslib_1.__spread(setList);
        return this.list;
    };
    List.prototype.splice = function (index) {
        if (index < 0)
            return;
        if (!index && index !== 0)
            throw new Error('invalid index provided');
        if (index >= this.list.length)
            return -1;
        return this.list.splice(index, 1);
    };
    List.prototype.remove = function (val) {
        if (!val)
            throw new Error('you have to provide the value to be removed from the list ');
        var index = this.list.indexOf(val);
        this.splice(index);
        return this.list;
    };
    List.prototype.filter = function (mode) {
        var digit = 1;
        var alphabet = 'a';
        if (!mode)
            throw new Error('Please filter based on mode i.e number or string or the List');
        if (mode instanceof List) {
            return this.list.filter(function (ele) {
                return !mode.contains(ele);
            });
            return;
        }
        if (typeof mode === 'number' || (typeof mode === 'string' && mode.length === 1)) {
            return this.list.filter(function (ele) {
                return ele !== mode;
            });
            return;
        }
        var filterOn = mode === 'number' ? digit : alphabet;
        var arr = this.list.filter(function (ele) {
            return typeof ele !== typeof filterOn;
        });
        return arr;
    };
    List.prototype.pushAt = function (element, index) {
        if (index === void 0) { index = 0; }
        if (!element)
            throw new Error('pushAt requires the element to push element');
        if (index === 0) {
            this.pushFront(element);
            return;
        }
        var l = this.list;
        l[index] = element;
        this.list = l;
        return this.list;
    };
    List.prototype.fill = function (element, topIndex, bottomIndex) {
        if (bottomIndex === void 0) { bottomIndex = 0; }
        if (!topIndex)
            throw new Error('topIndex is required for the fill -> fill(element,topIndex,bottomIndex=0)');
        if (!element)
            throw new Error('element to fill the array is required -> fill(element,topIndex,bottomIndex=0)');
        if (topIndex <= bottomIndex)
            return;
        for (var i = topIndex - 1; i >= 0; i--) {
            this.list[i] = element;
        }
        return this.list;
    };
    return List;
}());
exports.default = List;
