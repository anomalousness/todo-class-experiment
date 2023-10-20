const Todo = require('./src/TodoClasses/Todo');
const {TodoList} = require('./src/TodoClasses/TodoList');

const todoList = new TodoList;

todoList.add('clean');
todoList.add('sleep');
todoList.add('eat');


// console.log(todo1.id)
// console.log(todo1.item)
// console.log(todo1.completed)


// console.log(todoList.assignId())
console.log(todoList.getAll())
// console.log(todoList.delete(2))
// console.log(todoList.getAll())
// console.log(todoList.delete(1))
// console.log(todoList.getAll())

console.log("update 1, completed true:", todoList.update(1, undefined, true))
console.log(todoList.getAll())

console.log("update 3, no change:", todoList.update(3, undefined, undefined))
console.log(todoList.getAll())

console.log("update 3, item & completed:", todoList.update(3, "Nada", true))
console.log(todoList.getAll())

console.log(todoList.getAll()[2].item);
