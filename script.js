var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
		console.log('My Todos', this.todos);
	},
	addTodos: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	}
};
