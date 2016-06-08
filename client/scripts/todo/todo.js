var todo = {
  setup: function(todos){
    console.log("inside setup");
    todo.app = new todo.App({
      el: '#todo-app',
      items: todos
    });
  },
  // Pass true to enable debug mode, which starts with no data from the server.
  init: function(debug) {
    console.log('Starting todo app...');
    todo.api.sendRequest({
      method: 'GET',
      endpoint: 'http://localhost:3000/todos'
    }, function(err, res){
      if (err) { throw err; }
      if (!debug) {
        // passes just the todos property of the response object (which is an array)
        todo.setup(res.todos);
      } else {
        // if we're in debug mode, just setup the app with no data
        todo.setup();
      }
    });
  }
};
