"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var N = (function () {
    function N(val) {
        this.data = null;
        this.data = val ? val : null;
        this.lastNode = null;
        this.nextNode = null;
    }
    N.prototype.setData = function (val) {
        this.data = val;
        return this.data;
    };
    N.prototype.getData = function () {
        return this.data;
    };
    N.prototype.after = function () {
        return this.lastNode;
    };
    N.prototype.before = function () {
        return this.lastNode;
    };
    N.prototype.setNextNode = function (node) {
        this.nextNode = node;
    };
    N.prototype.setLastNode = function (node) {
        this.lastNode = node;
    };
    N.prototype.getLastNode = function () {
        return this.lastNode;
    };
    N.prototype.next = function () {
        return this.nextNode;
    };
    return N;
}());
var LinkList = (function () {
    function LinkList(val) {
        if (val === void 0) { val = null; }
        this.val = val;
        this.length = 0;
        var n = new N(val);
        this.head = n;
        this.tail = n;
    }
    LinkList.prototype.setNext = function (val) {
        var n = new N(val);
        ++this.length;
        if (!this.head.getData()) {
            this.head = n;
            this.tail = n;
            return;
        }
        this.tail.setNextNode(n);
        var last = this.tail;
        this.tail = n;
        this.tail.setLastNode(last);
        return this.tail;
    };
    LinkList.prototype.next = function () {
        return this.tail.next();
    };
    Object.defineProperty(LinkList.prototype, "getTail", {
        get: function () {
            return this.tail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkList.prototype, "getHead", {
        get: function () {
            return this.head;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkList.prototype, "getLength", {
        get: function () {
            return this.length;
        },
        enumerable: true,
        configurable: true
    });
    LinkList.prototype.traverse = function () {
        return this.traverseNode(this.head, new Array());
    };
    LinkList.prototype.insertAt = function (index, data) {
        if (Number(index) === NaN) {
            throw "index should be of type number";
        }
        if (index < 0)
            throw "index should be positive";
        if (0 === index) {
            this.head.setData(data);
            return;
        }
        if (index === this.length - 1) {
            this.tail.setData(data);
            return;
        }
        this.insertInMiddle(data, index, 0, this.head);
        return;
    };
    LinkList.prototype.insertInMiddle = function (data, index, currentIndex, node) {
        if (!node)
            return;
        if (currentIndex === index) {
            var newNode = new N(data);
            var previous = node.before();
            newNode.setNextNode(node);
            previous.setNextNode(newNode);
            return;
        }
        if (node)
            this.insertInMiddle(data, index, ++currentIndex, node.next());
    };
    LinkList.prototype.traverseNode = function (node, arr) {
        var data = node.getData();
        arr.push(data);
        if (node.next()) {
            this.traverseNode(node.next(), arr);
        }
        return arr;
    };
    LinkList.prototype.deleteAt = function (index) {
        if (Number(index) === NaN) {
            throw "index should be of type number";
        }
        if (index === 0) {
            var next = this.head.next();
            this.head = next;
            --this.length;
            return;
        }
        if (index === this.length - 1) {
            var leastNode = this.tail.getLastNode();
            this.tail = leastNode;
            this.tail.setNextNode(new N(null));
            --this.length;
            return;
        }
        if (index < this.length)
            this.deleteAtMiddle(index, 0, this.head);
    };
    LinkList.prototype.deleteAtMiddle = function (index, currentIndex, node) {
        if (index === currentIndex) {
            var previousNode = node.getLastNode();
            var nextNode = node.next();
            previousNode.setNextNode(nextNode);
            --this.length;
            return;
        }
        if (node)
            this.deleteAtMiddle(index, ++currentIndex, node.next());
    };
    return LinkList;
}());
exports.default = LinkList;
