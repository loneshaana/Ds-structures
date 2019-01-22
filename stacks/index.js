/* 
	Implementation of the stack 
	stack has 3 common functionalities
		1. push
		2. pop
		3. peek
		4. stack overflow
		5. stack underflow
		6. stack extend
*/
const List = require('../lists')
class Stack{
	constructor(size){
		if(!size) throw new Error('Stack Error , Stack Size not provided')
		this.size = size;
		this.stack = new List();
	}

	extend(size){
		// extend the stacks size
		if(this.stack.get().length >= size);
			throw new Error(`${size} is invalid provide size more than your stack length size`);
		this.size = size;
	}

	push(element){
		if(this.stack.get().length < this.size)
			this.stack.push(element);
		else{
			throw new Error('Stack Over Flow ')
		}
		return this.stack;
	}

	pop(){
		this.stack.popEnd();
		return this.stack;
	}

	peek(){
		return this.stack.get(this.stack.get().length -1);
	}

	stackOverFlow(){
		if(this.stack.get().length === this.size) return true;
		return false;
	}

	stackUnderFlow(){
		if(this.stack.get().length ===0) return true;
		return false;
	}

}


module.exports = Stack;