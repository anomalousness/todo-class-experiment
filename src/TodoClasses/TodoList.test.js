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
  
  describe('listById()', () => {
    test('should return a single todo of id 1', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      const todo = todoList.listById(1);
      
      // Assert
      expect(todo.id).toBe(1);
      expect(todo.item).toBe("Go climbing");
    });
    
    test('should return a single todo of id 3', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      todoList.add("Go swimming");
      todoList.add("Go to sleep");
      const todo = todoList.listById(3);
      
      // Assert
      expect(todo.id).toBe(3);
      expect(todo.item).toBe("Go to sleep");
    });
    
    test('should return undefined if todo id is not valid', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      const todo1 = todoList.listById(2);
      const todo2 = todoList.listById("Hello");
      const todo3 = todoList.listById({space: "is the place"});
      
      // Assert
      expect(todo1).toBe(undefined);
      expect(todo2).toBe(undefined);
      expect(todo3).toBe(undefined);
    });
  });
  
  describe('idCheck()', () => {
    test('should return true when id exists', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      todoList.add("Go swimming");
      todoList.add("Go to sleep");
      const check1 = todoList.idCheck(1);
      const check2 = todoList.idCheck(2);
      const check3 = todoList.idCheck(3);
      
      // Assert
      expect(check1).toBe(true);
      expect(check2).toBe(true);
      expect(check3).toBe(true);
    });
    
    test('should return false if id does not exist', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      const check1 = todoList.idCheck(1);
      const check2 = todoList.idCheck("Hello");
      const check3 = todoList.idCheck({space: "is the place"});
      
      // Assert
      expect(check1).toBe(false);
      expect(check2).toBe(false);
      expect(check3).toBe(false);
    });
  });
});