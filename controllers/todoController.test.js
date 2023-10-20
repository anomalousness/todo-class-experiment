const todoController = require('./todoController');
const { TodoList, todoList } = require('../src/TodoClasses/TodoList');

describe('todoController', () => {
  beforeEach(() => {
    todoList.resetForTests()
  });

  describe('getTodos', () => {
    test('should get an array of todo objects', () => {
      // Arrange
      const mReq = {};
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      todoController.getTodos(mReq, mRes);

      // Assert
      expect(mRes.status).toBeCalledWith(200);
      expect(mRes.json.mock.calls[0][0]).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: 1,
            item: 'Learn TDD',
            completed: false,
          }),
        ])
      );
      expect(mRes.json.mock.calls[0][0].length).toBe(3);
      expect(mRes.json.mock.calls[0][0][2].item).toBe('Go climbing');
    });
  });

  describe('getTodoById', () => {
    test('should get a specified todo object', () => {
      // Arrange
      const mReq = {
        params: {
        id: 1
      }};
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      todoController.getTodoById(mReq, mRes);

      // Assert
      expect(mRes.status).toBeCalledWith(200);
      expect(mRes.json.mock.calls[0][0]).toEqual({
            id: 1,
            item: 'Learn TDD',
            completed: false,
          },
      );
    });

    test('should return 404 when ID does not exist', () => {
      // Arrange
      const mReq = {
        params: {
        id: 99
      }};
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      todoController.getTodoById(mReq, mRes);

      // Assert
      expect(mRes.status).toBeCalledWith(404);
      expect(mRes.json.mock.calls[0][0]).toEqual({
        error: "Not Found",
        message: "Todo with that ID was not found"
      },
      );
    });
  });
  
  describe('addTodo', () => {
    test('should add a todo object to the array of todo objects', () => {
      // Arrange
      const mReq = {
        body: {
          item: 'Go see Grandma'
      }};
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      todoController.addTodo(mReq, mRes);
      const todos = todoList.list()

      // Assert
      expect(todos.length).toBe(4)
      expect(mRes.status).toBeCalledWith(201);
      expect(mRes.json.mock.calls[0][0]).toEqual({
        id: expect.any(Number),
        item: 'Go see Grandma',
        completed: false,
      });
    });
  });
});
