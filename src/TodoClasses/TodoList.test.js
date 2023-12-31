const {TodoList} = require('./TodoList')

describe('TodoList class', () => {
  test('should initialise with an empty todo array', () => {
    // Arrange
    const todoList = new TodoList();
    
    // Act
    const todos = todoList.getAll();
    
    // Assert
    expect(todos.length).toBe(0);
  });

  describe('add()', () => {
    test('should create a new todo and add it to the todo array', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      const newTodo = todoList.add("Go climbing");
      const updatedList = todoList.getAll()
      
      // Assert
      expect(updatedList.length).toBe(1);
      expect(updatedList[0].item).toBe("Go climbing");
      expect(newTodo.completed).toBe(false);
    });
    
    test('should create mulitple new todos and add them to the todo array', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      todoList.add("Relax");
      const newTodo = todoList.add("Visit Grandma");
      const updatedList = todoList.getAll()
      
      // Assert
      expect(updatedList.length).toBe(3);
      expect(updatedList[0].item).toBe("Go climbing");
      expect(updatedList[1].item).toBe("Relax");
      expect(newTodo.item).toBe("Visit Grandma");
    });
  });
  
  describe('assignId()', () => {
    test('should set an id of 1 for the first todo', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      const updatedList = todoList.getAll()
      
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
      const updatedList = todoList.getAll()
      
      // Assert
      expect(updatedList[1].id).toBe(2);
      expect(updatedList[2].id).toBe(3);
    });
    
    test('should set an id one above current highest id', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Relax");
      let updatedList = todoList.getAll()
      updatedList[0].id = 12
      todoList.add("Get busy");
      updatedList = todoList.getAll()
      
      // Assert
      expect(updatedList[1].id).toBe(13);
    });
  });
  
  describe('getById()', () => {
    test('should return a single todo of id 1', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      const todo = todoList.getById(1);
      
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
      const todo = todoList.getById(3);
      
      // Assert
      expect(todo.id).toBe(3);
      expect(todo.item).toBe("Go to sleep");
    });
    
    test('should return undefined if todo id is not valid', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      const todo1 = todoList.getById(2);
      const todo2 = todoList.getById("Hello");
      const todo3 = todoList.getById({space: "is the place"});
      
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
  
  describe('resetForTests()', () => {
    test('should return true when id exists', () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      const idCheck = todoList.idCheck(1);
      todoList.resetForTests();
      const todos = todoList.getAll();
      
      // Assert
      expect(idCheck).toBe(false);
      expect(todos.length).toBe(3);
      expect(todos[2].item).toBe("Go climbing");
    });
  });

  describe('update()', () => {
    test("should update a specified todo object's item value", () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      todoList.add("Go surfing");
      const updatedTodo1 = todoList.update(1, "Get some sleep", undefined)
      const updatedTodo2 = todoList.update(2, "Eat ice cream", undefined)
      const updatedList = todoList.getAll()
      
      // Assert
      expect(updatedTodo1).toEqual({
        id: 1,
        item: "Get some sleep",
        completed: false
      });
      expect(updatedTodo2).toEqual({
        id: 2,
        item: "Eat ice cream",
        completed: false
      });
    });
    
    test("should update a specified todo object's completed value", () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      todoList.add("Go surfing");
      const updatedTodo1 = todoList.update(1, undefined, true)
      const updatedTodo2 = todoList.update(2, undefined, true)
      const updatedList = todoList.getAll()
      
      // Assert
      expect(updatedTodo1).toEqual({
        id: 1,
        item: "Go climbing",
        completed: true
      });
      expect(updatedTodo2).toEqual({
        id: 2,
        item: "Go surfing",
        completed: true
      });
    });

    test("should update a specified todo object's item & completed value", () => {
      // Arrange
      const todoList = new TodoList();
      
      // Act
      todoList.add("Go climbing");
      todoList.add("Go surfing");
      const updatedTodo1 = todoList.update(1, "Get some sleep", true)
      const updatedTodo2 = todoList.update(2, "Eat ice cream", true)
      const updatedList = todoList.getAll()
      
      // Assert
      expect(updatedTodo1).toEqual({
        id: 1,
        item: "Get some sleep",
        completed: true
      });
      expect(updatedTodo2).toEqual({
        id: 2,
        item: "Eat ice cream",
        completed: true
      });
    });
  });
});