"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var Queue = (function () {
    function Queue() {
        this.queue = new __1.List();
    }
    Queue.prototype.enqueue = function (item) {
        this.queue.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.queue.popFront();
    };
    Object.defineProperty(Queue.prototype, "first", {
        get: function () {
            return this.queue.get()[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "last", {
        get: function () {
            return this.queue.get()[this.queue.get().length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "size", {
        get: function () {
            return this.queue.get().length;
        },
        enumerable: true,
        configurable: true
    });
    return Queue;
}());
exports.default = Queue;
