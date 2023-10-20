const app = require('./app');
const request = require('supertest');
const { todoList } = require('./TodoClasses/TodoList');

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

  describe('GET /todos/:id', () => {
    test('should return a specific todo object', async () => {
      // Arrange

      // Act
      const response = await request(app).get('/todos/2');
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: expect.any(Number),
        item: 'Learn Kotlin',
        completed: false,
      })
    });
  });

  describe('POST /todos', () => {
    test('should add a todo to the array of todo objects and return the created todo', async () => {
      // Arrange

      // Act
      const response = await request(app).post('/todos').send({item: "Go tell it on the mountain"});
      
      // Assert
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
            id: expect.any(Number),
            item: 'Go tell it on the mountain',
            completed: false,
          },
      );
      expect(todoList.getAll().length).toBe(4);
    });
  });

  describe('DELETE /todos/:id', () => {
    test('should remove a specific todo object from the todos array', async () => {
      // Arrange

      // Act
      const response = await request(app).delete('/todos/2');
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: 2,
        item: 'Learn Kotlin',
        completed: false,
      })
      // expect(todoList.getAll().length).toEqual(2);
    });
  });
});
