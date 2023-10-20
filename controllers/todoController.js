const TodoList = require('../src/TodoClasses/TodoList');
let {todoList} = require('../src/TodoClasses/TodoList');

const getTodos = (req, res) => {
  const todos = todoList.list();
  res.status(200).json(todos);
};

const getTodoById = (req, res) => {
  const { id } = req.params;
  const requestedTodo = todoList.listById(Number(id));

  if (!requestedTodo) notFound(res)

  res.status(200).json(requestedTodo);
};

const addTodo = (req, res) => {
  const { item } = req.body;
  const newTodo = todoList.add(item);

  res.status(201).json(newTodo);
};

const notFound = (res) => {
  res.status(404).json({
    error: "Not Found",
    message: "Todo with that ID was not found"
  });
  return;
}

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
};
