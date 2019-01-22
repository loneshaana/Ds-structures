# Data Structues

data-structures and commonly used algoriths written in plain javascript, for eg Lists,stacks,queue etc.
## Getting Started With List
### How To Import
#### const {List} = require('ds-structures');

```
List Examples
```
### Creating A List
const list = new List(1,2,3,4,'a','b','c')
	create a list of [1,2,3,4,a,b,c]

### Retreving A List
	list.get(); //Returs the list;

## get element at particular index
	list.get(index) // returns element at particular index;

### Add data to list
	list.push(value) // pushes the value to your list and returns the list

### Add data to the front of the list
	list.pushFront(value) // adds the value at the 0 index of the list

### Check element is in the list
	list.contains(value) // returns true if value is present in the list or returns false

### Removing element at the last index of the list
	list.popEnd(); // removes the last element of the list and returns the rest of the list;

### Removing element at the 0 index of the list
	list.popFront() // removes the element at the 0 index and returns the rest of the list;

### Removing element from the list
	list.remove(element) // this will remove the first occurance of  element from the list and returns the rest of the list, element should be the value not the index;

### Removing element at particular index
	list.splice(index) // removes the element at the given index and returns the rest of the list

### Removing all the duplicates;
	list.removeDuplicates(); // returns the unique list of elements 

### Filtering from the list

## filter based on mode -> two modes are there i.e (number and string ) mode

## filter all the numbers from the list 
	list.filter('number') // filters all the numbers and returns the list without number , it may contain characters 

## filter all the strings from the list
	list.filter('string') // returns all the numbers;

## filter an element
	list.filter(element) // returns the list without containing this element

## filter and list of elements
	list.filter(new List('a',1,'b')) // returns the list without containing the new filter list

## push element at particular index
	list.pushAt(element,index) // pushes the given element at the given index , if index is not present pushFront is called

## fill the array
	list.fill(element,topIndex,bottomIndex) // fills the array with the given element from  bottomIndex till topIndex, bottomIndex default is 0
	
```
```

## Getting Started With Stack
### How To Import
#### const {Stack} = require('ds-structures');

```
Stack Examples
```
### Create Instance Of Stack
#### const stack = new Stack(size_of_stack);

### Push element to stack
	stack.push(element) // returns the updated stack 

### Pop element from stack
	stack.pop(element) // returns the updated stack

### Peek 
	stack.peek() // returns peek element from the stack

### Check OverFlow
	stack.stackOverFlow() // returns true if the stack is full else false

### Check UnderFlow
	stack.stackUnderFlow() // returns true if stack is empty else false;

### extend the size of stack
	stack.extend(your_new_stack_size)
```