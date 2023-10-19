const TodoList = require('./TodoList')

describe('TodoList class', () => {
  test('should initialise with an empty todo array', () => {
    // Arrange
    const todoList = new TodoList();
    
    // Act
    const todos = todoList.list();
    
    // Assert
    expect(todos.length).toBe(0);
  });

  describe('add()', () => {
    test('should create a new todo and add it to the todo array', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      const updatedList = todoList.list()
      
      // Assert
      expect(updatedList.length).toBe(1);
      expect(updatedList[0].item).toBe("Go climbing");
    });
    
    test('should create mulitple new todos and add them to the todo array', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      todoList.add("Relax");
      todoList.add("Visit Grandma");
      const updatedList = todoList.list()
      
      // Assert
      expect(updatedList.length).toBe(3);
      expect(updatedList[0].item).toBe("Go climbing");
      expect(updatedList[2].item).toBe("Visit Grandma");
    });
  });
  
  describe('assignId()', () => {
    test('should set an id of 1 for the first todo', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      const updatedList = todoList.list()
      
      // Assert
      expect(updatedList[0].id).toBe(1);
    });
    
    test('should set an id of 2 and 3 for the 2nd and 3rd todos', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      todoList.add("Relax");
      todoList.add("Visit Grandma");
      const updatedList = todoList.list()
      
      // Assert
      expect(updatedList[1].id).toBe(2);
      expect(updatedList[2].id).toBe(3);
    });
    
    test('should set an id one above current highest id', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Relax");
      let updatedList = todoList.list()
      updatedList[0].id = 12
      todoList.add("Get busy");
      updatedList = todoList.list()
      
      // Assert
      expect(updatedList[1].id).toBe(13);
    });
  });
});