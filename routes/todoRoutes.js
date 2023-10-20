const { Router } = require('express');
const router = Router();

const userController = require('../controllers/todoController');

router.get('/', userController.getTodos);

module.exports = router;