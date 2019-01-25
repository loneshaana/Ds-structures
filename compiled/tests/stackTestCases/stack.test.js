"use strict";
var Stack = require('../../').Stack;
var myStack = new Stack(5);
test('Test All Functionalities of the stack', function () {
    myStack.push(10);
    expect(myStack.peek()).toBe(10);
    expect(myStack.getSize).toBe(5);
    myStack.pop();
    expect(myStack.stackUnderFlow()).toBe(true);
    expect(myStack.getSize).toBe(5);
    myStack.push(10);
    myStack.push(10);
    myStack.push(10);
    myStack.push(10);
    myStack.push(10);
    expect(myStack.stackOverFlow()).toBe(true);
});
