const TodoList = require('../src/TodoClasses/TodoList');
let todoList;

const initialiseTodoList = () => {
  todoList = new TodoList();
  todoList.add('Learn TDD');
  todoList.add('Learn Kotlin');
  todoList.add('Go climbing');
  return todoList;
};

module.exports = initialiseTodoList;
