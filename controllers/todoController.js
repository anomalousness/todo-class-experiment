const TodoList = require('../TodoList');

const getTodos = (req, res) => {
  const { todoList } = req.body;
  const todos = todoList.list();
  res.status(200).json(todos)
}

module.exports = {
  getTodos,
};