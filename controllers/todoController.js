let {todoList} = require('../src/TodoClasses/TodoList');

const getTodos = (req, res) => {
  const todos = todoList.getAll();
  res.status(200).json(todos);
};

const getTodoById = (req, res) => {
  const { id } = req.params;
  const requestedTodo = todoList.getById(Number(id));

  if (!requestedTodo) { notFound(res); return; }

  res.status(200).json(requestedTodo);
};

const addTodo = (req, res) => {
  const { item } = req.body;
  const newTodo = todoList.add(item);
  
  res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { item, completed } = req.body;

  if (!todoList.idCheck(id)) { notFound(res); return; } 

  const updateTodo = todoList.update(id, item, completed);

  res.status(201).json(updateTodo);
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const todoToDelete = todoList.getById(Number(id));

  if (!todoToDelete) { notFound(res); return; } 
  todoList.delete(Number(id))

  res.status(200).json(todoToDelete);
};

const notFound = (res) => {
  res.status(404).json({
    error: "Not Found",
    message: "Todo with that ID was not found"
  });
}

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
};
