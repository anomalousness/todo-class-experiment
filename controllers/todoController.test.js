const todoController = require('./todoController');
const { todoList } = require('../src/TodoClasses/TodoList');

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

  describe('updateTodo()', () => {
    test('should update a todo object item value', () => {
      // Arrange
      const mReq = {
        params: {
          id: 3
        },
        body: {
          item: "Climb a mountain"
        }
      };
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      todoController.updateTodo(mReq, mRes);
      const todos = todoList.getAll()

      // Assert
      expect(todos.length).toBe(3)
      expect(mRes.status).toBeCalledWith(201);
      expect(mRes.json.mock.calls[0][0]).toEqual({
        id: 3,
        item: 'Climb a mountain',
        completed: false,
      });
      expect(todos[2].item).toBe("Climb a mountain")
    });
    
    test('should update a todo object completed value', () => {
      // Arrange
      const mReq = {
        params: {
          id: 3
        },
        body: {
          completed: true
        }
      };
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      todoController.updateTodo(mReq, mRes);
      const todos = todoList.getAll()

      // Assert
      expect(todos.length).toBe(3)
      expect(mRes.status).toBeCalledWith(201);
      expect(mRes.json.mock.calls[0][0]).toEqual({
        id: 3,
        item: 'Go climbing',
        completed: true,
      });
      expect(todos[2].completed).toBe(true)
    });
    
    test('should update a todo object item & completed value', () => {
      // Arrange
      const mReq = {
        params: {
          id: 3
        },
        body: {
          item: "Climb a mountain",
          completed: true
        }
      };
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      todoController.updateTodo(mReq, mRes);
      const todos = todoList.getAll()

      // Assert
      expect(todos.length).toBe(3)
      expect(mRes.status).toBeCalledWith(201);
      expect(mRes.json.mock.calls[0][0]).toEqual({
        id: 3,
        item: 'Climb a mountain',
        completed: true,
      });
    });
    
    test('should return 404 where id is invalid', () => {
      // Arrange
      const mReq = {
        params: {
          id: 99
        },
        body: {
          item: "Climb a mountain"
        }
      };
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      todoController.updateTodo(mReq, mRes);
      const todos = todoList.getAll()

      // Assert
      expect(todos.length).toBe(3)
      expect(mRes.status).toBeCalledWith(404);
      expect(mRes.json.mock.calls[0][0]).toEqual({
        error: "Not Found",
        message: "Todo with that ID was not found"
      });
      expect(todos[2].item).toBe("Go climbing")
    });
    
    
  });
  
  describe('deleteTodo()', () => {
    test('should delete a todo object from the array of todo objects', () => {
      // Arrange
      const mReq = {
        params: {
          id: 3
      }};
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      todoController.deleteTodo(mReq, mRes);
      const todos = todoList.getAll()

      // Assert
      expect(todos.length).toBe(2)
      expect(mRes.status).toBeCalledWith(200);
      expect(mRes.json.mock.calls[0][0]).toEqual({
        id: expect.any(Number),
        item: 'Go climbing',
        completed: expect.any(Boolean),
      });
    });
    
    test('should return 404 when ID is invalid', () => {
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
      todoController.deleteTodo(mReq, mRes);
      const todos = todoList.getAll()

      // Assert
      expect(todos.length).toBe(3)
      expect(mRes.status).toBeCalledWith(404);
      expect(mRes.status).not.toBeCalledWith(200);
      expect(mRes.json.mock.calls[0][0]).toEqual({
        error: "Not Found",
        message: "Todo with that ID was not found"
      });
    });
  });
});
