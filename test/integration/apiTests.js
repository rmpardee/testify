describe('API integration', function(){
  var server, setupStub, JSONresponse;

  // RMP: Adding before and after for sinon fake server
  beforeEach(function() {
    // set up the fake server
    server = sinon.fakeServer.create();
    // make up whatever we want our server to respond with
    JSONresponse = JSON.stringify({
      "todos": ['1. Pickup laundry', '2. Mow the lawn', '3. Do the dishes']
    });
    // have the server respond to any resquest with this response, and respond synchronously when called
    server.respondWith(JSONresponse);
    server.respondImmediately = true;

    // stub the setup method in the todo object (make it so it is not run)
    setupStub = sinon.stub(todo, 'setup');
  });

  afterEach(function() {
    // restore the server and the stubbed method back to its original state
    server.restore();
    setupStub.restore();
  });


  it('todo.setup receives an array of todos when todo.init is called', function () {
    // call todo.init (with no parameters, so NOT in debug mode). It should therefore call todo.setup (which is our stubbed fn, so it won't run)
    todo.init();
    // check that todo.init is passing in an array to our stub fn (it should be passing in our JSONresponse.todos)
    sinon.assert.calledWith(setupStub, sinon.match.array);
  });
});
