const express = require('express');
const todoRoutes = require('../routes/todoRoutes');
const { todoList } = require('./TodoClasses/TodoList');

// console.log(todoList)

const app = express();

app.use(express.json());

app.use('/todos', todoRoutes);

module.exports = app;
