"use strict";
var LinkList = require('../../').LinkList;
var linkedList = new LinkList();
test('Test All the functionalities of the linklist', function () {
    linkedList.setNext(1);
    linkedList.setNext(2);
    linkedList.setNext(3);
    linkedList.setNext(4);
    expect(linkedList.traverse()).toEqual([1, 2, 3, 4]);
    expect(linkedList.getHead).toBe(linkedList.head);
    expect(linkedList.getTail).toBe(linkedList.tail);
    expect(linkedList.getLength).toBe(linkedList.length);
    linkedList.insertAt(2, 10);
    expect(linkedList.traverse()).toEqual([1, 2, 10, 3, 4]);
    linkedList.deleteAt(0);
    expect(linkedList.traverse()).toEqual([2, 10, 3, 4]);
    linkedList.deleteAt(10);
    expect(linkedList.traverse()).toEqual([2, 10, 3, 4]);
    linkedList.deleteAt(4);
    expect(linkedList.traverse()).toEqual([2, 10, 3, 4]);
    expect(linkedList.getHead.getData()).toEqual(2);
    expect(linkedList.getHead.setData(11)).toEqual(11);
    expect(linkedList.traverse()).toEqual([11, 10, 3, 4]);
    expect(linkedList.getTail.getData()).toEqual(4);
    expect(linkedList.getTail.setData('tail')).toEqual('tail');
    expect(linkedList.traverse()).toEqual([11, 10, 3, 'tail']);
});