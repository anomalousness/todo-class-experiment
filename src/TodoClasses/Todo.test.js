const Todo = require('./Todo');

describe('Todo class', () => {
  test('initialise with an id of 1, item and completed', () => {
    // Arrange
    const todo = new Todo("Go shopping");
    
    // Act
    const id = todo.id;
    const item = todo.item;
    const completed = todo.completed;
    
    // Assert
    expect(id).toBe(undefined);
    expect(item).toBe("Go shopping");
    expect(completed).toBe(false);
  });
  
  test('initialise with an id of 2, item and completed', () => {
    // Arrange
    const todo = new Todo("Go surfing");
    
    // Act
    const id = todo.id;
    const item = todo.item;
    const completed = todo.completed;
    
    // Assert
    expect(id).toBe(undefined);
    expect(item).toBe("Go surfing");
    expect(completed).toBe(false);
  });
});