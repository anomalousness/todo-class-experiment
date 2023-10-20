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
console.log(todoList.delete(2))
console.log(todoList.getAll())
console.log(todoList.delete(1))
console.log(todoList.getAll())
