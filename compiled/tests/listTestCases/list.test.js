"use strict";
var List = require('../../').List;
var l = new List(1, 2, 3, 4);
var a = [1, 2, 3, 4];
test('get should return the list [1,2,3,4]', function () {
    expect(l.get()).toEqual(a);
});
test('get at index 1 should be 2', function () {
    expect(l.get(1)).toEqual(2);
});
test('get at index 5 should be undefined', function () {
    expect(l.get(5)).toBe(undefined);
});
test('push should add the element ', function () {
    l.push('a');
    expect(l.get()).toEqual([1, 2, 3, 4, 'a']);
});
test('contains should return true', function () {
    expect(l.contains('a')).toBe(true);
});
test('contains should return false', function () {
    expect(l.contains('anwar')).toBe(false);
});
test('Push Front should add the value to the front of array', function () {
    l.pushFront('Anwar');
    expect(l.get()).toEqual(['Anwar', 1, 2, 3, 4, 'a']);
});
test('Pop Front should remove the value to the front of array', function () {
    l.popFront();
    expect(l.get()).toEqual([1, 2, 3, 4, 'a']);
});
test('remove duplicates should return the unique list', function () {
    l.push(2);
    l.push(1);
    l.removeDuplicates();
    expect(l.get()).toEqual([1, 2, 3, 4, 'a']);
});
test('splice should remove the element at particular index', function () {
    l.splice(0);
    expect(l.get()).toEqual([2, 3, 4, 'a']);
    expect(l.splice(10)).toEqual(-1);
    expect(l.get()).toEqual([2, 3, 4, 'a']);
});
test('remove should remove the element', function () {
    expect(l.remove(2)).toEqual([3, 4, 'a']);
    expect(l.remove('asdf')).toEqual([3, 4, 'a']);
});
test('filter should filter the list based on number/string/List', function () {
    expect(l.filter('number')).toEqual(['a']);
    expect(l.filter('string')).toEqual([3, 4]);
    expect(l.filter('a')).toEqual([3, 4]);
    expect(l.filter(new List(3, 4, 'a'))).toEqual([]);
});
