const express = require('express');
const todoRoutes = require('../routes/todoRoutes');
const initialiseTodoList = require('../utils/initialiseTodoList')
let todoList = initialiseTodoList();

// console.log(todoList)

const app = express();

app.use(express.json());

app.use('/todos', todoRoutes);

module.exports = app;
