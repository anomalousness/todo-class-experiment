const Todo = require('./Todo');
const TodoList = require('./TodoList');

const todo1 = new Todo("Clean");

console.log(todo1.id)
console.log(todo1.item)
console.log(todo1.completed)

const todoList = new TodoList;

console.log(todoList.assignId())

todoList.add('s')
