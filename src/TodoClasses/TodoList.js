const Todo = require('./Todo');

class TodoList {
  constructor() {
    this.todoArray = [];
  }

  getAll() {
    return this.todoArray;
  }

  getById(id) {
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

  delete(id) {
    if (!this.idCheck(id)) return { error: "That ID does not exist" };
    const todoToDelete = this.getById(id);
    const targetIndex = this.todoArray.indexOf(todoToDelete)
    this.todoArray.splice(targetIndex, 1);
    return todoToDelete;
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

const todoList = new TodoList();

module.exports = {
  TodoList,
  todoList
};
