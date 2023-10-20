const app = require('./app');
const request = require('supertest');
const TodoList = require('./TodoClasses/TodoList');
let todoList;

describe('todoController', () => {
  // beforeEach(() => {
  //   todoList = new TodoList();
  //   todoList.add('Learn TDD');
  //   todoList.add('Learn Kotlin');
  //   todoList.add('Go climbing');
  // });

  describe('GET /todos', () => {
    test('should return an array of todo objects', async () => {
      // Arrange

      // Act
      const response = await request(app).get('/todos');
      // console.log(response);
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: 1,
            item: 'Learn TDD',
            completed: false,
          }),
        ])
      );
      expect(response.body.length).toBe(3);
    });
  });
});
