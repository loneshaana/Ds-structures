"use strict";
var Queue = require('../../').Queue;
var myQueue = new Queue();
test('Test all the functionalities of the queue', function () {
    expect(myQueue.size).toBe(0);
    myQueue.enqueue('Anwar');
    expect(myQueue.size).toBe(1);
    expect(myQueue.last).toEqual('Anwar');
    expect(myQueue.first).toEqual('Anwar');
    myQueue.enqueue('aaa');
    expect(myQueue.first).toEqual('Anwar');
    expect(myQueue.last).toEqual('aaa');
    expect(myQueue.size).toBe(2);
});
