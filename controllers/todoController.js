const TodoList = require('../src/TodoClasses/TodoList');
const initialiseTodoList = require('../utils/initialiseTodoList');
let todoList = initialiseTodoList();

const getTodos = (req, res) => {
  const todos = todoList.list();
  res.status(200).json(todos);
};

module.exports = {
  getTodos,
};
