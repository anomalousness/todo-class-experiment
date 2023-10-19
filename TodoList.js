const Todo = require('./Todo');

class TodoList {
  constructor() {
    this.todoArray = [];
  }

  list() {
    return this.todoArray;
  }

  add(thingToDo) {
    const todo = new Todo(thingToDo);
    todo.id = this.assignId()
    this.todoArray.push(todo);
  }

  assignId() {
    if (this.todoArray.length === 0) return 1;
    return (Math.max(...this.todoArray.map(todo => todo.id))) + 1;
  }
}

module.exports = TodoList;
