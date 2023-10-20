const Todo = require('./Todo');

class TodoList {
  constructor() {
    this.todoArray = [];
  }

  list() {
    return this.todoArray;
  }

  listById(id) {
    const requestedTodo = this.todoArray.filter(todo => todo.id === id)
    return requestedTodo[0]; // will return undefined if no match
  }

  idCheck(id) {
    const requestedTodo = this.todoArray.find(todo => todo.id === id)
    return requestedTodo !== undefined;
    // will return true of false
  }

  add(thingToDo) {
    const todo = new Todo(thingToDo);
    todo.id = this.assignId();
    this.todoArray.push(todo);
    return todo;
  }

  resetForTests() {
    this.todoArray = [];
    this.add('Learn TDD');
    this.add('Learn Kotlin');
    this.add('Go climbing');
  }

  assignId() {
    if (this.todoArray.length === 0) return 1;
    return (Math.max(...this.todoArray.map(todo => todo.id))) + 1;
  }
}

module.exports = TodoList;
