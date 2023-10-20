# Todo App Backend
This project is a self-learning project integrating previous learning about using classes in JavaScript and an express API.

Where an express server would typically use a database, this example API uses the Todo and TodoList classes to in the todoController.

## To install and run
Clone the repo to your local machine.
```bash
git clone https://github.com/anomalousness/todo-class-experiment.git // HTTPS
gh repo clone anomalousness/todo-class-experiment // GitHub CLI
```
cd into the directory and install dependencies:
```bash
cd todo-class-experiment
npm install
```
Start the dev server:
```bash
npm start
```

## To run tests
To run all tests in watchAll mode:
```bash
npm test
```
To run all tests once:
```bash
jest
```
To run all tests once with detailed logging:
```bash
jest --verbose
```
To run selective tests, use `jest` followed by text matching the test files path.
For app.js integration tests:
```bash
jest app
```
For todoController unit tests:
```bash
jest control
```
For Todo class unit tests:
```bash
jest todo.test
```
For TodoList class tests:
```bash
jest todolist
```
## Manual testing using Postman
GET /todos
Make a GET request to http://localhost:3000/todos

GET /todos/:id
Make a GET request to http://localhost:3000/todos/1 where the param is the id of the todo to return. There are no todos by default.

POST /todos
Make a POST request to http://localhost:3000/todos/ with a request body, e.g.
```bash
{
  "item": "Eat cabecou"
}
```

UPDATE /todos/:id
Make a PUT request to http://localhost:3000/todos/ where the param is the id of the todo to update, and with a request body, e.g.
```bash
{
  "item": "Eat cabecou"
}
```
or
```bash
{
  "item": "Eat cabecou",
  "completed": true
}
```
or
```bash
{
  "completed": true
}
```
You may update the item value, the completed value or both.

DELETE /todos/:id
Make a DELETE request to http://localhost:3000/todos/1 where the param is the id of the todo to delete.

## Limitations
This current version has limited validation, e.g. a todo item may be a boolean and the completed value may be a string. 
Appropriate validation in the classes is the next step.