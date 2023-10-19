const todoController = require('./todoController');
const TodoList = require('../TodoList');
let todoList;

describe('todoController', () => {

  beforeEach(() => {
    todoList = new TodoList();
    todoList.add("Learn TDD");
    todoList.add("Learn Kotlin");
    todoList.add("Go climbing");
  })

  describe('getTodos', () => {
    test('should get an array of todo objects', () => {
      // Arrange
      const mReq = {
        body: {
        todoList: todoList
      }};
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }
      
      // Act
      todoController.getTodos(mReq, mRes);
      
      // Assert
      expect(mRes.status).toBeCalledWith(200);
      expect(mRes.json).toBeCalledWith(
        expect.arrayContaining([
          expect.objectContaining({
            id: 1,
            item: "Learn TDD",
            completed: false
          })
        ])
      );
      expect(mRes.json.mock.calls[0][0].length).toBe(3);
      expect(mRes.json.mock.calls[0][0][2].item).toBe("Go climbing");
    });
  });
  
});

