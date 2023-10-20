const { Router } = require('express');
const router = Router();

const userController = require('../controllers/todoController');

router.get('/', userController.getTodos);

router.get('/:id', userController.getTodoById);

router.post('/', userController.addTodo);

module.exports = router;