const TodoList = require('../src/TodoClasses/TodoList');
let {todoList} = require('../src/TodoClasses/TodoList');

const getTodos = (req, res) => {
  const todos = todoList.list();
  res.status(200).json(todos);
};

const postTodo = (req, res) => {
  const { item } = req.body;
  const newTodo = todoList.add(item);
  // console.log(todoList)
  res.status(201).json(newTodo);
};

module.exports = {
  getTodos,
  postTodo,
};
