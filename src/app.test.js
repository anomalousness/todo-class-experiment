const app = require('./app');
const request = require('supertest');
const { TodoList, todoList } = require('./TodoClasses/TodoList');

describe('todoController', () => {
  beforeEach(() => {
    todoList.resetForTests();
  });

  describe('GET /todos', () => {
    test('should return an array of todo objects', async () => {
      // Arrange

      // Act
      const response = await request(app).get('/todos');
      
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
