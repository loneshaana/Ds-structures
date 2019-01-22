/*
	functions for queue
		1.enqueu
		2.deque
		3.priorityQueue
		4.empty
		5.size
		6.first
		7.last
*/
const List = require('../lists');
class Queue{
	constructor(){
		this.queue = new List();
	}

	enqueue(item){
		this.queue.push(item);
	}

	dequeue(){
		return this.queue.popFront()
	}

	/*
	get the first element from the queue
	*/

	get first(){
		return this.queue.get()[0]
	}

	/*
		get the last element from the queue
	*/
	get last(){
		return this.queue.get()[this.queue.get().length -1]
	}

	/*
		Property of the queue to return
		the size of the queue
	*/
	get size(){
		return this.queue.get().length
	}
}

module.exports = Queue;