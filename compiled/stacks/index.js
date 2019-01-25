"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = tslib_1.__importDefault(require("../lists/index"));
var Stack = (function () {
    function Stack(size) {
        if (!size)
            throw new Error('Stack Error , Stack Size not provided');
        this.size = size;
        this.stack = new index_1.default();
    }
    Object.defineProperty(Stack.prototype, "getSize", {
        get: function () {
            return this.size;
        },
        enumerable: true,
        configurable: true
    });
    Stack.prototype.extend = function (size) {
        if (this.stack.get().length >= size) {
            throw new Error(size + " is invalid provide size more than your stack length size");
        }
        this.size = size;
    };
    Stack.prototype.push = function (element) {
        if (this.stack.get().length < this.size)
            this.stack.push(element);
        else {
            throw new Error('Stack Over Flow ');
        }
        return this.stack;
    };
    Stack.prototype.pop = function () {
        this.stack.popEnd();
        return this.stack;
    };
    Stack.prototype.peek = function () {
        var stackList = this.stack.get();
        return stackList[stackList.length - 1];
    };
    Stack.prototype.stackOverFlow = function () {
        if (this.stack.get().length === this.size)
            return true;
        return false;
    };
    Stack.prototype.stackUnderFlow = function () {
        if (this.stack.get().length === 0)
            return true;
        return false;
    };
    return Stack;
}());
exports.default = Stack;
