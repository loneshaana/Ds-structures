const {Stack} = require('./index');
const {List} = require('./index');
const l = new List(1,2,3,'z','x');
console.log(l.get(-1))
l.pushAt('c',7);
l.fill('anwar',8);
console.log(l.get())


// const s = new Stack(2);
// s.push('a');
// s.push('b');

// console.log(s.pop())
// console.log(s.stack.get())
